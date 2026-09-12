import{a as n}from"./chunk-LBKNAIKS.js";import{a as m,b as u}from"./chunk-NAZQDWW4.js";import{d}from"./chunk-4AGXGNB7.js";import{b as e,d as p}from"./chunk-TIEK7LWH.js";import{a as o}from"./chunk-2FELQFK7.js";var a=class extends d{static properties={regionMeta:{type:Object}};static styles=[super.styles,n,e`
      :host {
        padding: 5px 10px;
        outline: none;
      }

      :host(:hover),
      :host([active]),
      :host([checked]) {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `];get _regionCode(){return this.choiceValue?.toUpperCase()}render(){return this.constructor._contentTemplate({data:this.regionMeta})}static _contentTemplate({data:{regionCode:t,countryCode:r,nameForLocale:h,nameForRegion:g}}){return o`
      <div class="iti__flag-box">
        <div class="iti__flag iti__${t?.toLowerCase()}"></div>
      </div>
      <span class="iti__country-name"> ${h} (${g}) </span>
      <span class="iti__dial-code">+${r}</span>
    `}};customElements.define("intl-option",a);var s=class extends m{static styles=[super.styles,n,e`
      :host {
        /** TODO: avoid importants; should actually be configured in overlay */
        width: auto !important;
        background-color: transparent;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }

      #content-wrapper {
        display: flex;
        align-items: center;
      }
    `];get slots(){return{}}render(){return this.constructor._mainTemplate(this._templateData)}get _templateData(){return{data:{selectedElement:this.selectedElement,hostElement:this.hostElement}}}static _mainTemplate(t){return o` <div id="content-wrapper">${this._contentTemplate(t)}</div> `}static _contentTemplate({data:{selectedElement:t,hostElement:r}}){return t?o`
      <div class="iti__flag iti__${t.regionMeta.regionCode?.toLowerCase()}"></div>
      <div class="iti__arrow iti__arrow--${r.opened?"up":"down"}"></div>
    `:""}};customElements.define("intl-select-invoker",s);var l=class extends p{static styles=[e`
      :host {
        display: block;
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #ccc;
      }
    `];connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}};customElements.define("intl-separator",l);var c=class extends u{static styles=[super.styles,e`
      :host,
      ::slotted(*) {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333;
      }

      ::slotted([role='listbox']) {
        margin-left: -3px;
        display: block;
        white-space: nowrap;
        max-height: 200px;
        overflow-y: scroll;
        position: absolute;
        z-index: 2;
        list-style: none;
        text-align: left;
        padding: 0;
        margin: 0 0 0 -1px;
        box-shadow: 1px 1px 4px rgb(0 0 0 / 20%);
        background-color: white;
        border: 1px solid #ccc;
        -webkit-overflow-scrolling: touch;
        outline: none;
      }

      .form-field__group-two,
      .input-group,
      .input-group__container,
      .input-group__input {
        height: 100%;
      }
    `];static scopedElements={"intl-select-invoker":s};slots={...super.slots,invoker:()=>o`<intl-select-invoker></intl-select-invoker>`}};customElements.define("intl-select-rich",c);export{a,l as b,c};
