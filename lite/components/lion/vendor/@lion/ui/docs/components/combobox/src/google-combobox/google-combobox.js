import{a as g}from"../../../../../../../chunks/chunk-YZWQSMR6.js";import{a as c}from"../../../../../../../chunks/chunk-DIFUPEA7.js";import{a as i}from"../../../../../../../chunks/chunk-M4GM3HKO.js";import{a as h}from"../../../../../../../chunks/chunk-BQOMQMTP.js";import{a as o}from"../../../../../../../chunks/chunk-TUXN2UR5.js";import{d as p}from"../../../../../../../chunks/chunk-2TELIGH7.js";import{d as a}from"../../../../../../../chunks/chunk-4AGXGNB7.js";import"../../../../../../../chunks/chunk-W6YAUKAV.js";import"../../../../../../../chunks/chunk-765SGQET.js";import"../../../../../../../chunks/chunk-EPIRVTM2.js";import"../../../../../../../chunks/chunk-5WT7LR6D.js";import"../../../../../../../chunks/chunk-CHUHNXUY.js";import"../../../../../../../chunks/chunk-RFUIJ2RA.js";import"../../../../../../../chunks/chunk-5G3K6R3U.js";import"../../../../../../../chunks/chunk-DSM4IEUY.js";import"../../../../../../../chunks/chunk-KVEQ5QLL.js";import"../../../../../../../chunks/chunk-JK7PRD3U.js";import"../../../../../../../chunks/chunk-G7OXZUGX.js";import"../../../../../../../chunks/chunk-7ONKQLO6.js";import"../../../../../../../chunks/chunk-GNR73WXY.js";import{b as r}from"../../../../../../../chunks/chunk-TIEK7LWH.js";import{a as e}from"../../../../../../../chunks/chunk-2FELQFK7.js";var b=new URL("./assets/googlelogo_color_272x92dp.png",import.meta.url).href,n=class extends g(a){static get properties(){return{imageUrl:{type:String}}}static get styles(){return[...super.styles,r`
        :host {
          position: relative;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          background: none;
        }

        :host:hover,
        :host([active]) {
          background: #eee !important;
        }

        :host([checked]) {
          background: none;
        }

        /* :host([active]) {
          color: #1867c0 !important;
          caret-color: #1867c0 !important;
        } */

        :host {
          font-weight: bold;
        }

        :host ::slotted(.google-option__highlight) {
          font-weight: normal;
        }

        .google-option__icon {
          height: 20px;
          width: 20px;
          margin-right: 12px;
          fill: var(--icon-color);
        }
      `]}onFilterMatch(t){let{innerHTML:l}=this;this.__originalInnerHTML=l;let d=l.replace(new RegExp(`(${t})`,"i"),'<span class="google-option__highlight">$1</span>');this.setAttribute("aria-label",this.textContent),this.innerHTML=d,this.style.display=""}onFilterUnmatch(){this.removeAttribute("aria-label"),this.__originalInnerHTML&&(this.innerHTML=this.__originalInnerHTML),this.style.display="none"}render(){return e`
      ${this.imageUrl?e` <img class="google-option__icon" src="${this.imageUrl}" alt="" />`:e` <div class="google-option__icon">${i}</div>`}
      ${super.render()}
    `}};customElements.define("google-option",n);var s=class extends p{static get styles(){return[...super.styles,r`
        /** @configure FormControlMixin */

        /* =======================
            block | .form-field
            ======================= */

        :host {
          font-family: arial, sans-serif;
        }

        .form-field__label {
          margin-top: 36px;
          margin-bottom: 24px;
          display: flex;
          justify-content: center;
        }

        /* ==============================
            element | .input-group
            ============================== */

        .input-group {
          margin-bottom: 16px;
          max-width: 582px;
          margin: auto;
        }

        .input-group__container {
          position: relative;
          background: #fff;
          display: flex;
          border: 1px solid #dfe1e5;
          box-shadow: none;
          border-radius: 24px;
          height: 44px;
        }

        .input-group__container:hover,
        :host([opened]) .input-group__container {
          border-color: rgba(223, 225, 229, 0);
          box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
        }

        :host([opened]) .input-group__container {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }

        :host([opened]) .input-group__container::before {
          content: '';
          position: absolute;
          background: white;
          left: 0;
          right: 0;
          height: 10px;
          bottom: -10px;
        }

        :host([opened]) .input-group__container::after {
          content: '';
          position: absolute;
          background: #eee;
          left: 16px;
          right: 16px;
          height: 1px;
          bottom: 0;
          z-index: 3;
        }

        .input-group__prefix,
        .input-group__suffix {
          display: block;
          fill: var(--icon-color);
          display: flex;
          place-items: center;
        }

        .input-group__input {
          flex: 1;
        }

        .input-group__input ::slotted([slot='input']) {
          border: transparent;
          width: 100%;
        }

        /** @configure LionCombobox */

        /* =======================
            block | .form-field
            ======================= */

        #overlay-content-node-wrapper {
          box-shadow: 0 4px 6px rgba(32, 33, 36, 0.28);
          border-radius: 0 0 24px 24px;
          margin-top: -2px;
          padding-top: 6px;
          background: white;
        }

        * > ::slotted([slot='listbox']) {
          margin-bottom: 8px;
          background: none;
        }

        :host {
          --icon-color: #9aa0a6;
        }

        /** @enhance LionCombobox */

        /* ===================================
            block | .google-search-clear-btn
          =================================== */

        .google-search-clear-btn {
          position: relative;
          height: 100%;
          align-items: center;
          display: none;
        }

        .google-search-clear-btn::after {
          border-left: 1px solid #dfe1e5;
          height: 65%;
          right: 0;
          content: '';
          margin-right: 10px;
          margin-left: 8px;
        }

        :host([filled]) .google-search-clear-btn {
          display: flex;
        }

        * > ::slotted([slot='suffix']),
        * > ::slotted([slot='clear-btn']) {
          font: inherit;
          margin: 0;
          border: 0;
          outline: 0;
          padding: 0;
          color: inherit;
          background-color: transparent;
          text-align: left;
          white-space: normal;
          overflow: visible;

          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          -webkit-tap-highlight-color: transparent;

          width: 25px;
          height: 25px;
          cursor: pointer;
        }

        * > ::slotted([slot='suffix']) {
          margin-right: 20px;
        }

        * > ::slotted([slot='prefix']) {
          height: 20px;
          width: 20px;
          margin-left: 12px;
          margin-right: 16px;
        }

        /* =============================
            block | .google-search-btns
            ============================ */

        .google-search-btns {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .google-search-btns__input-button {
          background-image: -webkit-linear-gradient(top, #f8f9fa, #f8f9fa);
          background-color: #f8f9fa;
          border: 1px solid #f8f9fa;
          border-radius: 4px;
          color: #3c4043;
          font-family: arial, sans-serif;
          font-size: 14px;
          margin: 11px 4px;
          padding: 0 16px;
          line-height: 27px;
          height: 36px;
          min-width: 54px;
          text-align: center;
          cursor: pointer;
          user-select: none;
        }

        .google-search-btns__input-button:hover {
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
          background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
          background-color: #f8f8f8;
          border: 1px solid #c6c6c6;
          color: #222;
        }

        .google-search-btns__input-button:focus {
          border: 1px solid #4d90fe;
          outline: none;
        }

        /* ===============================
            block | .google-search-report
            ============================== */

        .google-search-report {
          display: flex;
          align-content: right;
          color: #70757a;
          font-style: italic;
          font-size: 8pt;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          margin-bottom: 8px;
          justify-content: flex-end;
          margin-right: 20px;
        }

        .google-search-report a {
          color: inherit;
        }
      `]}_overlayListboxTemplate(){return e`
      <div id="overlay-content-node-wrapper" role="dialog" aria-label="search predictions">
        <slot name="listbox"></slot>
        ${this._googleSearchBtnsTemplate()}
        <div class="google-search-report"><a href="#">Report inappropriate predictions</a></div>
      </div>
      <slot id="options-outlet"></slot>
    `}_inputGroupSuffixTemplate(){return e`
      <div class="input-group__suffix">
        <div class="google-search-clear-btn">
          <slot name="clear-btn"></slot>
        </div>
        <slot name="suffix"></slot>
      </div>
    `}_googleSearchBtnsTemplate(){return e` <div class="google-search-btns">
      <input
        type="submit"
        class="google-search-btns__input-button"
        value="Google Search"
        aria-label="Google Search"
      />
      <input
        type="submit"
        class="google-search-btns__input-button"
        value="I'm Feeling Lucky"
        aria-label="I'm Feeling Lucky"
      />
    </div>`}_groupTwoTemplate(){return e`${super._groupTwoTemplate()} ${this.opened?"":this._googleSearchBtnsTemplate()} `}get slots(){return{...super.slots,label:()=>o(e` <img alt="Google Search" src="${b}" style="width:auto; " />`),prefix:()=>o(e` <span>${i}</span> `),suffix:()=>o(e`
          <button aria-label="Search by voice">${h}</button>
        `),"clear-btn":()=>o(e`
          <button @click="${this.__clearText}" aria-label="Clear text">${c}</button>
        `)}}get _overlayReferenceNode(){return this.shadowRoot.querySelector(".input-group")}constructor(){super(),this.autocomplete="list",this.showAllOnEmpty=!0,this.__resetFocus=this.__resetFocus.bind(this),this.__clearText=this.__clearText.bind(this)}firstUpdated(t){super.firstUpdated(t),this._overlayContentNode.addEventListener("mouseenter",this.__resetFocus)}_syncToTextboxCondition(){return!0}_showOverlayCondition(t){return this.focused||super._showOverlayCondition(t)}__resetFocus(){this.activeIndex=-1,this.checkedIndex=-1}__clearText(){this._inputNode.value=""}};customElements.define("google-combobox",s);export{s as GoogleCombobox,n as GoogleOption};
