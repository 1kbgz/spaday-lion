import{a as o}from"./chunk-IPMKYNQT.js";import{a as f,b as n}from"./chunk-DSM4IEUY.js";import{b as u}from"./chunk-7ONKQLO6.js";import{b as h,d as g}from"./chunk-TIEK7LWH.js";import{a as r,c as i,e as d}from"./chunk-2FELQFK7.js";function m(){if(!n.has("@lion/ui::icons::0.x")){let e=new o;n.set("@lion/ui::icons::0.x",e)}return n.get("@lion/ui::icons::0.x")}var a=f(m);function b(e){let t=e&&e.default?e.default:e;return typeof t=="function"?t(r):t}function p(e){if(!(e===i||u(e)))throw new Error('icon accepts only lit-html templates or functions like "tag => tag`<svg>...</svg>`"')}var l=class extends g{static get properties(){return{svg:{attribute:!1},ariaLabel:{type:String,attribute:"aria-label",reflect:!0},iconId:{type:String,attribute:"icon-id"}}}static get styles(){return[h`
        :host {
          box-sizing: border-box;
          display: inline-block;
          width: 1em;
          height: 1em;
        }

        :host([hidden]) {
          display: none;
        }

        :host:first-child {
          margin-left: 0;
        }

        :host:last-child {
          margin-right: 0;
        }

        ::slotted(svg) {
          display: block;
          width: 100%;
          height: 100%;
        }
      `]}constructor(){super(),this.ariaLabel="",this.iconId="",this.__svg=i}static enabledWarnings=super.enabledWarnings?.filter(t=>t!=="change-in-update")||[];update(t){super.update(t),t.has("ariaLabel")&&this._onLabelChanged(),t.has("iconId")&&this._onIconIdChanged(t.get("iconId"))}render(){return r`<slot></slot>`}connectedCallback(){this._onLabelChanged(),super.connectedCallback(),this.setAttribute("role","img")}set svg(t){this.__svg=t,t==null?this._renderSvg(i):this._renderSvg(b(t))}get svg(){return this.__svg}_onLabelChanged(){this.ariaLabel?this.setAttribute("aria-hidden","false"):(this.setAttribute("aria-hidden","true"),this.removeAttribute("aria-label"))}_renderSvg(t){p(t),d(t,this),this.firstElementChild&&this.firstElementChild.setAttribute("aria-hidden","true")}get _iconManager(){return a}async _onIconIdChanged(t){if(!this.iconId)t&&(this.svg=i);else{let c=this.iconId;try{let s=await this._iconManager.resolveIconForId(c);this.iconId===c&&(this.svg=s)}catch(s){console.error(s)}}}};export{a,l as b};
