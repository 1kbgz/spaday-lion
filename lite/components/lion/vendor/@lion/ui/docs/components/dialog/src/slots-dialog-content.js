import"../../../../../../chunks/chunk-GNR73WXY.js";import{b as s,d as o}from"../../../../../../chunks/chunk-TIEK7LWH.js";import{a as e}from"../../../../../../chunks/chunk-2FELQFK7.js";var t=class extends o{static get styles(){return[s`
        :host {
          background-color: #fff;
        }
        .actions {
          border-top: 2px solid green;
        }
      `]}_closeOverlay(){this.dispatchEvent(new Event("close-overlay",{bubbles:!0}))}render(){return e`
      <p>This content contains an actions slot</p>
      <div class="actions">
        <slot name="actions"></slot>
      </div>
      <button class="close-button" @click="${this._closeOverlay}">⨯</button>
    `}};customElements.define("slots-dialog-content",t);
