import{a as z}from"./chunk-QLXUPPY3.js";import{a as b}from"./chunk-XHF4G5V5.js";import{f as g,g as M,h as y,m as T}from"./chunk-EPIRVTM2.js";import{b as E,j as F}from"./chunk-CHUHNXUY.js";import{h as k}from"./chunk-KVEQ5QLL.js";import{b as _,d as C}from"./chunk-TIEK7LWH.js";import{a,c as f}from"./chunk-2FELQFK7.js";var n=class extends y{static validatorName="IsAcceptedFile";static checkFileSize(e,t){return e<=t}static getExtension(e){return e?.slice(e.lastIndexOf("."))}static isExtensionAllowed(e,t){return t?.find(i=>i.toUpperCase()===e.toUpperCase())}static isFileTypeAllowed(e,t){return t?.find(i=>i.toUpperCase()===e.toUpperCase())}execute(e,t=this.param){let i,s,l=this.constructor,{allowedFileTypes:r,allowedFileExtensions:d,maxFileSize:v}=t;return r?.length?(i=e.some(p=>!l.isFileTypeAllowed(p.type,r)),i):d?.length?(s=e.some(p=>!l.isExtensionAllowed(l.getExtension(p.name),d)),s):e.findIndex(p=>!l.checkFileSize(p.size,v))>-1}static async getMessage(){return""}},c=class extends y{static validatorName="DuplicateFileNames";constructor(e,t){super(e,t),this.type="info"}execute(e,t=this.param){return t.show}static async getMessage(){return E().msg("lion-input-file:uploadTextDuplicateFileName")}},w=class extends y{static get validatorName(){return"MaxFileCount"}static async getMessage(e){let t=E();return!e?.params||typeof e.params!="number"||e.params<=0?"Invalid MaxFileCount parameter. Please provide a valid number greater than 0.":t.msg("lion-input-file:maxFileCountExceeded",{maxFileCount:e.params})}execute(e,t=this.param||0){return t>0&&e.length>t}};var $=524288e3,S={type:"FILE_TYPE",size:"FILE_SIZE"},h={fail:"FAIL",pass:"SUCCESS"},L=class{constructor(e,t){this.failedProp=[],this.systemFile=e,this._acceptCriteria=t,this.uploadFileStatus(),this.failedProp.length===0&&this.createDownloadUrl(e)}_getFileNameExtension(e){return e.slice(e.lastIndexOf("."))}uploadFileStatus(){if(this._acceptCriteria.allowedFileExtensions.length){let e=this._getFileNameExtension(this.systemFile.name);n.isExtensionAllowed(e,this._acceptCriteria.allowedFileExtensions)||(this.status=h.fail,this.failedProp.push(S.type))}else if(this._acceptCriteria.allowedFileTypes.length){let e=this.systemFile.type;n.isFileTypeAllowed(e,this._acceptCriteria.allowedFileTypes)||(this.status=h.fail,this.failedProp.push(S.type))}n.checkFileSize(this.systemFile.size,this._acceptCriteria.maxFileSize)?this.status!==h.fail&&(this.status=h.pass):(this.status=h.fail,this.failedProp.push(S.size))}createDownloadUrl(e){this.downloadUrl=window.URL.createObjectURL(e)}};var x=o=>{switch(o){case"bg-BG":return import("../@lion/ui/components/input-file/translations/bg-BG.js");case"bg":return import("../@lion/ui/components/input-file/translations/bg.js");case"cs-CZ":return import("../@lion/ui/components/input-file/translations/cs-CZ.js");case"cs":return import("../@lion/ui/components/input-file/translations/cs.js");case"de-DE":return import("../@lion/ui/components/input-file/translations/de-DE.js");case"de":return import("../@lion/ui/components/input-file/translations/de.js");case"en-AU":return import("../@lion/ui/components/input-file/translations/en-AU.js");case"en-GB":return import("../@lion/ui/components/input-file/translations/en-GB.js");case"en-US":return import("../@lion/ui/components/input-file/translations/en-US.js");case"en-PH":case"en":return import("../@lion/ui/components/input-file/translations/en.js");case"es-ES":return import("../@lion/ui/components/input-file/translations/es-ES.js");case"es":return import("../@lion/ui/components/input-file/translations/es.js");case"fr-FR":return import("../@lion/ui/components/input-file/translations/fr-FR.js");case"fr-BE":return import("../@lion/ui/components/input-file/translations/fr-BE.js");case"fr":return import("../@lion/ui/components/input-file/translations/fr.js");case"hu-HU":return import("../@lion/ui/components/input-file/translations/hu-HU.js");case"hu":return import("../@lion/ui/components/input-file/translations/hu.js");case"id-ID":return import("../@lion/ui/components/input-file/translations/id-ID.js");case"id":return import("../@lion/ui/components/input-file/translations/id.js");case"it-IT":return import("../@lion/ui/components/input-file/translations/it-IT.js");case"it":return import("../@lion/ui/components/input-file/translations/it.js");case"nl-BE":return import("../@lion/ui/components/input-file/translations/nl-BE.js");case"nl-NL":return import("../@lion/ui/components/input-file/translations/nl-NL.js");case"nl":return import("../@lion/ui/components/input-file/translations/nl.js");case"pl-PL":return import("../@lion/ui/components/input-file/translations/pl-PL.js");case"pl":return import("../@lion/ui/components/input-file/translations/pl.js");case"ro-RO":return import("../@lion/ui/components/input-file/translations/ro-RO.js");case"ro":return import("../@lion/ui/components/input-file/translations/ro.js");case"ru-RU":return import("../@lion/ui/components/input-file/translations/ru-RU.js");case"ru":return import("../@lion/ui/components/input-file/translations/ru.js");case"sk-SK":return import("../@lion/ui/components/input-file/translations/sk-SK.js");case"sk":return import("../@lion/ui/components/input-file/translations/sk.js");case"uk-UA":return import("../@lion/ui/components/input-file/translations/uk-UA.js");case"uk":return import("../@lion/ui/components/input-file/translations/uk.js");case"zh-CN":case"zh":return import("../@lion/ui/components/input-file/translations/zh.js");default:return import("../@lion/ui/components/input-file/translations/en.js")}};var m=class extends F(g(C)){static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":M}}static get properties(){return{fileList:{type:Array},multiple:{type:Boolean}}}static localizeNamespaces=[{"lion-input-file":x},...super.localizeNamespaces];constructor(){super(),this.fileList=[],this.multiple=!1}updated(e){super.updated(e),e.has("fileList")&&this._enhanceLightDomA11y()}_enhanceLightDomA11y(){let e=this.shadowRoot?.querySelectorAll('[id^="file-feedback"]'),t=this.parentNode?.parentNode;e?.forEach(i=>{t?.addEventListener("focusin",()=>{i.setAttribute("aria-live","polite")}),t?.addEventListener("focusout",()=>{i.setAttribute("aria-live","assertive")})})}_removeFile(e){this.dispatchEvent(new CustomEvent("file-remove-requested",{detail:{removedFile:e,status:e.status,uploadResponse:e.response}}))}_validationFeedbackTemplate(e,t){return a`
      <lion-validation-feedback
        id="file-feedback-${t}"
        .feedbackData="${e}"
        aria-live="assertive"
      ></lion-validation-feedback>
    `}_listItemBeforeTemplate(e){return f}_listItemAfterTemplate(e,t){return a`
      <button
        class="selected__list__item__remove-button"
        aria-label="${this.msgLit("lion-input-file:removeButtonLabel",{fileName:e.systemFile.name})}"
        @click=${()=>this._removeFile(e)}
      >
        ${this._removeButtonContentTemplate()}
      </button>
    `}_removeButtonContentTemplate(){return a`✖️`}_selectedListItemTemplate(e){let t=k();return a`
      <div class="selected__list__item" status="${e.status?e.status.toLowerCase():""}">
        <div class="selected__list__item__label">
          ${this._listItemBeforeTemplate(e)}
          <span id="selected-list-item-label-${t}" class="selected__list__item__label__text">
            <span class="sr-only">${this.msgLit("lion-input-file:fileNameDescriptionLabel")}</span>
            ${e.downloadUrl&&e.status!=="LOADING"?a`
                  <a
                    class="selected__list__item__label__link"
                    href="${e.downloadUrl}"
                    target="${e.downloadUrl.startsWith("blob")?"_blank":""}"
                    rel="${b(e.downloadUrl.startsWith("blob")?"noopener noreferrer":void 0)}"
                    >${e.systemFile?.name}</a
                  >
                `:e.systemFile?.name}
          </span>
          ${this._listItemAfterTemplate(e,t)}
        </div>
        ${e.status==="FAIL"&&e.validationFeedback?a`
              ${z(e.validationFeedback,i=>a`
                  ${this._validationFeedbackTemplate([i],t)}
                `)}
            `:f}
      </div>
    `}render(){return this.fileList?.length?a`
          ${this.multiple?a`
                <ul class="selected__list">
                  ${this.fileList.map(e=>a` <li>${this._selectedListItemTemplate(e)}</li> `)}
                </ul>
              `:a` ${this._selectedListItemTemplate(this.fileList[0])} `}
        `:f}static get styles(){return[_`
        .selected__list {
          list-style-type: none;
          margin-block-start: 0;
          margin-block-end: 0;
          padding-inline-start: 0;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `]}};function N(o,e=2){if(!+o)return"0 Bytes";let t=1024,i=e<0?0:e,s=[" bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],l=Math.floor(Math.log(o)/Math.log(t));return`${parseFloat((o/t**l).toFixed(i))}${s[l]}`}var A=class extends g(F(T)){static get scopedElements(){return{...super.scopedElements,"lion-selected-file-list":m}}static get properties(){return{accept:{type:String},multiple:{type:Boolean,reflect:!0},buttonLabel:{type:String,attribute:"button-label"},maxFileSize:{type:Number,attribute:"max-file-size"},enableDropZone:{type:Boolean,attribute:"enable-drop-zone"},uploadOnSelect:{type:Boolean,attribute:"upload-on-select"},isDragging:{type:Boolean,attribute:"is-dragging",reflect:!0},uploadResponse:{type:Array,state:!1},_selectedFilesMetaData:{type:Array,state:!0}}}static localizeNamespaces=[{"lion-input-file":x},...super.localizeNamespaces];static get validationTypes(){return["error","info"]}get slots(){return{...super.slots,input:()=>a`<input .value="${b(this.getAttribute("value"))}" />`,"file-select-button":()=>a`<button
          type="button"
          id="select-button-${this._inputId}"
          @click="${this.__openDialogOnBtnClick}"
        >
          ${this.buttonLabel}
        </button>`,after:()=>a`<div data-description></div>`,"selected-file-list":()=>({template:a`
          <lion-selected-file-list
            .fileList=${this._selectedFilesMetaData}
            .multiple=${this.multiple}
          ></lion-selected-file-list>
        `,renderAsDirectHostChild:!0})}}get _inputNode(){return super._inputNode}get _buttonNode(){return this.querySelector(`#select-button-${this._inputId}`)}get buttonLabel(){return this.__buttonLabel||this._buttonNode?.textContent?.trim()||""}set buttonLabel(e){let t=this.buttonLabel;this.__buttonLabel=e,this.requestUpdate("buttonLabel",t)}get _focusableNode(){return this._buttonNode}get _isDragAndDropSupported(){return"draggable"in document.createElement("div")}constructor(){super(),this.type="file",this._selectedFilesMetaData=[],this.uploadResponse=[],this.__initialUploadResponse=this.uploadResponse,this.uploadOnSelect=!1,this.multiple=!1,this.enableDropZone=!1,this.maxFileSize=$,this.accept="",this.buttonLabel="",this._initialButtonLabel="",this.modelValue=[],this._onRemoveFile=this._onRemoveFile.bind(this),this.__duplicateFileNamesValidator=new c({show:!1}),this.__previouslyParsedFiles=null}get _fileListNode(){return Array.from(this.children).find(e=>e.slot==="selected-file-list")}connectedCallback(){super.connectedCallback(),this.__initialUploadResponse=this.uploadResponse,this._initialButtonLabel=this.buttonLabel,this._inputNode.addEventListener("change",this._onChange),this._inputNode.addEventListener("click",this._onClick)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode.removeEventListener("change",this._onChange),this._inputNode.removeEventListener("click",this._onClick)}onLocaleUpdated(){super.onLocaleUpdated(),this.multiple?this.buttonLabel=this._initialButtonLabel||this.msgLit("lion-input-file:selectTextMultipleFile"):this.buttonLabel=this._initialButtonLabel||this.msgLit("lion-input-file:selectTextSingleFile")}get operationMode(){return"upload"}get _acceptCriteria(){let e=[],t=[];if(this.accept){let i=this.accept.replace(/\s+/g,"").split(",");e=i.filter(s=>s.includes("/")),t=i.filter(s=>!s.includes("/"))}return{allowedFileTypes:e,allowedFileExtensions:t,maxFileSize:this.maxFileSize}}reset(){super.reset(),this._selectedFilesMetaData=[],this.uploadResponse=this.__initialUploadResponse,this.modelValue=[],this.dirty=!1}clear(){this._selectedFilesMetaData=[],this.uploadResponse=[],this.modelValue=[]}_showFeedbackConditionFor(e,t){return super._showFeedbackConditionFor(e,t)&&!(this.validationStates.error?.FileTypeAllowed||this.validationStates.error?.FileSizeAllowed)}parser(){if(this.__previouslyParsedFiles===this._inputNode.files)return this.modelValue;this.__previouslyParsedFiles=this._inputNode.files;let e=this._inputNode.files?Array.from(this._inputNode.files):[];return this.multiple?[...this.modelValue??[],...e]:e}formatter(e){return this._inputNode?.value||""}__setupDragDropEventListeners(){let e=this.shadowRoot?.querySelector(".input-file__drop-zone");["dragenter","dragover","dragleave"].forEach(t=>{e?.addEventListener(t,i=>{i.preventDefault(),i.stopPropagation(),this.isDragging=t!=="dragleave"},!1)}),window.addEventListener("drop",t=>{t.target===this._inputNode&&t.preventDefault(),this.isDragging=!1},!1)}firstUpdated(e){super.firstUpdated(e),this.__setupFileValidators(),this._inputNode&&(this._inputNode.type=this.type,this._inputNode.setAttribute("tabindex","-1"),this._inputNode.multiple=this.multiple,this.accept.length&&(this._inputNode.accept=this.accept)),this.enableDropZone&&this._isDragAndDropSupported&&(this.__setupDragDropEventListeners(),this.setAttribute("drop-zone","")),this._fileListNode.addEventListener("file-remove-requested",this._onRemoveFile)}updated(e){super.updated(e),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("buttonLabel")&&this._buttonNode&&(this._buttonNode.textContent=this.buttonLabel),e.has("name")&&(this._inputNode.name=this.name),e.has("_ariaLabelledNodes")&&this.__syncAriaLabelledByAttributesToButton(),e.has("_ariaDescribedNodes")&&this.__syncAriaDescribedByAttributesToButton(),e.has("uploadResponse")&&(this._selectedFilesMetaData.length===0&&this.uploadResponse.forEach(t=>{let i={systemFile:{name:t.name},response:t,status:t.status,validationFeedback:[{message:t.errorMessage}]};this._selectedFilesMetaData=[...this._selectedFilesMetaData,i]}),this._selectedFilesMetaData.forEach(t=>{!this.uploadResponse.some(i=>i.name===t.systemFile.name)&&this.uploadOnSelect?this.__removeFileFromList(t):(this.uploadResponse.forEach(i=>{i.name===t.systemFile.name&&(t.response=i,t.downloadUrl=i.downloadUrl?i.downloadUrl:t.downloadUrl,t.status=i.status,t.validationFeedback=[{type:typeof i.errorMessage=="string"&&i.errorMessage?.length>0?"error":"success",message:i.errorMessage??""}])}),this._selectedFilesMetaData=[...this._selectedFilesMetaData])}),this._updateUploadButtonDescription())}__computeNewAddedFiles(e){let t=e.filter(i=>this._selectedFilesMetaData.findIndex(s=>s.systemFile.name===i.name)===-1);return this.__duplicateFileNamesValidator.param={show:e.length!==t.length},this.validate(),t}_processDroppedFiles(e){if(e.preventDefault(),this.isDragging=!1,!(e.dataTransfer&&e.dataTransfer.items.length>1&&!this.multiple||!e.dataTransfer?.files)){if(this._inputNode.files=e.dataTransfer.files,this.multiple){let i=this.__computeNewAddedFiles(Array.from(e.dataTransfer.files));this.modelValue=[...this.modelValue??[],...i]}else this.modelValue=Array.from(e.dataTransfer.files);this._processFiles(Array.from(e.dataTransfer.files))}}_onChange(e){this.touched=!0,this._onUserInputChanged(),this._processFiles(e?.target?.files)}_onClick(e){e.target.value=""}__syncAriaLabelledByAttributesToButton(){if(this._inputNode.hasAttribute("aria-labelledby")){let e=this._inputNode.getAttribute("aria-labelledby");this._buttonNode?.setAttribute("aria-labelledby",`select-button-${this._inputId} ${e}`)}}__syncAriaDescribedByAttributesToButton(){if(this._inputNode.hasAttribute("aria-describedby")){let e=this._inputNode.getAttribute("aria-describedby")||"";this._buttonNode?.setAttribute("aria-describedby",e)}}__setupFileValidators(){this.defaultValidators=[new n(this._acceptCriteria),this.__duplicateFileNamesValidator]}_processFiles(e){let t=this.__computeNewAddedFiles(Array.from(e));!this.multiple&&t.length>0&&(this._selectedFilesMetaData=[],this.uploadResponse=[]);let i;for(let l of t.values())i=new L(l,this._acceptCriteria),i.failedProp?.length?(this._handleErroredFiles(i),this.uploadResponse=[...this.uploadResponse,{name:i.systemFile.name,status:"FAIL",errorMessage:i.validationFeedback[0].message}]):this.uploadResponse=[...this.uploadResponse,{name:i.systemFile.name,status:"SUCCESS"}],this._selectedFilesMetaData=[...this._selectedFilesMetaData,i],this._handleErrors();let s=this._selectedFilesMetaData.filter(({systemFile:l,status:r})=>t.includes(l)&&r==="SUCCESS").map(({systemFile:l})=>l);s.length>0&&this._dispatchFileListChangeEvent(s)}_dispatchFileListChangeEvent(e){this.dispatchEvent(new CustomEvent("file-list-changed",{detail:{newFiles:e}}))}_handleErrors(){let e=!1;if(this._selectedFilesMetaData.forEach(t=>{t.failedProp&&t.failedProp.length>0&&(e=!0)}),e)this.hasFeedbackFor?.push("error"),this.shouldShowFeedbackFor.push("error");else if(this._prevHasErrors&&this.hasFeedbackFor.includes("error")){let t=this.hasFeedbackFor.indexOf("error");this.hasFeedbackFor.slice(t,t+1);let i=this.shouldShowFeedbackFor.indexOf("error");this.shouldShowFeedbackFor.slice(i,i+1)}this._prevHasErrors=e}_handleErroredFiles(e){e.validationFeedback=[];let{allowedFileExtensions:t,allowedFileTypes:i}=this._acceptCriteria,s=[],l=0,r;t.length?(s=t,r=s.pop(),l=s.length):i.length&&(i.forEach(u=>{if(u.endsWith("/*"))s.push(u.slice(0,-2));else if(u==="text/plain")s.push("text");else{let p=u.indexOf("/"),D=u.slice(p+1);if(!D.includes("+"))s.push(`.${D}`);else{let U=D.split("+");s.push(`.${U[0]}`)}}}),r=s.pop(),l=s.length);let d="";r?l?d=`${this.msgLit("lion-input-file:allowedFileValidatorComplex",{allowedTypesArray:s.join(", "),allowedTypesLastItem:r,maxSize:N(this.maxFileSize)})}`:d=`${this.msgLit("lion-input-file:allowedFileValidatorSimple",{allowedType:r,maxSize:N(this.maxFileSize)})}`:d=`${this.msgLit("lion-input-file:allowedFileSize",{maxSize:N(this.maxFileSize)})}`;let v={message:d,type:"error"};e.validationFeedback?.push(v)}_updateUploadButtonDescription(){let e=[],t;this._selectedFilesMetaData.forEach(s=>{s.status==="FAIL"&&(t=s.validationFeedback?s.validationFeedback[0].message.toString():"",e.push(s.systemFile.name))});let i=this.querySelector('[slot="after"]');if(i)if(!this._selectedFilesMetaData||this._selectedFilesMetaData.length===0)this.uploadOnSelect?i.textContent=this.msgLit("lion-input-file:noFilesUploaded"):i.textContent=this.msgLit("lion-input-file:noFilesSelected");else if(this._selectedFilesMetaData.length===1){let{name:s}=this._selectedFilesMetaData[0].systemFile;this.uploadOnSelect?i.textContent=t||this.msgLit("lion-input-file:fileUploaded")+(s??""):i.textContent=t||this.msgLit("lion-input-file:fileSelected")+(s??"")}else this.uploadOnSelect?i.textContent=`${this.msgLit("lion-input-file:filesUploaded",{numberOfFiles:this._selectedFilesMetaData.length})} ${t?this.msgLit("lion-input-file:generalValidatorMessage",{validatorMessage:t,listOfErroneousFiles:e.join(", ")}):""}`:i.textContent=`${this.msgLit("lion-input-file:filesSelected",{numberOfFiles:this._selectedFilesMetaData.length})} ${t?this.msgLit("lion-input-file:generalValidatorMessage",{validatorMessage:t,listOfErroneousFiles:e.join(", ")}):""}`}__removeFileFromList(e){this._selectedFilesMetaData=this._selectedFilesMetaData.filter(t=>t.systemFile.name!==e.systemFile.name),this.modelValue&&(this.modelValue=this.modelValue.filter(t=>t.name!==e.systemFile.name)),this._inputNode.value="",this._handleErrors(),this._updateUploadButtonDescription()}_onRemoveFile(e){if(this.disabled)return;let{removedFile:t}=e.detail;!this.uploadOnSelect&&t&&this.__removeFileFromList(t),this._removeFile(t)}_removeFile(e){this.dispatchEvent(new CustomEvent("file-removed",{detail:{removedFile:e,status:e.status,uploadResponse:e.response}}))}_reflectBackOn(){return!1}_isEmpty(){return this.modelValue?.length===0}_dropZoneTemplate(){return a`
      <div @drop="${this._processDroppedFiles}" class="input-file__drop-zone">
        <div class="input-file__drop-zone__text">
          ${this.msgLit("lion-input-file:dragAndDropText")}
        </div>
        <slot name="file-select-button"></slot>
      </div>
    `}_inputGroupAfterTemplate(){return a` <slot name="selected-file-list"></slot> `}_inputGroupInputTemplate(){return a`
      <slot name="input"> </slot>
      <slot name="after"> </slot>
      ${this.enableDropZone&&this._isDragAndDropSupported?this._dropZoneTemplate():a`
            <div class="input-group__file-select-button">
              <slot name="file-select-button"></slot>
            </div>
          `}
    `}static get styles(){return[super.styles,_`
        .input-group__container {
          position: relative;
          display: flex;
          flex-direction: column;
          width: fit-content;
        }

        :host([drop-zone]) .input-group__container {
          width: auto;
        }

        .input-group__container ::slotted(input[type='file']) {
          /** Invisible, since means of interaction is button */
          position: absolute;
          opacity: 0;
          /** Full cover positioned, so it will be a drag and drop surface */
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .input-file__drop-zone {
          display: flex;
          position: relative;
          flex-direction: column;
          align-items: center;
          border: dashed 2px black;
          padding: 24px 0;
        }

        .input-group__container ::slotted([slot='after']) {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `]}__openDialogOnBtnClick(e){e.preventDefault(),e.stopPropagation(),this._inputNode.click()}};export{n as a,c as b,w as c,m as d,A as e};
