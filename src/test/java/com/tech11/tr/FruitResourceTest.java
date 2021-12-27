package com.tech11.tr;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class FruitResourceTest {

    // @Test
    public void testHelloEndpoint() {
        given()
          .when().get("/tr")
          .then()
             .statusCode(200)
             .body(is("Hello Time Recording3"));
    }

}