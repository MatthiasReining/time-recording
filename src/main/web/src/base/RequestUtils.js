import ResponseException from "./ResponseException.js";

const errorPath = "src/utils/RequestUtils.js";
const defaultError = {
  origin: `${errorPath} fetchSecure`,
  text: "REQUESTUTILS_FETCH_GENERIC",
};

export default class RequestUtils {
  /**
   *
   * @param {string} url
   * @param {Object} requestParameters - request parameters, see `fetch` in MDN
   * @param {Object} controlParameters - control parameters
   * @param {array} controlParameters.ignoreErrorStatusCodes - array of integer error codes that will be ignored
   * @param {boolean} controlParameters.showErrorBox - `true` (default) shows an error box in case of status code >= 400 (! 404)
   * @param {boolean} controlParameters.blobResponse - `false` (default) needed in case the response is not a text payload
   * @param {boolean} controlParameters.noDefaultHeaders - `false` (default) header will only contain `requestParameters.customHeaders`
   * @param {boolean} controlParameters.notFoundReturnsNull - `true` (default) if 404 the function returns `null`
   *
   */
  static async fetchSecureAsync(
    url,
    requestParameters,
    {
      ignoreErrorStatusCodes = [],
      showErrorBox = false,
      blobResponse = false,
      noDefaultHeaders = false,
      notFoundReturnsNull = true,
    } = {}
  ) {
    let resp;
    if (RequestUtils._isMockMode()) {
      resp = await RequestUtils._getMockData(url, requestParameters);
    } else {
      const headers = new Headers();
      if (!noDefaultHeaders) {
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");
        headers.set(
          "Access-Control-Expose-Headers",
          "Content-Type, Authorization"
        );
        //headers.set("Authorization", `Bearer ${authData.keycloak.token}`);
        //headers.set("X-UserId", authData.loggedInUser.username);
      }

      let fetchRequestParameters = requestParameters;

      if (fetchRequestParameters) {
        if (fetchRequestParameters.customHeaders) {
          fetchRequestParameters.headers = fetchRequestParameters.customHeaders;
          //fetchRequestParameters.headers.set(
          //  "Authorization",
          //  `Bearer ${authData.keycloak.token}`
          //);
        } else if (fetchRequestParameters.headers) {
          for (const pair of headers.entries()) {
            fetchRequestParameters.headers.append(pair[0], pair[1]);
          }
        } else {
          fetchRequestParameters.headers = headers;
        }
      } else {
        fetchRequestParameters = { headers };
      }

      try {
        resp = await window.fetch(url, fetchRequestParameters); // call the server
      } catch (e) {
        // general exception > Server not available or somteimes 500
        e.url = url;
        e.status = 105;
        e.statusText = "Name Not Resolved";

        if (showErrorBox) new alert(e);
        throw new Error(e);
      }
    }

    let data; // JSON payload / in case of an error it could be JSON or text.

    if (ignoreErrorStatusCodes.includes(resp.status)) {
      // errors are ignored -> show must go on / here with null as value
      return null;
    }

    if (resp.status === 204) {
      // no content
      return null;
    }

    if (resp.status === 404) {
      // not found
      if (notFoundReturnsNull) {
        console.warn(
          "NOT_FOUND",
          url,
          requestParameters,
          "ignoreErrorStatusCodes: ",
          ignoreErrorStatusCodes
        );
        return null;
      } else {
        throw new ResponseException(resp);
      }
    }

    const contentType = resp.headers.get("content-type");
    let payloadTypeJSON = false;

    if (contentType) {
      payloadTypeJSON = contentType.toLowerCase().includes("json");
    }

    if (blobResponse) data = resp.blob();
    else data = payloadTypeJSON ? await resp.json() : await resp.text();

    // looks good -> return the data
    if (resp.status < 400) return data;

    // error / validation handling
    // there are two options: structured validation error -> JSON, unstrutured text

    const errorContent = {};
    if (payloadTypeJSON) {
      // structured validation error
      errorContent.text = JSON.stringify(data);
    } else {
      // unstructured validation error
      errorContent.text = data;
    }

    if (showErrorBox) new alert(errorContent);

    if (payloadTypeJSON && resp.status !== 500) {
      throw new ValidationException(data);
    }
    throw new ResponseException(resp, errorContent.text);
  }

  static removeMocks() {
    sessionStorage.removeItem("mockData");
  }

  static addMock(url, params, mockStatus, mockResponse, networkDelay) {
    const packagedData = JSON.stringify({
      mockStatus,
      mockResponse,
      networkDelay,
    });

    // init mockdata
    if (!sessionStorage.getItem("mockData"))
      sessionStorage.setItem("mockData", JSON.stringify({ mocks: {} }));

    const mockStorage = JSON.parse(sessionStorage.getItem("mockData"));
    const key = RequestUtils._buildMockKey(url, params);

    mockStorage.mocks[key] = packagedData;
    sessionStorage.setItem("mockData", JSON.stringify(mockStorage));
  }

  static _isMockMode() {
    return sessionStorage.getItem("mockData") !== null;
  }

  static async _getMockData(url, params) {
    const key = RequestUtils._buildMockKey(url, params);
    let mockStorage = sessionStorage.getItem("mockData");

    if (!mockStorage) {
      throw new Error("No mock data available");
    }
    mockStorage = JSON.parse(mockStorage);

    let mockData = mockStorage.mocks[key];

    if (!mockData) {
      throw new Error("No mock data available");
    }
    mockData = JSON.parse(mockData);

    const mockHeaders = new Headers();
    mockHeaders.set("content-type", "application/json");

    const response = {
      status: mockData.mockStatus,
      headers: mockHeaders,
      json: () => mockData.mockResponse,
    };
    if (mockData.networkDelay)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(response);
        }, mockData.networkDelay || 0);
      });

    return Promise.resolve(response);
  }

  static _buildMockKey(url, params) {
    if (url.indexOf("localhost") > 0 || url.indexOf("tech11.com") > 0) {
      url = url.substring(url.indexOf("api/"));
    }
    const paramPart =
      params && Object.keys(params).length ? JSON.stringify(params) : "";
    return url;
  }
}
