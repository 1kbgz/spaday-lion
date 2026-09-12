import{a}from"./chunk-NCF5SMQP.js";import{b as h}from"./chunk-TIEK7LWH.js";import{a as r}from"./chunk-2FELQFK7.js";var d=h`
  :host {
    display: block;
    height: 100%;
    --min-width: 72px;
    --max-width: 320px;
    --min-height: auto;
    --max-height: fit-content;
    --start-width: var(--min-width);
    --start-height: 100%;
    --transition-property: width;
  }

  :host([position='top']) {
    width: 100%;
    --min-width: 0px;
    --max-width: none;
    --min-height: 50px;
    --max-height: 200px;
    --start-width: 100%;
    --start-height: var(--min-height);
    --transition-property: height;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: var(--start-width);
    height: var(--start-height);
    min-width: var(--min-width);
    max-width: var(--max-width);
    min-height: var(--min-height);
    max-height: var(--max-height);
    overflow: hidden;
    box-sizing: border-box;
    transition: var(--transition-property) 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .headline-container {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }

  :host([position='right']) .headline-container {
    flex-direction: row-reverse;
  }

  .content-container {
    overflow: hidden;
    flex-grow: 1;
  }

  ::slotted([slot='content']) {
    width: var(--max-width);
  }
`;var o={TRANSITION_END:"transitionend",TRANSITION_START:"transitionstart"},s=class extends a{static get properties(){return{transitioning:{type:Boolean,reflect:!0},opened:{type:Boolean,reflect:!0},position:{type:String,reflect:!0}}}constructor(){super(),this.__toggle=()=>{this.opened=!this.opened}}connectedCallback(){super.connectedCallback(),this.hasAttribute("position")||(this.position="left"),this._contentNode&&this._contentNode.style.setProperty("display",""),this.__setBoundaries()}updated(t){super.updated(t),t.has("opened")&&this._openedChanged()}static get styles(){return[d]}__setBoundaries(){let t=this.shadowRoot?.host;this.position==="top"?(this.minHeight=t?getComputedStyle(t).getPropertyValue("--min-height"):"0px",this.maxHeight=t?getComputedStyle(t).getPropertyValue("--max-height"):"0px",this.minWidth="0px",this.maxWidth="none"):(this.minWidth=t?getComputedStyle(t).getPropertyValue("--min-width"):"0px",this.maxWidth=t?getComputedStyle(t).getPropertyValue("--max-width"):"0px",this.minHeight="auto",this.maxHeight="fit-content"),setTimeout(()=>{let i=this.position==="top"?"width":"height";this.__contentNode&&this.__contentNode.style.setProperty(i,"")})}set position(t){let i=this.position;this._position=t,this.setAttribute("position",t),this.__setBoundaries(),this.requestUpdate("position",i)}get position(){return this._position??"left"}async _showAnimation({contentNode:t}){let i=this.position==="top"?this.minHeight:this.minWidth,e=this.position==="top"?this.maxHeight:this.maxWidth,n=this.position==="top"?"height":"width";t.style.setProperty(n,i),await new Promise(p=>requestAnimationFrame(()=>p(!0))),t.style.setProperty(n,e),await this._waitForTransition({contentNode:t})}async _hideAnimation({contentNode:t}){if((this.position==="left"||this.position==="right")&&this._contentWidth===this.minWidth||this.position==="top"&&this._contentHeight===this.minHeight)return;let i=this.position==="top"?this.minHeight:this.minWidth,e=this.position==="top"?"height":"width";t.style.setProperty(e,i),await this._waitForTransition({contentNode:t})}_waitForTransition({contentNode:t}){return new Promise(i=>{let e=()=>{t.removeEventListener(o.TRANSITION_START,e),this.transitioning=!0};t.addEventListener(o.TRANSITION_START,e);let n=()=>{t.removeEventListener(o.TRANSITION_END,n),this.transitioning=!1,i()};t.addEventListener(o.TRANSITION_END,n)})}get __contentNode(){return this.shadowRoot?.querySelector(".container")}get _contentWidth(){return`${this.__contentNode?.getBoundingClientRect().width||0}px`}get _contentHeight(){return`${this.__contentNode?.getBoundingClientRect().height||0}px`}_openedChanged(){this._updateContentSize(),this._invokerNode&&this._invokerNode.setAttribute("aria-expanded",`${this.opened}`),this.dispatchEvent(new CustomEvent("opened-changed"))}async _updateContentSize(){this.__contentNode&&(this.opened?await this._showAnimation({contentNode:this.__contentNode}):await this._hideAnimation({contentNode:this.__contentNode}))}render(){return r`
      <div class="container">
        <div class="headline-container">
          <slot name="invoker"></slot>
          <slot name="headline"></slot>
        </div>
        <div class="content-container">
          <slot name="content"></slot>
        </div>
      </div>
    `}};export{s as a};
