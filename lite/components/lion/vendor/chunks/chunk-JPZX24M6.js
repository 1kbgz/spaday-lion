import{a as e}from"./chunk-ZSFSZF4E.js";import{b as s,d as o}from"./chunk-TIEK7LWH.js";import{a as n}from"./chunk-2FELQFK7.js";var t=class extends o{getInstance(l,r){let c=new CustomEvent("request-instance",{detail:{key:l},bubbles:!0,cancelable:!0,composed:!0});return this.dispatchEvent(c),c.detail.instance||r()}connectedCallback(){super.connectedCallback()}static get styles(){return s`
      :host {
        display: block;
        padding: 10px;
        border: 2px solid #ccc;
      }
    `}render(){return n`
      <h3>I am page B</h3>
      <p>Overlays Status:</p>
      <p>Name: ${e.name}</p>
      <p>Blocked: ${e._blockBody}</p>
      <button @click=${()=>{e.blockBody(),this.requestUpdate()}}>block</button>
      <button @click=${()=>{e.unBlockBody(),this.requestUpdate()}}>un-block</button>
      <button @click=${()=>{this.requestUpdate()}}>refresh</button>
    `}};customElements.define("page-b",t);export{t as a};
