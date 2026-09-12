import{a as d}from"./chunk-TCJO2LYM.js";import{e as n,j as a}from"./chunk-W6YAUKAV.js";import{b as e,d as o}from"./chunk-TIEK7LWH.js";import{a as t}from"./chunk-2FELQFK7.js";var s=class extends n(o){_defineOverlayConfig(){return{placementMode:"global",...a()}}render(){return t`
      <slot name="invoker"></slot>
      <slot name="backdrop"></slot>
      <slot name="content"></slot>
    `}};customElements.define("demo-el-using-overlaymixin",s);var r=class extends n(o){static get styles(){return[e`
        ::slotted([slot='content']) {
          background-color: #333;
          color: white;
          padding: 8px;
        }

        .close-button {
          background: none;
          border: none;
          color: white;
          font-weight: bold;
          font-size: 16px;
          padding: 4px;
        }
      `]}_defineOverlayConfig(){return{placementMode:"global"}}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),this._overlayInvokerNode&&this._overlayInvokerNode.addEventListener("click",this.toggle)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._overlayInvokerNode&&this._overlayInvokerNode.removeEventListener("click",this.toggle)}render(){return t`
      <slot name="invoker"></slot>
      <slot name="backdrop"></slot>
      <div id="overlay-content-node-wrapper">
        <slot name="content"></slot>
      </div>
    `}};customElements.define("demo-overlay",r);var l=class extends d{static get styles(){return[e`
        ::host {
          background: none;
        }
      `]}connectedCallback(){super.connectedCallback(),this.innerText="\u2A2F",this.setAttribute("aria-label","Close")}};customElements.define("demo-close-button",l);
