import{a as c,b as u,c as b}from"../../../../../../chunks/chunk-PFVGW45Z.js";import"../../../../../../chunks/chunk-MKXJOV6X.js";import"../../../../../../chunks/chunk-PJAI65DG.js";import{b as a}from"../../../../../../chunks/chunk-MFXV3CZH.js";import"../../../../../../chunks/chunk-634FEK4K.js";import{a as n}from"../../../../../../chunks/chunk-QLXUPPY3.js";import{b as d}from"../../../../../../chunks/chunk-E7IO7NYJ.js";import"../../../../../../chunks/chunk-GJ2YTEX2.js";import"../../../../../../chunks/chunk-SVJBS2SZ.js";import"../../../../../../chunks/chunk-WAA46TDN.js";import"../../../../../../chunks/chunk-P652YDCE.js";import"../../../../../../chunks/chunk-7SOX2IXL.js";import{e as l}from"../../../../../../chunks/chunk-PULZ3MQ6.js";import"../../../../../../chunks/chunk-6KBDMRUY.js";import"../../../../../../chunks/chunk-37KYJJ74.js";import"../../../../../../chunks/chunk-RFUIJ2RA.js";import"../../../../../../chunks/chunk-5G3K6R3U.js";import"../../../../../../chunks/chunk-DSM4IEUY.js";import"../../../../../../chunks/chunk-X44RUMV6.js";import"../../../../../../chunks/chunk-JK7PRD3U.js";import"../../../../../../chunks/chunk-G7OXZUGX.js";import"../../../../../../chunks/chunk-7ONKQLO6.js";import"../../../../../../chunks/chunk-GNR73WXY.js";import{b as p}from"../../../../../../chunks/chunk-TIEK7LWH.js";import{a as t}from"../../../../../../chunks/chunk-2FELQFK7.js";var s=class extends l(a){static styles=[super.styles,p`
      :host,
      ::slotted(*) {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333;
      }

      :host {
        max-width: 300px;
      }

      .input-group__container {
        width: 100%;
        height: 34px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
        -webkit-transition:
          border-color ease-in-out 0.15s,
          -webkit-box-shadow ease-in-out 0.15s;
        -o-transition:
          border-color ease-in-out 0.15s,
          box-shadow ease-in-out 0.15s;
        transition:
          border-color ease-in-out 0.15s,
          box-shadow ease-in-out 0.15s;
      }

      .input-group__input {
        padding: 6px;
        box-sizing: border-box;
      }

      .input-group__input ::slotted(input) {
        border: none;
        outline: none;
      }

      :host([focused]) .input-group__container {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow:
          inset 0 1px 1px rgb(0 0 0 / 8%),
          0 0 8px rgb(102 175 233 / 60%);
        box-shadow:
          inset 0 1px 1px rgb(0 0 0 / 8%),
          0 0 8px rgb(102 175 233 / 60%);
      }
    `];static templates={...super.templates||{},dropdown:i=>{let{refs:e,data:r}=i;return t`
        <intl-select-rich
          ${d(e?.dropdown?.ref)}
          label="${e?.dropdown?.labels?.country}"
          label-sr-only
          .config="${{elementToFocusAfterHide:e?.input}}"
          @model-value-changed="${e?.dropdown?.listeners["model-value-changed"]}"
          style="${e?.dropdown?.props?.style}"
        >
          ${r?.regionMetaListPreferred?.length?t` ${n(r.regionMetaListPreferred,o=>o.regionCode,o=>t`${this.templates.dropdownOption(i,o)} `)}<intl-separator></intl-separator>`:""}
          ${n(r.regionMetaList,o=>o.regionCode,o=>t`${this.templates.dropdownOption(i,o)} `)}
        </intl-select-rich>
      `},dropdownOption:(i,e)=>t`
      <intl-option .choiceValue="${e.regionCode}" .regionMeta="${e}">
      </intl-option>
    `};static scopedElements={...super.scopedElements,"intl-select-rich":b,"intl-option":c,"intl-separator":u}};customElements.define("intl-input-tel-dropdown",s);export{s as IntlInputTelDropdown};
