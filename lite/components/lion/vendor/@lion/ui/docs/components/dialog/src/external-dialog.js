import"../../../../../../chunks/chunk-GNR73WXY.js";import{d as i}from"../../../../../../chunks/chunk-TIEK7LWH.js";import{a as o}from"../../../../../../chunks/chunk-2FELQFK7.js";var t=class extends i{static get properties(){return{_isOpen:{state:!0}}}toggleDialog(e){return()=>this._isOpen=e}handleDialog(e){this._isOpen=e.detail.opened}render(){return o`
      <button @click=${this.toggleDialog(!0)}>Open dialog</button>
      <lion-dialog ?opened=${this._isOpen} @opened-changed=${this.handleDialog}>
        <div slot="content" class="dialog demo-box">
          Hello! You can close this notification here:
          <button class="close-button" @click=${this.toggleDialog(!1)}>⨯</button>
        </div>
      </lion-dialog>
    `}};customElements.define("dialog-trigger-demo",t);
