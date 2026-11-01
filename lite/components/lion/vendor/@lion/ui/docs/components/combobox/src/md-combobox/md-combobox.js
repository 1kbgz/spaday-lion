import{a as p}from"../../../../../../../chunks/chunk-TGK3KC3T.js";import"../../../../../../../chunks/chunk-5NU5SSUE.js";import"../../../../../../../chunks/chunk-YULRYS7B.js";import{d as n}from"../../../../../../../chunks/chunk-UXEQWZHJ.js";import{d as r}from"../../../../../../../chunks/chunk-WAA46TDN.js";import"../../../../../../../chunks/chunk-P652YDCE.js";import"../../../../../../../chunks/chunk-7SOX2IXL.js";import"../../../../../../../chunks/chunk-PULZ3MQ6.js";import"../../../../../../../chunks/chunk-6KBDMRUY.js";import"../../../../../../../chunks/chunk-37KYJJ74.js";import"../../../../../../../chunks/chunk-RFUIJ2RA.js";import"../../../../../../../chunks/chunk-5G3K6R3U.js";import"../../../../../../../chunks/chunk-DSM4IEUY.js";import"../../../../../../../chunks/chunk-X44RUMV6.js";import"../../../../../../../chunks/chunk-JK7PRD3U.js";import"../../../../../../../chunks/chunk-G7OXZUGX.js";import"../../../../../../../chunks/chunk-7ONKQLO6.js";import"../../../../../../../chunks/chunk-GNR73WXY.js";import{b as t}from"../../../../../../../chunks/chunk-TIEK7LWH.js";import{a as s}from"../../../../../../../chunks/chunk-2FELQFK7.js";var o=class extends r{static styles=[...super.styles,t`
      :host {
        position: relative;
        padding: 8px;
      }

      :host([focused]) {
        background: lightgray;
      }

      :host([active]) {
        color: #1867c0 !important;
        caret-color: #1867c0 !important;
      }

      :host ::slotted(.md-highlight) {
        color: rgba(0, 0, 0, 0.38);
        background: #eee;
      }
    `];onFilterMatch(a){let{innerHTML:i}=this;this.__originalInnerHTML=i,this.innerHTML=i.replace(new RegExp(`(${a})`,"i"),'<span class="md-highlight">$1</span>'),this.style.display=""}onFilterUnmatch(){this.__originalInnerHTML&&(this.innerHTML=this.__originalInnerHTML),this.style.display="none"}render(){return s`
      ${super.render()}
      <md-ripple></md-ripple>
    `}};customElements.define("md-option",o);var e=class extends p(n){static styles=[...super.styles,t`
      .input-group__container {
        display: flex;
        border-bottom: none;
      }

      * > ::slotted([role='listbox']) {
        box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
        padding-top: 8px;
        padding-bottom: 8px;
        top: 2px;
      }
    `];constructor(){super(),this.showAllOnEmpty=!0}};customElements.define("md-combobox",e);export{e as MdCombobox,o as MdOption};
