import"../../../../../../../chunks/chunk-4DHD6RBP.js";import"../../../../../../../chunks/chunk-267D6AZ7.js";import"../../../../../../../chunks/chunk-QYZ5EQGF.js";import"../../../../../../../chunks/chunk-URIW52DN.js";import"../../../../../../../chunks/chunk-X4LV4ZUC.js";import"../../../../../../../chunks/chunk-XYRKM2HA.js";import"../../../../../../../chunks/chunk-KAGY5GXH.js";import"../../../../../../../chunks/chunk-ZEPTMH52.js";import"../../../../../../../chunks/chunk-DSM4IEUY.js";import"../../../../../../../chunks/chunk-GNR73WXY.js";import{b as a,d as n}from"../../../../../../../chunks/chunk-TIEK7LWH.js";import{a as t}from"../../../../../../../chunks/chunk-2FELQFK7.js";var e=class extends n{constructor(){super(),this.page="A"}static get properties(){return{page:{type:String}}}static get styles(){return a`
      :host {
        display: block;
        max-width: 680px;
        margin: 0 auto;
      }

      nav {
        padding: 0 10px 10px 10px;
      }

      button {
        border: none;
        padding: 1rem 2rem;
        background: #0069ed;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
        text-align: center;
        transition:
          background 250ms ease-in-out,
          transform 150ms ease;
      }

      button:hover,
      button:focus {
        background: #0053ba;
      }

      button:focus {
        outline: 1px solid #fff;
        outline-offset: -4px;
      }

      button:active {
        transform: scale(0.99);
      }

      button.active {
        background: #33a43f;
      }

      h1 {
        text-align: center;
      }
    `}render(){return t`
      <h1>Demo App</h1>
      <nav>
        <button
          class="${this.page==="A"?"active":""}"
          @click=${()=>{this.page="A"}}
        >
          Page A
        </button>
        <button
          class="${this.page==="B"?"active":""}"
          @click=${()=>{this.page="B"}}
        >
          Page B
        </button>
      </nav>
      ${this.page==="A"?t` <page-e></page-e> `:t` <page-f></page-f> `}
    `}};customElements.define("demo-app-success",e);
