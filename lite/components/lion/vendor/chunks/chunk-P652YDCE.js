import{a as A}from"./chunk-7SOX2IXL.js";import{a as R,b as O}from"./chunk-DSM4IEUY.js";import{f as F}from"./chunk-X44RUMV6.js";import{a as S}from"./chunk-G7OXZUGX.js";import{b as N}from"./chunk-TIEK7LWH.js";import{a as E}from"./chunk-2FELQFK7.js";function q(){if(!O.has("@lion/ui::overlays::0.x")){let t=new A;O.set("@lion/ui::overlays::0.x",t)}return O.get("@lion/ui::overlays::0.x")}var T=R(q);function b(t,e,i={}){function o(d){return"getAttribute"in d}function n(d){if(!o(d))return null;let s=d.getAttribute("slot"),c=null;if(s){let h=i[s];h&&(c=h.filter(p=>p?.element===d)[0]||null)}return c}let r=n(t);if(r)return r.deepContains;function a(d){if(!o(t))return;let s=t.getAttribute("slot");s&&(i[s]=i[s]||[],i[s].push({element:t,deepContains:d}))}let l=t.contains(e);if(l)return a(!0),!0;function _(d){return d.tagName==="SLOT"}function y(d){return _(d)?d.assignedElements():[]}function g(d){return d.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function u(d){let s=!1;for(let c=0;c<d.length;c+=1){let h=d[c];if(h&&(o(h)||g(h))&&b(h,e,i)){s=!0;break}}return s}function w(d){for(let s=0;s<d.children.length;s+=1){let c=d.children[s],h=n(c);if(h){l=h.deepContains||l;break}let p=y(c),f=[c.shadowRoot,...p];if(u(f)){l=!0;break}c.children.length>0&&w(c)}}return t instanceof HTMLElement&&t.shadowRoot&&(l=b(t.shadowRoot,e,i),l)?(a(!0),!0):(w(t),a(l),l)}var M=N`
  .overlays {
    position: fixed;
    z-index: 200;
  }

  .overlays__overlay-container {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .overlays__overlay-container::backdrop {
    display: none;
  }

  .overlays__overlay-container--top-left {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .overlays__overlay-container--top {
    justify-content: center;
    align-items: flex-start;
  }

  .overlays__overlay-container--top-right {
    justify-content: flex-end;
    align-items: flex-start;
  }

  .overlays__overlay-container--right {
    justify-content: flex-end;
    align-items: center;
  }

  .overlays__overlay-container--bottom-left {
    justify-content: flex-start;
    align-items: flex-end;
  }

  .overlays__overlay-container--bottom {
    justify-content: center;
    align-items: flex-end;
  }

  .overlays__overlay-container--bottom-right {
    justify-content: flex-end;
    align-items: flex-end;
  }

  .overlays__overlay-container--left {
    justify-content: flex-start;
    align-items: center;
  }

  .overlays__overlay-container--center {
    justify-content: center;
    align-items: center;
  }

  .overlays__overlay--bottom-sheet {
    width: 100%;
  }

  ::slotted(.overlays__overlay),
  .overlays__overlay {
    pointer-events: auto;
  }

  .overlays__backdrop {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #333333;
    display: none;
  }

  .overlays__backdrop--visible {
    display: block;
  }

  .overlays__backdrop--animation-in {
    animation: overlays-backdrop-fade-in 300ms;
    opacity: 0.3;
  }

  .overlays__backdrop--animation-out {
    animation: overlays-backdrop-fade-out 300ms;
    opacity: 0;
  }

  @keyframes overlays-backdrop-fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes overlays-backdrop-fade-out {
    from {
      opacity: 0.3;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .overlays__backdrop--animation-in {
      animation: overlays-backdrop-fade-in 1ms;
    }

    .overlays__backdrop--animation-out {
      animation: overlays-backdrop-fade-out 1ms;
    }
  }

  dialog[data-overlay-outer-wrapper] {
    background-image: none;
    border-style: none;
    padding: 0px;
  }

  /** 
   * We don't want to use pseudo el ::backdrop.  
   * We have our own, that creates more flexibility wrt scrolling etc.
   */
  dialog[data-overlay-outer-wrapper]::backdrop {
    display: none;
  }
`;var v={supportsAdoptingStyleSheets:window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,adoptStyle:void 0,adoptStyles:void 0},H=new WeakMap;function $(t){return Array.from(t.cssRules).map(e=>e.cssText).join("")}function V(t,e,{teardown:i=!1}={}){let o=t===document?document.body:t,n=e.cssText||$(e);if(i){let r=Array.from(o.querySelectorAll("style"));for(let a of r)if(a.textContent===n){a.remove();break}}else{let r=document.createElement("style"),a=window.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=n,o.appendChild(r)}}function Z(t,e,{teardown:i=!1}={}){let o=!1;t&&!H.has(t)&&H.set(t,[]);let n=H.get(t)??[],r=n.find(a=>e===a);return r&&i?n.splice(n.indexOf(e),1):!r&&!i?n.push(e):(r&&!i||!r&&i)&&(o=!0),{haltFurtherExecution:o}}function Y(t,e,{teardown:i=!1}={}){let{haltFurtherExecution:o}=Z(t,e,{teardown:i});if(o)return;if(!v.supportsAdoptingStyleSheets||F.isIOS){V(t,e,{teardown:i});return}let n=e instanceof CSSStyleSheet?e:e.styleSheet;if(!n)throw new Error("Please provide a CSSResultOrNative style");i?t.adoptedStyleSheets.includes(n)&&(t.adoptedStyleSheets=t.adoptedStyleSheets.filter(r=>r!==n)):t.adoptedStyleSheets=[...t.adoptedStyleSheets,n]}function G(t,e,{teardown:i=!1}={}){for(let o of e)v.adoptStyle(t,o,{teardown:i})}v.adoptStyle=Y;v.adoptStyles=G;var W=({visibility:t,display:e})=>t!=="hidden"&&e!=="none",J=({display:t})=>t==="contents";function K(t){if(!t||!t.isConnected||!W(t.style))return!1;let e=window.getComputedStyle(t);return W(e)?J(e)?!0:!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length):!1}function Q(t,e){let i=Math.max(t.tabIndex,0),o=Math.max(e.tabIndex,0);return i===0||o===0?o>i:i>o}function X(t,e){let i=[];for(;t.length>0&&e.length>0;)Q(t[0],e[0])?i.push(e.shift()):i.push(t.shift());return[...i,...t,...e]}function x(t){let e=t.length;if(e<2)return t;let i=Math.ceil(e/2),o=x(t.slice(0,i)),n=x(t.slice(i));return X(o,n)}var ee="matches"in Element.prototype?"matches":"msMatchesSelector";function L(t,e){return t[ee](e)}function te(t){return L(t,"input, select, textarea, button, object")?L(t,":not([disabled])"):L(t,"a[href], area[href], iframe, [tabindex], [contentEditable]")}function ie(t){return te(t)?Number(t.getAttribute("tabindex")||0):-1}function oe(t){if(t.localName==="slot")return t.assignedNodes({flatten:!0});let{children:e}=t.shadowRoot||t;return e||[]}function ne(t){return t.nodeType!==Node.ELEMENT_NODE?!1:t.localName==="slot"?!0:K(t)}function z(t,e){if(!ne(t))return!1;let i=t,o=ie(i),n=o>0;o>=0&&e.push(i);let r=oe(i);for(let a=0;a<r.length;a+=1)n=z(r[a],e)||n;return n}function I(t){let e=[];return z(t,e)?x(e):e}function re({wrappingDialogNodeL1:t,contentWrapperNodeL2:e,contentNodeL3:i}){if(!(e.isConnected||i.isConnected))throw new Error('[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.');let o,n=document.createComment("tempMarker");e.isConnected?(o=e.parentElement||e.getRootNode(),o.insertBefore(n,e),t.appendChild(e)):i.assignedSlot?(o=i.assignedSlot.parentElement||i.assignedSlot.getRootNode(),o.insertBefore(n,i.assignedSlot),t.appendChild(e),e.appendChild(i.assignedSlot)):(o=i.parentElement||i.getRootNode(),o.insertBefore(n,i),t.appendChild(e),e.appendChild(i)),o.insertBefore(t,n),o?.removeChild(n)}async function se(){return import("./popper-QQAR7GJ5.js")}var j=new WeakMap,C=class t extends EventTarget{static popperModule=void 0;#e=!1;__sharedConfig;__activeElementRightBeforeHide;_defaultConfig;_contentId;__originalAttrs;__hasActiveBackdrop;__escKeyHandlerCalled;__prevConfig=void 0;__elementToFocusAfterHide=void 0;constructor(e={},i=T){super(),this.manager=i,this.__sharedConfig=e,this.__activeElementRightBeforeHide=null,this.config={},this._defaultConfig={placementMode:void 0,contentNode:e.contentNode,contentWrapperNode:e.contentWrapperNode,invokerNode:e.invokerNode,backdropNode:e.backdropNode,referenceNode:void 0,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:"none",hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,isAlertDialog:!1,invokerRelation:"description",visibilityTriggerFunction:void 0,handlesAccessibility:!1,popperConfig:{placement:"top",strategy:"fixed",modifiers:[{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:8}},{name:"flip",options:{boundariesElement:"viewport",padding:16}},{name:"offset",enabled:!0,options:{offset:[0,8]}},{name:"arrow",enabled:!1}]},viewportConfig:{placement:"center"},zIndex:9999},this._contentId=`overlay-content--${Math.random().toString(36).slice(2,10)}`,this.__originalAttrs=new Map,this.__escKeyHandler=this.__escKeyHandler.bind(this),this.updateConfig(e),this.__hasActiveBackdrop=!0,this.__cancelHandler=this.__cancelHandler.bind(this),this.__escKeyHandlerCalled=!1}get invoker(){return this.invokerNode}get content(){return this.__wrappingDialogNode}get placementMode(){return this.config?.placementMode}get invokerNode(){return this.config?.invokerNode}get referenceNode(){return this.config?.referenceNode}get contentNode(){return this.config?.contentNode}get contentWrapperNode(){return this.__contentWrapperNode||this.config?.contentWrapperNode}get backdropNode(){return this.__backdropNode||this.config?.backdropNode}get elementToFocusAfterHide(){return this.__elementToFocusAfterHide||this.config?.elementToFocusAfterHide}get hasBackdrop(){return!!this.backdropNode||this.config?.hasBackdrop}get isBlocking(){return this.config?.isBlocking}get preventsScroll(){return this.config?.preventsScroll}get trapsKeyboardFocus(){return this.config?.trapsKeyboardFocus}get hidesOnEsc(){return this.config?.hidesOnEsc}get hidesOnOutsideClick(){return this.config?.hidesOnOutsideClick}get hidesOnOutsideEsc(){return this.config?.hidesOnOutsideEsc}get inheritsReferenceWidth(){return this.config?.inheritsReferenceWidth}get handlesAccessibility(){return this.config?.handlesAccessibility}get isTooltip(){return this.config?.isTooltip}get isAlertDialog(){return this.config?.isAlertDialog}get invokerRelation(){return this.config?.invokerRelation}get popperConfig(){return this.config?.popperConfig}get viewportConfig(){return this.config?.viewportConfig}get visibilityTriggerFunction(){return this.config?.visibilityTriggerFunction}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this.__wrappingDialogNode.style.zIndex=`${this.config.zIndex+e}`}get elevation(){return Number(this.contentWrapperNode?.style.zIndex)}updateConfig(e){this.teardown(),this.__prevConfig=this.config,this.config={...this._defaultConfig,...this.__sharedConfig,...e,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...e.popperConfig||{},modifiers:[...this._defaultConfig.popperConfig?.modifiers||[],...this.__sharedConfig.popperConfig?.modifiers||[],...e.popperConfig?.modifiers||[]]}},this.__validateConfiguration(this.config),this._init(),this.__elementToFocusAfterHide=void 0,this.#t()||this.manager.add(this)}#t(){return!!this.manager.list.find(e=>this===e)}__validateConfiguration(e){if(!e.placementMode)throw new Error('[OverlayController] You need to provide a .placementMode ("global"|"local")');if(!["global","local"].includes(e.placementMode))throw new Error(`[OverlayController] "${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw new Error("[OverlayController] You need to provide a .contentNode");if(e.isTooltip&&!e.handlesAccessibility)throw new Error("[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled")}_init(){this.__contentHasBeenInitialized||(this.__initContentDomStructure(),this.__contentHasBeenInitialized=!0),this.contentWrapperNode.removeAttribute("style"),this.contentWrapperNode.removeAttribute("class"),this.placementMode==="local"&&(t.popperModule||(t.popperModule=se())),this.__handleOverlayStyles({phase:"init"}),this._handleFeatures({phase:"init"})}__handleOverlayStyles({phase:e}){let i=this.contentWrapperNode?.getRootNode();e==="init"?v.adoptStyle(i,M):e==="teardown"&&v.adoptStyle(i,M,{teardown:!0})}__initContentDomStructure(){let e=document.createElement("dialog");e.setAttribute("role","none"),e.setAttribute("data-overlay-outer-wrapper",""),e.style.cssText=`display:none; z-index: ${this.config.zIndex}; padding: 0;`,this.__wrappingDialogNode=e,this.config?.contentWrapperNode||(this.__contentWrapperNode=document.createElement("div")),this.contentWrapperNode.setAttribute("data-id","content-wrapper"),this.contentWrapperNode.style.transform="translateZ(0px)",re({wrappingDialogNodeL1:e,contentWrapperNodeL2:this.contentWrapperNode,contentNodeL3:this.contentNode}),e.open=!0,this.isTooltip&&e.setAttribute("tabindex","-1"),this.__wrappingDialogNode.style.display="none",this.contentWrapperNode.style.zIndex="1",getComputedStyle(this.contentNode).position==="absolute"&&(this.contentNode.style.position="static"),HTMLDialogElement&&"closedBy"in HTMLDialogElement.prototype?e.closedBy="none":(e.addEventListener("keydown",o=>{o.key==="Escape"&&o.preventDefault()}),e.addEventListener("keyup",o=>{o.key==="Escape"&&o.preventDefault()}),e.addEventListener("cancel",o=>{o.stopPropagation()}),e.addEventListener("close",o=>{o.stopPropagation()}))}_handleZIndex({phase:e}){if(this.placementMode==="local"&&e==="setup"){let i=Number(getComputedStyle(this.contentNode).zIndex);(i<1||Number.isNaN(i))&&(this.contentNode.style.zIndex="1")}}__setupTeardownAccessibility({phase:e}){if(e==="init"){this.__storeOriginalAttrs(this.contentNode,["role","id"]);let i=this.trapsKeyboardFocus;if(this.invokerNode){let o=["aria-labelledby","aria-describedby"];i||o.push("aria-expanded"),this.__storeOriginalAttrs(this.invokerNode,o)}this.contentNode.id||this.contentNode.setAttribute("id",this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute(this.invokerRelation==="label"?"aria-labelledby":"aria-describedby",this._contentId),this.contentNode.setAttribute("role","tooltip")):(this.invokerNode&&!i&&this.invokerNode.setAttribute("aria-expanded",`${this.isShown}`),this.isAlertDialog?this.contentNode.setAttribute("role","alertdialog"):this.contentNode.getAttribute("role")||this.contentNode.setAttribute("role","dialog"))}else e==="teardown"&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(e,i){let o={};i.forEach(n=>{o[n]=e.getAttribute(n)}),this.__originalAttrs.set(e,o)}__restoreOriginalAttrs(){for(let[e,i]of this.__originalAttrs)Object.entries(i).forEach(([o,n])=>{n!==null?e.setAttribute(o,n):e.removeAttribute(o)});this.__originalAttrs.clear()}get isShown(){return this.__wrappingDialogNode?.style.display!=="none"}async show(e=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise(o=>{this._showResolve=o}),this.manager&&this.manager.show(this),this.isShown){this._showResolve();return}let i=new CustomEvent("before-show",{cancelable:!0});this.dispatchEvent(i),i.defaultPrevented||("HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&(this.__wrappingDialogNode.open=!0),this.__wrappingDialogNode.style.display="",this._keepBodySize({phase:"before-show"}),await this._handleFeatures({phase:"show"}),this._keepBodySize({phase:"show"}),await this._handlePosition({phase:"show"}),this.__elementToFocusAfterHide=e,this.dispatchEvent(new Event("show")),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:e}){if(this.placementMode==="global"){let i=`overlays__overlay-container--${this.viewportConfig.placement}`;e==="show"?(this.contentWrapperNode.classList.add("overlays__overlay-container"),this.contentWrapperNode.classList.add(i),this.contentNode.classList.add("overlays__overlay")):e==="hide"&&(this.contentWrapperNode.classList.remove("overlays__overlay-container"),this.contentWrapperNode.classList.remove(i),this.contentNode.classList.remove("overlays__overlay"))}else this.placementMode==="local"&&e==="show"&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:e}){this.preventsScroll&&this.manager.requestToKeepBodySize({phase:e})}async hide(){if(this._hideComplete=new Promise(i=>{this._hideResolve=i}),this.__activeElementRightBeforeHide=this.contentNode.getRootNode().activeElement,this.manager&&this.#t()&&this.manager.hide(this),!this.isShown){this._hideResolve();return}let e=new CustomEvent("before-hide",{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),"HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&this.__wrappingDialogNode.close(),this.__wrappingDialogNode.style.display="none",this._handleFeatures({phase:"hide"}),this._keepBodySize({phase:"hide"}),this.dispatchEvent(new Event("hide")),this._restoreFocus()),this._hideResolve()}async transitionHide(e){}async _transitionHide({backdropNode:e,contentNode:i}){await this.transitionHide({backdropNode:e,contentNode:i}),this._handlePosition({phase:"hide"}),e&&e.classList.remove("overlays__backdrop--animation-in")}async transitionShow(e){}async _transitionShow(e){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode&&e.backdropNode.classList.add("overlays__backdrop--animation-in")}_restoreFocus(){this.__activeElementRightBeforeHide instanceof HTMLElement&&this.contentNode.contains(this.__activeElementRightBeforeHide)&&(this.elementToFocusAfterHide instanceof HTMLElement?(this.elementToFocusAfterHide.focus(),this.elementToFocusAfterHide.scrollIntoView({block:"nearest"})):this.__activeElementRightBeforeHide.blur())}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth(),this.visibilityTriggerFunction&&this._handleVisibilityTriggers({phase:e})}_handleVisibilityTriggers({phase:e}){typeof this.visibilityTriggerFunction=="function"&&(e==="init"&&(this.__visibilityTriggerHandler=this.visibilityTriggerFunction({phase:e,controller:this})),this.__visibilityTriggerHandler[e]&&this.__visibilityTriggerHandler[e]())}_handlePreventsScroll({phase:e}){switch(e){case"show":this.manager.requestToPreventScroll();break;case"hide":this.manager.requestToEnableScroll();break;case"teardown":this.manager.requestToEnableScroll(this);break}}_handleBlocking({phase:e}){switch(e){case"show":this.manager.requestToShowOnly(this);break;case"hide":this.manager.retractRequestToShowOnly(this);break}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:e}){switch(e){case"init":{this.__backdropInitialized||(this.config?.backdropNode||(this.__backdropNode=document.createElement("div"),this.__backdropNode.classList.add("overlays__backdrop")),this.__wrappingDialogNode.prepend(this.backdropNode),this.__backdropInitialized=!0);break}case"show":this.config.hasBackdrop&&this.backdropNode.classList.add("overlays__backdrop--visible"),this.__hasActiveBackdrop=!0;break;case"hide":case"teardown":this.backdropNode.classList.remove("overlays__backdrop--visible"),this.__hasActiveBackdrop=!1;break}}#o=e=>{e.key==="Shift"&&(this.#e=!0)};#n=e=>{e.key==="Shift"&&(this.#e=!1)};#a=()=>{window.addEventListener("keydown",this.#o),window.addEventListener("keyup",this.#n)};#d=()=>{window.removeEventListener("keydown",this.#o),window.removeEventListener("keyup",this.#n)};#r=()=>I(this.contentNode).find(i=>i.hasAttribute("autofocus"))||this.contentNode;#l=()=>{this.__wrappingDialogNode?.addEventListener("focus",()=>{this.#e||this.#r().focus()})};_handleTrapsKeyboardFocus({phase:e}){e==="init"&&(this.contentNode.style.outline="none",this.contentNode.tabIndex=-1,this.contentNode.shadowRoot&&console.warn("[overlays]: For best accessibility (compatibility with Safari + VoiceOver), provide a contentNode that is not a host for a shadow root")),e==="show"&&(this.#a(),this.#l(),this.__wrappingDialogNode?.close(),this.__wrappingDialogNode?.showModal(),this.#r().focus()),e==="hide"&&this.#d()}__cancelHandler(e){e.preventDefault()}__escKeyHandler(e){e.key!=="Escape"||j.has(e)||!this.isShown&&this.__escKeyHandlerCalled||this.#s(e)&&(this.__escKeyHandlerCalled=!0,this.hide(),j.set(e,this))}#s=e=>e.composedPath().includes(this.__wrappingDialogNode)||this.invokerNode&&e.composedPath().includes(this.invokerNode)||b(this.contentNode,e.target);#i=e=>{e.key==="Escape"&&(this.#s(e)||this.hide())};_handleHidesOnEsc({phase:e}){e==="init"&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.contentNode.addEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener("keyup",this.__escKeyHandler)),e==="show"&&(this.__escKeyHandlerCalled=!1),e==="teardown"&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener("keyup",this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){e==="init"?(document.removeEventListener("keyup",this.#i),document.addEventListener("keyup",this.#i)):e==="teardown"&&document.removeEventListener("keyup",this.#i)}_handleInheritsReferenceWidth(){if(!this._referenceNode||this.placementMode==="global")return;let e=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case"max":this.contentWrapperNode.style.maxWidth=e;break;case"full":this.contentWrapperNode.style.width=e;break;case"min":this.contentWrapperNode.style.minWidth=e,this.contentWrapperNode.style.width="auto";break}}_handleHidesOnOutsideClick({phase:e}){let i=e==="show"?"addEventListener":"removeEventListener";if(e==="show"){let o=!1,n=!1;this.__onInsideMouseDown=()=>{o=!0},this.__onInsideMouseUp=()=>{n=!0},this.__onDocumentMouseUp=()=>{setTimeout(()=>{!o&&!n&&this.hide(),o=!1,n=!1})},this.__onWindowBlur=()=>{setTimeout(()=>{this.hide()})}}this.contentWrapperNode[i]("mousedown",this.__onInsideMouseDown,!0),this.contentWrapperNode[i]("mouseup",this.__onInsideMouseUp,!0),this.invokerNode&&(this.invokerNode[i]("mousedown",this.__onInsideMouseDown,!0),this.invokerNode[i]("mouseup",this.__onInsideMouseUp,!0)),document.documentElement[i]("mouseup",this.__onDocumentMouseUp,!0),window[i]("blur",this.__onWindowBlur)}_handleAccessibility({phase:e}){(e==="init"||e==="teardown")&&this.__setupTeardownAccessibility({phase:e});let i=this.trapsKeyboardFocus;this.invokerNode&&!this.isTooltip&&!i&&this.invokerNode.setAttribute("aria-expanded",`${e==="show"}`)}teardown(){this.__handleOverlayStyles({phase:"teardown"}),this.isShown&&this._keepBodySize({phase:"teardown"}),this._handleFeatures({phase:"teardown"}),this.#t()&&this.manager.remove(this)}async __createPopperInstance(){if(this._popper&&(this._popper.destroy(),this._popper=void 0),t.popperModule!==void 0){let{createPopper:e}=await t.popperModule;this._popper=e(this._referenceNode,this.contentWrapperNode,{...this.config?.popperConfig})}}_hasDisabledInvoker(){return this.invokerNode?this.invokerNode.disabled||this.invokerNode.getAttribute("aria-disabled")==="true":!1}};function B(t,e){if(typeof t!="object"||typeof e!="object"||t===null||e===null)return t===e;let i=t,o=e,n=Object.keys(i),r=Object.keys(o);if(n.length!==r.length)return!1;let a=l=>B(i[l],o[l]);return n.every(a)}var ae=[];var de=t=>{class e extends t{static get properties(){return{opened:{type:Boolean,reflect:!0}}}#e=!1;constructor(){super(),this.opened=!1,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}get config(){return this.__config}set config(o){let n=!B(this.config,o);this._overlayCtrl&&n&&this._overlayCtrl.updateConfig(o),this.__config=o,this._overlayCtrl&&n&&this.__syncToOverlayController()}requestUpdate(o,n,r){super.requestUpdate(o,n,r),o==="opened"&&this.opened!==n&&this.dispatchEvent(new CustomEvent("opened-changed",{detail:{opened:this.opened}}))}_defineOverlay({contentNode:o,invokerNode:n,referenceNode:r,backdropNode:a,contentWrapperNode:l}){let _=this._defineOverlayConfig()||{};return new C({contentNode:o,invokerNode:n,referenceNode:r,backdropNode:a,contentWrapperNode:l,..._,...this.config,popperConfig:{..._.popperConfig||{},...this.config?.popperConfig||{},modifiers:[..._.popperConfig?.modifiers||[],...this.config?.popperConfig?.modifiers||[]]}})}_defineOverlayConfig(){return{placementMode:"local"}}updated(o){super.updated(o),o.has("opened")&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=o=>{o.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener("close-overlay",this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener("close-overlay",this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&(this.#e||(this._setupOverlayCtrl(),this.#e=!0))})}async disconnectedCallback(){super.disconnectedCallback(),await this._isPermanentlyDisconnected()&&(this._teardownOverlayCtrl(),this.#e=!1)}static enabledWarnings=super.enabledWarnings?.filter(o=>o!=="change-in-update")||[];get _overlayInvokerNode(){return Array.from(this.children).find(o=>o.slot==="invoker")}get _overlayReferenceNode(){}get _overlayBackdropNode(){return this.__cachedOverlayBackdropNode||(this.__cachedOverlayBackdropNode=Array.from(this.children).find(o=>o.slot==="backdrop")),this.__cachedOverlayBackdropNode}get _overlayContentNode(){return this._cachedOverlayContentNode||(this._cachedOverlayContentNode=Array.from(this.children).find(o=>o.slot==="content")||this.config.contentNode),this._cachedOverlayContentNode}get _overlayContentWrapperNode(){return this.shadowRoot?.querySelector("#overlay-content-node-wrapper")}_setupOverlayCtrl(){if(this.#e)return;let o={contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode};this._overlayCtrl?this._overlayCtrl.updateConfig(o):this._overlayCtrl=this._defineOverlay(o),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._overlayCtrl&&(this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown())}async _setOpenedWithoutPropertyEffects(o){this.__blockSyncToOverlayCtrl=!0,this.opened=o,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=o=>{let n=new CustomEvent("before-opened",{cancelable:!0});this.dispatchEvent(n),n.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),o.preventDefault())},this.__onBeforeHide=o=>{let n=new CustomEvent("before-closed",{cancelable:!0});this.dispatchEvent(n),n.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),o.preventDefault())},this._overlayCtrl.addEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.addEventListener("before-hide",this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.removeEventListener("before-hide",this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}repositionOverlay(){let o=this._overlayCtrl;o.placementMode==="local"&&o._popper&&o._popper.update()}async _isPermanentlyDisconnected(){return await this.updateComplete,!this.isConnected}}for(let i of ae)i(e);return e},P=S(de);var le=(t=>class extends P(t){static get properties(){return{hasArrow:{type:Boolean,reflect:!0,attribute:"has-arrow"}}}static get styles(){return[...super.styles||[],N`
          :host {
            --tooltip-arrow-width: 12px;
            --tooltip-arrow-height: 8px;
          }

          .arrow svg {
            display: block;
          }

          .arrow {
            position: absolute;
            width: var(--tooltip-arrow-width);
            height: var(--tooltip-arrow-height);
          }

          .arrow__graphic {
            display: block;
          }

          [data-popper-placement^='top'] .arrow {
            bottom: calc(-1 * var(--tooltip-arrow-height));
          }

          [data-popper-placement^='bottom'] .arrow {
            top: calc(-1 * var(--tooltip-arrow-height));
          }

          [data-popper-placement^='bottom'] .arrow__graphic {
            transform: rotate(180deg);
          }

          [data-popper-placement^='left'] .arrow {
            right: calc(
              -1 *
                (
                  var(--tooltip-arrow-height) +
                    (var(--tooltip-arrow-width) - var(--tooltip-arrow-height)) / 2
                )
            );
          }

          [data-popper-placement^='left'] .arrow__graphic {
            transform: rotate(270deg);
          }

          [data-popper-placement^='right'] .arrow {
            left: calc(
              -1 *
                (
                  var(--tooltip-arrow-height) +
                    (var(--tooltip-arrow-width) - var(--tooltip-arrow-height)) / 2
                )
            );
          }

          [data-popper-placement^='right'] .arrow__graphic {
            transform: rotate(90deg);
          }

          :host(:not([has-arrow])) .arrow {
            display: none;
          }
        `]}constructor(){super(),this.hasArrow=!0,this.__setupRepositionCompletePromise()}render(){return E`
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="content"></slot>
          ${this._arrowNodeTemplate()}
        </div>
      `}_arrowNodeTemplate(){return E`
        <div class="arrow" aria-hidden="true" data-popper-arrow>${this._arrowTemplate()}</div>
      `}_arrowTemplate(){return E`
        <svg viewBox="0 0 12 8" class="arrow__graphic">
          <path d="M 0,0 h 12 L 6,8 z"></path>
        </svg>
      `}_defineOverlayConfig(){let i=super._defineOverlayConfig()||{};return this.hasArrow?{...i,popperConfig:{...this._getPopperArrowConfig(i.popperConfig)}}:i}_getPopperArrowConfig(i){return{...i||{},placement:"top",modifiers:[{name:"arrow",enabled:!0,options:{padding:8}},{name:"offset",enabled:!0,options:{offset:[0,8]}},...i&&i.modifiers||[]],onFirstUpdate:n=>{this.__syncFromPopperState(n)},afterWrite:n=>{this.__syncFromPopperState(n)}}}__setupRepositionCompletePromise(){this.repositionComplete=new Promise(i=>{this.__repositionCompleteResolver=i})}get _arrowNode(){return this.shadowRoot.querySelector("[data-popper-arrow]")}__syncFromPopperState(i){i&&this._arrowNode&&i.placement!==this._arrowNode.placement&&(this.__repositionCompleteResolver(i.placement),this.__setupRepositionCompletePromise())}}),he=S(le);function m(){return{visibilityTriggerFunction:({controller:t})=>{function e(){t._hasDisabledInvoker()||t.toggle()}return{init:()=>{t.invokerNode?.addEventListener("click",e)},teardown:()=>{t.invokerNode?.removeEventListener("click",e)}}}}}var ce=()=>({hasBackdrop:!0,preventsScroll:!0,trapsKeyboardFocus:!0,hidesOnEsc:!0,placementMode:"global",viewportConfig:{placement:"bottom"},handlesAccessibility:!0,...m()});var pe=()=>({placementMode:"global",viewportConfig:{placement:"center"},hasBackdrop:!0,preventsScroll:!0,trapsKeyboardFocus:!0,hidesOnEsc:!0,handlesAccessibility:!0,...m()});var D=({horizontalFallback:t=!0,placement:e="auto"}={})=>({placementMode:"local",inheritsReferenceWidth:"min",hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:e,modifiers:[{name:"offset",enabled:!1},{name:"flip",options:{fallbackPlacements:t?["bottom","top","right","left"]:["bottom","top"]}}]},handlesAccessibility:!0,...m()});var fe=()=>D({horizontalFallback:!1,placement:"bottom-start"});function ue(t){return t&&(t.hasAttribute("disabled")||t.getAttribute("aria-disabled")==="true")}function U({isHoverSupported:t=window.matchMedia("(hover: hover)").matches,longpressDuration:e=500,delayOut:i=300,delayIn:o=0}={}){return{visibilityTriggerFunction:({controller:n})=>{let r=!1,a=!1,l,_,y=!1,g=!1,u=null;function w(){r=!1,a=!1,y=!1,u&&(n.invokerNode?.removeEventListener("click",u,{capture:!0}),u=null)}function d({shouldOpen:p,openTimeout:f=0,closeTimeout:k=0}){clearTimeout(l),p&&!ue(n.invokerNode)?l=setTimeout(()=>n.show(),f):l=setTimeout(()=>n.hide(),k)}function s(p){let{type:f}=p;if(r=f==="focusout"?!1:r||f==="focusin",a=f==="mouseleave"?!1:a||f==="mouseenter",!t&&f==="focusin"){if(g){g=!1;return}if(!n.invokerNode?.matches(":focus-visible"))return}d({shouldOpen:r||a,openTimeout:o,closeTimeout:i})}function c(p){p.preventDefault()}function h(p){if(clearTimeout(_),p.pointerType!=="touch")return;let{type:f}=p;f==="pointerdown"?(y=!1,g=!0,_=setTimeout(()=>{y=!0,u=k=>k.stopImmediatePropagation(),n.invokerNode?.addEventListener("click",u,{once:!0,capture:!0}),d({shouldOpen:!0})},e)):d({shouldOpen:!1,closeTimeout:y?e:0})}return{init:()=>{n.addEventListener("hide",w),n.invokerNode?.addEventListener("focusin",s),n.invokerNode?.addEventListener("focusout",s),t?(n.contentNode?.addEventListener("mouseenter",s),n.contentNode?.addEventListener("mouseleave",s),n.invokerNode?.addEventListener("mouseenter",s),n.invokerNode?.addEventListener("mouseleave",s)):(n.invokerNode?.style.setProperty("-webkit-touch-callout","none"),n.invokerNode?.style.setProperty("user-select","none"),n.invokerNode?.style.setProperty("-webkit-user-select","none"),n.invokerNode?.addEventListener("contextmenu",c),n.invokerNode?.addEventListener("pointerdown",h),n.invokerNode?.addEventListener("pointerup",h),n.invokerNode?.addEventListener("pointerleave",h))},teardown:()=>{n.removeEventListener("hide",w),n.invokerNode?.removeEventListener("focusin",s),n.invokerNode?.removeEventListener("focusout",s),t?(n.contentNode?.removeEventListener("mouseenter",s),n.contentNode?.removeEventListener("mouseleave",s),n.invokerNode?.removeEventListener("mouseenter",s),n.invokerNode?.removeEventListener("mouseleave",s)):(n.invokerNode?.style.removeProperty("-webkit-touch-callout"),n.invokerNode?.style.removeProperty("user-select"),n.invokerNode?.style.removeProperty("-webkit-user-select"),n.invokerNode?.removeEventListener("contextmenu",c),n.invokerNode?.removeEventListener("pointerdown",h),n.invokerNode?.removeEventListener("pointerup",h),n.invokerNode?.removeEventListener("pointerleave",h),u&&(n.invokerNode?.removeEventListener("click",u,{capture:!0}),u=null))}}}}}var _e=({invokerRelation:t="description",delayIn:e=300,delayOut:i=300}={})=>({placementMode:"local",elementToFocusAfterHide:void 0,hidesOnEsc:!0,handlesAccessibility:!0,isTooltip:!0,invokerRelation:t,popperConfig:{strategy:"absolute"},...U({delayIn:e,delayOut:i})});function ve(){let t=document.activeElement||document.body;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}function ye(t){let e=t.parentElement?.children;for(let i=0;i<e.length;i+=1){let o=e[i];o!==t&&(o.setAttribute("inert",""),o.setAttribute("aria-hidden","true"))}}function me(t){let e=t.parentElement?.children;for(let i=0;i<e.length;i+=1){let o=e[i];o!==t&&(o.removeAttribute("inert"),o.removeAttribute("aria-hidden"))}}export{T as a,b,I as c,C as d,P as e,he as f,ce as g,pe as h,D as i,fe as j,_e as k,ve as l,ye as m,me as n};
