import{a as A}from"./chunk-765SGQET.js";import{a as W,b as x}from"./chunk-DSM4IEUY.js";import{f as F}from"./chunk-KVEQ5QLL.js";import{a as S}from"./chunk-G7OXZUGX.js";import{b as N}from"./chunk-TIEK7LWH.js";import{a as E}from"./chunk-2FELQFK7.js";function q(){if(!x.has("@lion/ui::overlays::0.x")){let t=new A;x.set("@lion/ui::overlays::0.x",t)}return x.get("@lion/ui::overlays::0.x")}var T=W(q);function k(t,e,o={}){function i(a){return"getAttribute"in a}function n(a){if(!i(a))return null;let s=a.getAttribute("slot"),h=null;if(s){let d=o[s];d&&(h=d.filter(p=>p?.element===a)[0]||null)}return h}let r=n(t);if(r)return r.deepContains;function l(a){if(!i(t))return;let s=t.getAttribute("slot");s&&(o[s]=o[s]||[],o[s].push({element:t,deepContains:a}))}let c=t.contains(e);if(c)return l(!0),!0;function _(a){return a.tagName==="SLOT"}function y(a){return _(a)?a.assignedElements():[]}function w(a){return a.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function u(a){let s=!1;for(let h=0;h<a.length;h+=1){let d=a[h];if(d&&(i(d)||w(d))&&k(d,e,o)){s=!0;break}}return s}function b(a){for(let s=0;s<a.children.length;s+=1){let h=a.children[s],d=n(h);if(d){c=d.deepContains||c;break}let p=y(h),f=[h.shadowRoot,...p];if(u(f)){c=!0;break}h.children.length>0&&b(h)}}return t instanceof HTMLElement&&t.shadowRoot&&(c=k(t.shadowRoot,e,o),c)?(l(!0),!0):(b(t),l(c),c)}var M=N`
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
`;var v={supportsAdoptingStyleSheets:window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,adoptStyle:void 0,adoptStyles:void 0},H=new WeakMap;function $(t){return Array.from(t.cssRules).map(e=>e.cssText).join("")}function V(t,e,{teardown:o=!1}={}){let i=t===document?document.body:t,n=e.cssText||$(e);if(o){let r=Array.from(i.querySelectorAll("style"));for(let l of r)if(l.textContent===n){l.remove();break}}else{let r=document.createElement("style"),l=window.litNonce;l!==void 0&&r.setAttribute("nonce",l),r.textContent=n,i.appendChild(r)}}function Z(t,e,{teardown:o=!1}={}){let i=!1;t&&!H.has(t)&&H.set(t,[]);let n=H.get(t)??[],r=n.find(l=>e===l);return r&&o?n.splice(n.indexOf(e),1):!r&&!o?n.push(e):(r&&!o||!r&&o)&&(i=!0),{haltFurtherExecution:i}}function Y(t,e,{teardown:o=!1}={}){let{haltFurtherExecution:i}=Z(t,e,{teardown:o});if(i)return;if(!v.supportsAdoptingStyleSheets||F.isIOS){V(t,e,{teardown:o});return}let n=e instanceof CSSStyleSheet?e:e.styleSheet;if(!n)throw new Error("Please provide a CSSResultOrNative style");o?t.adoptedStyleSheets.includes(n)&&(t.adoptedStyleSheets=t.adoptedStyleSheets.filter(r=>r!==n)):t.adoptedStyleSheets=[...t.adoptedStyleSheets,n]}function G(t,e,{teardown:o=!1}={}){for(let i of e)v.adoptStyle(t,i,{teardown:o})}v.adoptStyle=Y;v.adoptStyles=G;var R=({visibility:t,display:e})=>t!=="hidden"&&e!=="none",J=({display:t})=>t==="contents";function K(t){if(!t||!t.isConnected||!R(t.style))return!1;let e=window.getComputedStyle(t);return R(e)?J(e)?!0:!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length):!1}function Q(t,e){let o=Math.max(t.tabIndex,0),i=Math.max(e.tabIndex,0);return o===0||i===0?i>o:o>i}function X(t,e){let o=[];for(;t.length>0&&e.length>0;)Q(t[0],e[0])?o.push(e.shift()):o.push(t.shift());return[...o,...t,...e]}function O(t){let e=t.length;if(e<2)return t;let o=Math.ceil(e/2),i=O(t.slice(0,o)),n=O(t.slice(o));return X(i,n)}var L="matches"in Element.prototype?"matches":"msMatchesSelector";function ee(t){return t[L]("input, select, textarea, button, object")?t[L](":not([disabled])"):t[L]("a[href], area[href], iframe, [tabindex], [contentEditable]")}function te(t){return ee(t)?Number(t.getAttribute("tabindex")||0):-1}function oe(t){if(t.localName==="slot")return t.assignedNodes({flatten:!0});let{children:e}=t.shadowRoot||t;return e||[]}function ie(t){return t.nodeType!==Node.ELEMENT_NODE?!1:t.localName==="slot"?!0:K(t)}function z(t,e){if(!ie(t))return!1;let o=t,i=te(o),n=i>0;i>=0&&e.push(o);let r=oe(o);for(let l=0;l<r.length;l+=1)n=z(r[l],e)||n;return n}function I(t){let e=[];return z(t,e)?O(e):e}function ne({wrappingDialogNodeL1:t,contentWrapperNodeL2:e,contentNodeL3:o}){if(!(e.isConnected||o.isConnected))throw new Error('[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.');let i,n=document.createComment("tempMarker");e.isConnected?(i=e.parentElement||e.getRootNode(),i.insertBefore(n,e),t.appendChild(e)):o.assignedSlot?(i=o.assignedSlot.parentElement||o.assignedSlot.getRootNode(),i.insertBefore(n,o.assignedSlot),t.appendChild(e),e.appendChild(o.assignedSlot)):(i=o.parentElement||o.getRootNode(),i.insertBefore(n,o),t.appendChild(e),e.appendChild(o)),i.insertBefore(t,n),i?.removeChild(n)}async function re(){return import("./popper-QQAR7GJ5.js")}var j=new WeakMap,m=class t extends EventTarget{#e=!1;constructor(e={},o=T){super(),this.manager=o,this.__sharedConfig=e,this.__activeElementRightBeforeHide=null,this.config={},this._defaultConfig={placementMode:void 0,contentNode:e.contentNode,contentWrapperNode:e.contentWrapperNode,invokerNode:e.invokerNode,backdropNode:e.backdropNode,referenceNode:void 0,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:"none",hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,isAlertDialog:!1,invokerRelation:"description",visibilityTriggerFunction:void 0,handlesAccessibility:!1,popperConfig:{placement:"top",strategy:"fixed",modifiers:[{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:8}},{name:"flip",options:{boundariesElement:"viewport",padding:16}},{name:"offset",enabled:!0,options:{offset:[0,8]}},{name:"arrow",enabled:!1}]},viewportConfig:{placement:"center"},zIndex:9999},this._contentId=`overlay-content--${Math.random().toString(36).slice(2,10)}`,this.__originalAttrs=new Map,this.__escKeyHandler=this.__escKeyHandler.bind(this),this.updateConfig(e),this.__hasActiveBackdrop=!0,this.__cancelHandler=this.__cancelHandler.bind(this),this.__escKeyHandlerCalled=!1}get invoker(){return this.invokerNode}get content(){return this.__wrappingDialogNode}get placementMode(){return this.config?.placementMode}get invokerNode(){return this.config?.invokerNode}get referenceNode(){return this.config?.referenceNode}get contentNode(){return this.config?.contentNode}get contentWrapperNode(){return this.__contentWrapperNode||this.config?.contentWrapperNode}get backdropNode(){return this.__backdropNode||this.config?.backdropNode}get elementToFocusAfterHide(){return this.__elementToFocusAfterHide||this.config?.elementToFocusAfterHide}get hasBackdrop(){return!!this.backdropNode||this.config?.hasBackdrop}get isBlocking(){return this.config?.isBlocking}get preventsScroll(){return this.config?.preventsScroll}get trapsKeyboardFocus(){return this.config?.trapsKeyboardFocus}get hidesOnEsc(){return this.config?.hidesOnEsc}get hidesOnOutsideClick(){return this.config?.hidesOnOutsideClick}get hidesOnOutsideEsc(){return this.config?.hidesOnOutsideEsc}get inheritsReferenceWidth(){return this.config?.inheritsReferenceWidth}get handlesAccessibility(){return this.config?.handlesAccessibility}get isTooltip(){return this.config?.isTooltip}get isAlertDialog(){return this.config?.isAlertDialog}get invokerRelation(){return this.config?.invokerRelation}get popperConfig(){return this.config?.popperConfig}get viewportConfig(){return this.config?.viewportConfig}get visibilityTriggerFunction(){return this.config?.visibilityTriggerFunction}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this.__wrappingDialogNode.style.zIndex=`${this.config.zIndex+e}`}get elevation(){return Number(this.contentWrapperNode?.style.zIndex)}updateConfig(e){this.teardown(),this.__prevConfig=this.config,this.config={...this._defaultConfig,...this.__sharedConfig,...e,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...e.popperConfig||{},modifiers:[...this._defaultConfig.popperConfig?.modifiers||[],...this.__sharedConfig.popperConfig?.modifiers||[],...e.popperConfig?.modifiers||[]]}},this.__validateConfiguration(this.config),this._init(),this.__elementToFocusAfterHide=void 0,this.#t()||this.manager.add(this)}#t(){return!!this.manager.list.find(e=>this===e)}__validateConfiguration(e){if(!e.placementMode)throw new Error('[OverlayController] You need to provide a .placementMode ("global"|"local")');if(!["global","local"].includes(e.placementMode))throw new Error(`[OverlayController] "${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw new Error("[OverlayController] You need to provide a .contentNode");if(e.isTooltip&&!e.handlesAccessibility)throw new Error("[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled")}_init(){this.__contentHasBeenInitialized||(this.__initContentDomStructure(),this.__contentHasBeenInitialized=!0),this.contentWrapperNode.removeAttribute("style"),this.contentWrapperNode.removeAttribute("class"),this.placementMode==="local"&&(t.popperModule||(t.popperModule=re())),this.__handleOverlayStyles({phase:"init"}),this._handleFeatures({phase:"init"})}__handleOverlayStyles({phase:e}){let o=this.contentWrapperNode?.getRootNode();e==="init"?v.adoptStyle(o,M):e==="teardown"&&v.adoptStyle(o,M,{teardown:!0})}__initContentDomStructure(){let e=document.createElement("dialog");e.setAttribute("role","none"),e.setAttribute("data-overlay-outer-wrapper",""),e.style.cssText=`display:none; z-index: ${this.config.zIndex}; padding: 0;`,this.__wrappingDialogNode=e,this.config?.contentWrapperNode||(this.__contentWrapperNode=document.createElement("div")),this.contentWrapperNode.setAttribute("data-id","content-wrapper"),this.contentWrapperNode.style.transform="translateZ(0px)",ne({wrappingDialogNodeL1:e,contentWrapperNodeL2:this.contentWrapperNode,contentNodeL3:this.contentNode}),e.open=!0,this.isTooltip&&e.setAttribute("tabindex","-1"),this.__wrappingDialogNode.style.display="none",this.contentWrapperNode.style.zIndex="1",getComputedStyle(this.contentNode).position==="absolute"&&(this.contentNode.style.position="static"),HTMLDialogElement&&"closedBy"in HTMLDialogElement.prototype?e.closedBy="none":(e.addEventListener("keydown",i=>{i.key==="Escape"&&i.preventDefault()}),e.addEventListener("keyup",i=>{i.key==="Escape"&&i.preventDefault()}),e.addEventListener("cancel",i=>{i.stopPropagation()}),e.addEventListener("close",i=>{i.stopPropagation()}))}_handleZIndex({phase:e}){if(this.placementMode==="local"&&e==="setup"){let o=Number(getComputedStyle(this.contentNode).zIndex);(o<1||Number.isNaN(o))&&(this.contentNode.style.zIndex="1")}}__setupTeardownAccessibility({phase:e}){if(e==="init"){this.__storeOriginalAttrs(this.contentNode,["role","id"]);let o=this.trapsKeyboardFocus;if(this.invokerNode){let i=["aria-labelledby","aria-describedby"];o||i.push("aria-expanded"),this.__storeOriginalAttrs(this.invokerNode,i)}this.contentNode.id||this.contentNode.setAttribute("id",this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute(this.invokerRelation==="label"?"aria-labelledby":"aria-describedby",this._contentId),this.contentNode.setAttribute("role","tooltip")):(this.invokerNode&&!o&&this.invokerNode.setAttribute("aria-expanded",`${this.isShown}`),this.isAlertDialog?this.contentNode.setAttribute("role","alertdialog"):this.contentNode.getAttribute("role")||this.contentNode.setAttribute("role","dialog"))}else e==="teardown"&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(e,o){let i={};o.forEach(n=>{i[n]=e.getAttribute(n)}),this.__originalAttrs.set(e,i)}__restoreOriginalAttrs(){for(let[e,o]of this.__originalAttrs)Object.entries(o).forEach(([i,n])=>{n!==null?e.setAttribute(i,n):e.removeAttribute(i)});this.__originalAttrs.clear()}get isShown(){return this.__wrappingDialogNode?.style.display!=="none"}async show(e=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise(i=>{this._showResolve=i}),this.manager&&this.manager.show(this),this.isShown){this._showResolve();return}let o=new CustomEvent("before-show",{cancelable:!0});this.dispatchEvent(o),o.defaultPrevented||("HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&(this.__wrappingDialogNode.open=!0),this.__wrappingDialogNode.style.display="",this._keepBodySize({phase:"before-show"}),await this._handleFeatures({phase:"show"}),this._keepBodySize({phase:"show"}),await this._handlePosition({phase:"show"}),this.__elementToFocusAfterHide=e,this.dispatchEvent(new Event("show")),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:e}){if(this.placementMode==="global"){let o=`overlays__overlay-container--${this.viewportConfig.placement}`;e==="show"?(this.contentWrapperNode.classList.add("overlays__overlay-container"),this.contentWrapperNode.classList.add(o),this.contentNode.classList.add("overlays__overlay")):e==="hide"&&(this.contentWrapperNode.classList.remove("overlays__overlay-container"),this.contentWrapperNode.classList.remove(o),this.contentNode.classList.remove("overlays__overlay"))}else this.placementMode==="local"&&e==="show"&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:e}){this.preventsScroll&&this.manager.requestToKeepBodySize({phase:e})}async hide(){if(this._hideComplete=new Promise(o=>{this._hideResolve=o}),this.__activeElementRightBeforeHide=this.contentNode.getRootNode().activeElement,this.manager&&this.#t()&&this.manager.hide(this),!this.isShown){this._hideResolve();return}let e=new CustomEvent("before-hide",{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),"HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&this.__wrappingDialogNode.close(),this.__wrappingDialogNode.style.display="none",this._handleFeatures({phase:"hide"}),this._keepBodySize({phase:"hide"}),this.dispatchEvent(new Event("hide")),this._restoreFocus()),this._hideResolve()}async transitionHide(e){}async _transitionHide({backdropNode:e,contentNode:o}){await this.transitionHide({backdropNode:e,contentNode:o}),this._handlePosition({phase:"hide"}),e&&e.classList.remove("overlays__backdrop--animation-in")}async transitionShow(e){}async _transitionShow(e){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode&&e.backdropNode.classList.add("overlays__backdrop--animation-in")}_restoreFocus(){this.__activeElementRightBeforeHide instanceof HTMLElement&&this.contentNode.contains(this.__activeElementRightBeforeHide)&&(this.elementToFocusAfterHide instanceof HTMLElement?(this.elementToFocusAfterHide.focus(),this.elementToFocusAfterHide.scrollIntoView({block:"nearest"})):this.__activeElementRightBeforeHide.blur())}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth(),this.visibilityTriggerFunction&&this._handleVisibilityTriggers({phase:e})}_handleVisibilityTriggers({phase:e}){typeof this.visibilityTriggerFunction=="function"&&(e==="init"&&(this.__visibilityTriggerHandler=this.visibilityTriggerFunction({phase:e,controller:this})),this.__visibilityTriggerHandler[e]&&this.__visibilityTriggerHandler[e]())}_handlePreventsScroll({phase:e}){switch(e){case"show":this.manager.requestToPreventScroll();break;case"hide":this.manager.requestToEnableScroll();break;case"teardown":this.manager.requestToEnableScroll(this);break}}_handleBlocking({phase:e}){switch(e){case"show":this.manager.requestToShowOnly(this);break;case"hide":this.manager.retractRequestToShowOnly(this);break}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:e}){switch(e){case"init":{this.__backdropInitialized||(this.config?.backdropNode||(this.__backdropNode=document.createElement("div"),this.__backdropNode.classList.add("overlays__backdrop")),this.__wrappingDialogNode.prepend(this.backdropNode),this.__backdropInitialized=!0);break}case"show":this.config.hasBackdrop&&this.backdropNode.classList.add("overlays__backdrop--visible"),this.__hasActiveBackdrop=!0;break;case"hide":case"teardown":this.backdropNode.classList.remove("overlays__backdrop--visible"),this.__hasActiveBackdrop=!1;break}}#i=e=>{e.key==="Shift"&&(this.#e=!0)};#n=e=>{e.key==="Shift"&&(this.#e=!1)};#a=()=>{window.addEventListener("keydown",this.#i),window.addEventListener("keyup",this.#n)};#l=()=>{window.removeEventListener("keydown",this.#i),window.removeEventListener("keyup",this.#n)};#r=()=>I(this.contentNode).find(o=>o.hasAttribute("autofocus"))||this.contentNode;#d=()=>{this.__wrappingDialogNode?.addEventListener("focus",()=>{this.#e||this.#r().focus()})};_handleTrapsKeyboardFocus({phase:e}){e==="init"&&(this.contentNode.style.outline="none",this.contentNode.tabIndex=-1,this.contentNode.shadowRoot&&console.warn("[overlays]: For best accessibility (compatibility with Safari + VoiceOver), provide a contentNode that is not a host for a shadow root")),e==="show"&&(this.#a(),this.#d(),this.__wrappingDialogNode?.close(),this.__wrappingDialogNode?.showModal(),this.#r().focus()),e==="hide"&&this.#l()}__cancelHandler(e){e.preventDefault()}__escKeyHandler(e){e.key!=="Escape"||j.has(e)||!this.isShown&&this.__escKeyHandlerCalled||this.#s(e)&&(this.__escKeyHandlerCalled=!0,this.hide(),j.set(e,this))}#s=e=>e.composedPath().includes(this.__wrappingDialogNode)||this.invokerNode&&e.composedPath().includes(this.invokerNode)||k(this.contentNode,e.target);#o=e=>{e.key==="Escape"&&(this.#s(e)||this.hide())};_handleHidesOnEsc({phase:e}){e==="init"&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.contentNode.addEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener("keyup",this.__escKeyHandler)),e==="show"&&(this.__escKeyHandlerCalled=!1),e==="teardown"&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener("keyup",this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){e==="init"?(document.removeEventListener("keyup",this.#o),document.addEventListener("keyup",this.#o)):e==="teardown"&&document.removeEventListener("keyup",this.#o)}_handleInheritsReferenceWidth(){if(!this._referenceNode||this.placementMode==="global")return;let e=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case"max":this.contentWrapperNode.style.maxWidth=e;break;case"full":this.contentWrapperNode.style.width=e;break;case"min":this.contentWrapperNode.style.minWidth=e,this.contentWrapperNode.style.width="auto";break}}_handleHidesOnOutsideClick({phase:e}){let o=e==="show"?"addEventListener":"removeEventListener";if(e==="show"){let i=!1,n=!1;this.__onInsideMouseDown=()=>{i=!0},this.__onInsideMouseUp=()=>{n=!0},this.__onDocumentMouseUp=()=>{setTimeout(()=>{!i&&!n&&this.hide(),i=!1,n=!1})},this.__onWindowBlur=()=>{setTimeout(()=>{this.hide()})}}this.contentWrapperNode[o]("mousedown",this.__onInsideMouseDown,!0),this.contentWrapperNode[o]("mouseup",this.__onInsideMouseUp,!0),this.invokerNode&&(this.invokerNode[o]("mousedown",this.__onInsideMouseDown,!0),this.invokerNode[o]("mouseup",this.__onInsideMouseUp,!0)),document.documentElement[o]("mouseup",this.__onDocumentMouseUp,!0),window[o]("blur",this.__onWindowBlur)}_handleAccessibility({phase:e}){(e==="init"||e==="teardown")&&this.__setupTeardownAccessibility({phase:e});let o=this.trapsKeyboardFocus;this.invokerNode&&!this.isTooltip&&!o&&this.invokerNode.setAttribute("aria-expanded",`${e==="show"}`)}teardown(){this.__handleOverlayStyles({phase:"teardown"}),this.isShown&&this._keepBodySize({phase:"teardown"}),this._handleFeatures({phase:"teardown"}),this.#t()&&this.manager.remove(this)}async __createPopperInstance(){if(this._popper&&(this._popper.destroy(),this._popper=void 0),t.popperModule!==void 0){let{createPopper:e}=await t.popperModule;this._popper=e(this._referenceNode,this.contentWrapperNode,{...this.config?.popperConfig})}}_hasDisabledInvoker(){return this.invokerNode?this.invokerNode.disabled||this.invokerNode.getAttribute("aria-disabled")==="true":!1}};m.popperModule=void 0;function B(t,e){if(typeof t!="object"||typeof e!="object"||t===null||e===null)return t===e;let o=Object.keys(t),i=Object.keys(e);if(o.length!==i.length)return!1;let n=r=>B(t[r],e[r]);return o.every(n)}var se=[];var ae=t=>{class e extends t{static get properties(){return{opened:{type:Boolean,reflect:!0}}}#e=!1;constructor(){super(),this.opened=!1,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}get config(){return this.__config}set config(i){let n=!B(this.config,i);this._overlayCtrl&&n&&this._overlayCtrl.updateConfig(i),this.__config=i,this._overlayCtrl&&n&&this.__syncToOverlayController()}requestUpdate(i,n,r){super.requestUpdate(i,n,r),i==="opened"&&this.opened!==n&&this.dispatchEvent(new CustomEvent("opened-changed",{detail:{opened:this.opened}}))}_defineOverlay({contentNode:i,invokerNode:n,referenceNode:r,backdropNode:l,contentWrapperNode:c}){let _=this._defineOverlayConfig()||{};return new m({contentNode:i,invokerNode:n,referenceNode:r,backdropNode:l,contentWrapperNode:c,..._,...this.config,popperConfig:{..._.popperConfig||{},...this.config?.popperConfig||{},modifiers:[..._.popperConfig?.modifiers||[],...this.config?.popperConfig?.modifiers||[]]}})}_defineOverlayConfig(){return{placementMode:"local"}}updated(i){super.updated(i),i.has("opened")&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=i=>{i.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener("close-overlay",this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener("close-overlay",this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&(this.#e||(this._setupOverlayCtrl(),this.#e=!0))})}async disconnectedCallback(){super.disconnectedCallback(),await this._isPermanentlyDisconnected()&&(this._teardownOverlayCtrl(),this.#e=!1)}static enabledWarnings=super.enabledWarnings?.filter(i=>i!=="change-in-update")||[];get _overlayInvokerNode(){return Array.from(this.children).find(i=>i.slot==="invoker")}get _overlayReferenceNode(){}get _overlayBackdropNode(){return this.__cachedOverlayBackdropNode||(this.__cachedOverlayBackdropNode=Array.from(this.children).find(i=>i.slot==="backdrop")),this.__cachedOverlayBackdropNode}get _overlayContentNode(){return this._cachedOverlayContentNode||(this._cachedOverlayContentNode=Array.from(this.children).find(i=>i.slot==="content")||this.config.contentNode),this._cachedOverlayContentNode}get _overlayContentWrapperNode(){return this.shadowRoot?.querySelector("#overlay-content-node-wrapper")}_setupOverlayCtrl(){if(this.#e)return;let i={contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode};this._overlayCtrl?this._overlayCtrl.updateConfig(i):this._overlayCtrl=this._defineOverlay(i),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._overlayCtrl&&(this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown())}async _setOpenedWithoutPropertyEffects(i){this.__blockSyncToOverlayCtrl=!0,this.opened=i,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=i=>{let n=new CustomEvent("before-opened",{cancelable:!0});this.dispatchEvent(n),n.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),i.preventDefault())},this.__onBeforeHide=i=>{let n=new CustomEvent("before-closed",{cancelable:!0});this.dispatchEvent(n),n.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),i.preventDefault())},this._overlayCtrl.addEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.addEventListener("before-hide",this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.removeEventListener("before-hide",this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}repositionOverlay(){let i=this._overlayCtrl;i.placementMode==="local"&&i._popper&&i._popper.update()}async _isPermanentlyDisconnected(){return await this.updateComplete,!this.isConnected}}for(let o of se)o(e);return e},P=S(ae);var le=t=>class extends P(t){static get properties(){return{hasArrow:{type:Boolean,reflect:!0,attribute:"has-arrow"}}}static get styles(){return[...super.styles||[],N`
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
      `}_defineOverlayConfig(){let o=super._defineOverlayConfig()||{};return this.hasArrow?{...o,popperConfig:{...this._getPopperArrowConfig(o.popperConfig)}}:o}_getPopperArrowConfig(o){return{...o||{},placement:"top",modifiers:[{name:"arrow",enabled:!0,options:{padding:8}},{name:"offset",enabled:!0,options:{offset:[0,8]}},...o&&o.modifiers||[]],onFirstUpdate:n=>{this.__syncFromPopperState(n)},afterWrite:n=>{this.__syncFromPopperState(n)}}}__setupRepositionCompletePromise(){this.repositionComplete=new Promise(o=>{this.__repositionCompleteResolver=o})}get _arrowNode(){return this.shadowRoot.querySelector("[data-popper-arrow]")}__syncFromPopperState(o){o&&this._arrowNode&&o.placement!==this._arrowNode.placement&&(this.__repositionCompleteResolver(o.placement),this.__setupRepositionCompletePromise())}},de=S(le);function g(){return{visibilityTriggerFunction:({controller:t})=>{function e(){t._hasDisabledInvoker()||t.toggle()}return{init:()=>{t.invokerNode?.addEventListener("click",e)},teardown:()=>{t.invokerNode?.removeEventListener("click",e)}}}}}var he=()=>({hasBackdrop:!0,preventsScroll:!0,trapsKeyboardFocus:!0,hidesOnEsc:!0,placementMode:"global",viewportConfig:{placement:"bottom"},handlesAccessibility:!0,...g()});var ce=()=>({placementMode:"global",viewportConfig:{placement:"center"},hasBackdrop:!0,preventsScroll:!0,trapsKeyboardFocus:!0,hidesOnEsc:!0,handlesAccessibility:!0,...g()});var D=({horizontalFallback:t=!0,placement:e="auto"}={})=>({placementMode:"local",inheritsReferenceWidth:"min",hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:e,modifiers:[{name:"offset",enabled:!1},{name:"flip",options:{fallbackPlacements:t?["bottom","top","right","left"]:["bottom","top"]}}]},handlesAccessibility:!0,...g()});var pe=()=>D({horizontalFallback:!1,placement:"bottom-start"});function fe(t){return t&&(t.hasAttribute("disabled")||t.getAttribute("aria-disabled")==="true")}function U({isHoverSupported:t=window.matchMedia("(hover: hover)").matches,longpressDuration:e=500,delayOut:o=300,delayIn:i=0}={}){return{visibilityTriggerFunction:({controller:n})=>{let r=!1,l=!1,c,_,y=!1,w=!1,u=null;function b(){r=!1,l=!1,y=!1,u&&(n.invokerNode?.removeEventListener("click",u,{capture:!0}),u=null)}function a({shouldOpen:p,openTimeout:f=0,closeTimeout:C=0}){clearTimeout(c),p&&!fe(n.invokerNode)?c=setTimeout(()=>n.show(),f):c=setTimeout(()=>n.hide(),C)}function s(p){let{type:f}=p;if(r=f==="focusout"?!1:r||f==="focusin",l=f==="mouseleave"?!1:l||f==="mouseenter",!t&&f==="focusin"){if(w){w=!1;return}if(!n.invokerNode?.matches(":focus-visible"))return}a({shouldOpen:r||l,openTimeout:i,closeTimeout:o})}function h(p){p.preventDefault()}function d(p){if(clearTimeout(_),p.pointerType!=="touch")return;let{type:f}=p;f==="pointerdown"?(y=!1,w=!0,_=setTimeout(()=>{y=!0,u=C=>C.stopImmediatePropagation(),n.invokerNode?.addEventListener("click",u,{once:!0,capture:!0}),a({shouldOpen:!0})},e)):a({shouldOpen:!1,closeTimeout:y?e:0})}return{init:()=>{n.addEventListener("hide",b),n.invokerNode?.addEventListener("focusin",s),n.invokerNode?.addEventListener("focusout",s),t?(n.contentNode?.addEventListener("mouseenter",s),n.contentNode?.addEventListener("mouseleave",s),n.invokerNode?.addEventListener("mouseenter",s),n.invokerNode?.addEventListener("mouseleave",s)):(n.invokerNode?.style.setProperty("-webkit-touch-callout","none"),n.invokerNode?.style.setProperty("user-select","none"),n.invokerNode?.style.setProperty("-webkit-user-select","none"),n.invokerNode?.addEventListener("contextmenu",h),n.invokerNode?.addEventListener("pointerdown",d),n.invokerNode?.addEventListener("pointerup",d),n.invokerNode?.addEventListener("pointerleave",d))},teardown:()=>{n.removeEventListener("hide",b),n.invokerNode?.removeEventListener("focusin",s),n.invokerNode?.removeEventListener("focusout",s),t?(n.contentNode?.removeEventListener("mouseenter",s),n.contentNode?.removeEventListener("mouseleave",s),n.invokerNode?.removeEventListener("mouseenter",s),n.invokerNode?.removeEventListener("mouseleave",s)):(n.invokerNode?.style.removeProperty("-webkit-touch-callout"),n.invokerNode?.style.removeProperty("user-select"),n.invokerNode?.style.removeProperty("-webkit-user-select"),n.invokerNode?.removeEventListener("contextmenu",h),n.invokerNode?.removeEventListener("pointerdown",d),n.invokerNode?.removeEventListener("pointerup",d),n.invokerNode?.removeEventListener("pointerleave",d),u&&(n.invokerNode?.removeEventListener("click",u,{capture:!0}),u=null))}}}}}var ue=({invokerRelation:t="description",delayIn:e=300,delayOut:o=300}={})=>({placementMode:"local",elementToFocusAfterHide:void 0,hidesOnEsc:!0,handlesAccessibility:!0,isTooltip:!0,invokerRelation:t,popperConfig:{strategy:"absolute"},...U({delayIn:e,delayOut:o})});function _e(){let t=document.activeElement||document.body;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}function ve(t){let e=t.parentElement?.children;for(let o=0;o<e.length;o+=1){let i=e[o];i!==t&&(i.setAttribute("inert",""),i.setAttribute("aria-hidden","true"))}}function ye(t){let e=t.parentElement?.children;for(let o=0;o<e.length;o+=1){let i=e[o];i!==t&&(i.removeAttribute("inert"),i.removeAttribute("aria-hidden"))}}export{T as a,k as b,I as c,m as d,P as e,de as f,he as g,ce as h,D as i,pe as j,ue as k,_e as l,ve as m,ye as n};
