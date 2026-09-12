import"../../../../../../chunks/chunk-GNR73WXY.js";import{b as o,d as s}from"../../../../../../chunks/chunk-TIEK7LWH.js";import{a as t}from"../../../../../../chunks/chunk-2FELQFK7.js";var e=class extends s{static get styles(){return[o`
        :host {
          background-color: #fff;
        }
        .nice {
          font-weight: bold;
          color: green;
        }
        .close-button {
          color: black;
          font-size: 28px;
          line-height: 28px;
        }
      `]}_closeOverlay(){this.dispatchEvent(new Event("close-overlay",{bubbles:!0}))}render(){return t`
      <div><p>Hello person who opened the dialog!</p></div>
      <div>
        <p>Look how nice this <span class="nice">dialog</span> looks!</p>
      </div>
      <button class="close-button" @click="${this._closeOverlay}">⨯</button>
    `}};customElements.define("styled-dialog-content",e);
