import"../../../../../../chunks/chunk-GNR73WXY.js";import{b as t,d as o}from"../../../../../../chunks/chunk-TIEK7LWH.js";import{a}from"../../../../../../chunks/chunk-2FELQFK7.js";var e=class extends o{static get styles(){return t`
      :host {
        box-shadow: -4px 0 0 rgba(0, 0, 0, 0.2);
        background: #ad1c1c;
        background: linear-gradient(220deg, transparent 10px, #ad1c1c 10px);
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
        color: #fff;
        float: left;
        font:
          bold 12px/35px 'Lucida sans',
          Arial,
          Helvetica;
        height: 35px;
        padding: 0 30px;
        text-decoration: none;
      }

      :host(:hover) {
        background: #c93434;
        background: linear-gradient(220deg, transparent 10px, #c93434 10px);
      }

      :host(:focus) {
        border-radius: 4px;
        box-shadow:
          0 0 8px #9fcaea,
          0 0 0 1px #559bd1;

        /* outline: 0; */
      }

      :host([selected]) {
        background: #fff;
        background: linear-gradient(220deg, transparent 10px, #fff 10px);
        text-shadow: none;
        color: #333;
      }
    `}render(){return a`<slot></slot>`}};customElements.define("lea-tab",e);export{e as LeaTab};
