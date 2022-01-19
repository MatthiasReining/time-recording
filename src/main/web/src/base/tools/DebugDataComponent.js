import { html } from "../../web_modules/lit-html.js";
import { AbstractWebComponent } from "../../web_modules/tech11-web-base.js";

export default class DebugDataComponent extends AbstractWebComponent {
  init() {
    const { host } = window.location;
    this.isCollapsed = true;

    // TODO use debug role

    this.canDebug =
      host.includes("localhost") ||
      host.includes("dev-03" || host.includes("dev-ui"));
    if (this.canDebug && this.context) {
      this.context.addListener(() => this.refreshComponent());
    }
  }

  _showHideDebugSection() {
    if (this.getData && typeof this.getData === "function")
      this.debugModel = this.getData();
    this.isCollapsed = !this.isCollapsed;
    this.refreshComponent();
  }

  _onCopy() {
    const copyMessage = this.querySelector(".copy-message");
    const copyText = this.querySelector(".copy-target");
    copyText.select();
    const copyStatus = document.execCommand("copy");
    if (copyStatus) {
      copyMessage.classList.remove("d-none");
    }
    clearTimeout(this._copyMessageTO);
    this._copyMessageTO = setTimeout(() => {
      copyMessage.classList.add("d-none");
    }, 1000);
  }

  renderComponent() {
    if (!this.canDebug) return "";

    const showClass = this.isCollapsed ? "d-none" : "show";
    return html`
      <hr class="mt-3" />
      <button
        @click=${() => this._showHideDebugSection()}
        class="btn btn-outline-primary btn-sm"
        type="button"
        aria-expanded="false"
      >
        Debug
      </button>
      <button
        type="button"
        class="btn btn-sm btn-outline-secondary ml-3 ${showClass}"
        @click=${(e) => this._onCopy(e)}
      >
        🍝
      </button>
      <button
        type="button"
        class="btn btn-sm btn${!document.body.classList.contains("debug")
          ? "-outline"
          : ""}-secondary ml-1 ${showClass}"
        @click=${(e) => {
          document.body.classList.toggle("debug");
          this.refreshComponent();
        }}
      >
        #️⃣
      </button>
      <span class="copy-message ml-2 text-success d-none"
        >📋 Copied to clipboard</span
      >
      <div
        class="mt-2 ${showClass}"
        style="background-color:#fff"
        class="debug-model-view"
      >
        <code class="debug-model-content" style="white-space: pre;"
          >${JSON.stringify(this.debugModel, " ", 4)}</code
        >
        <div style="opacity: 0.000001; height: 1px; pointer-events: none">
          <textarea type="text" value="" class="copy-target">
${JSON.stringify(this.debugModel, " ", 4)}</textarea
          >
        </div>
      </div>
    `;
  }

  static register() {
    if (!customElements.get("t11-debug-data")) {
      customElements.define("t11-debug-data", DebugDataComponent);
    }
  }
}

DebugDataComponent.register();
