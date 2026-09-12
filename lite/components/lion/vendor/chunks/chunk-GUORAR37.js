import{a as g}from"./chunk-XHF4G5V5.js";import{f as d,g as m,h as _,j as F}from"./chunk-CHUHNXUY.js";import{b as L,d as T}from"./chunk-TIEK7LWH.js";import{a as o}from"./chunk-2FELQFK7.js";function p(n,e){return n instanceof Date&&e instanceof Date&&n.getDate()===e.getDate()&&n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}var W=L`
  :host {
    display: block;
  }

  :host([hidden]) {
    display: none;
  }

  .calendar {
    display: block;
  }

  .calendar__navigation {
    padding: 0 8px;
  }

  .calendar__navigation__month,
  .calendar__navigation__year {
    display: flex;
  }

  .calendar__navigation-heading {
    margin: 0.5em 0;
  }

  .calendar__previous-button,
  .calendar__next-button {
    background-color: #fff;
    border: 0;
    padding: 0;
    min-width: 40px;
    min-height: 40px;
  }

  .calendar__grid {
    width: 100%;
    padding: 8px 8px;
  }

  .calendar__weekday-header {
  }

  .calendar__day-cell {
    text-align: center;
  }

  .calendar__day-button {
    background-color: #fff;
    border: 0;
    color: black;
    padding: 0;
    min-width: 40px;
    min-height: 40px;
    /** give div[role=button][aria-disabled] same display type as native btn */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .calendar__day-button:focus {
    border: 1px solid blue;
    outline: none;
  }

  .calendar__day-button__text {
    pointer-events: none;
  }

  .calendar__day-button[today] {
    text-decoration: underline;
  }

  .calendar__day-button[selected] {
    background: #ccc;
  }

  .calendar__day-button[previous-month],
  .calendar__day-button[next-month] {
    color: rgb(115, 115, 115);
  }

  .calendar__day-button:hover {
    border: 1px solid green;
  }

  .calendar__day-button[aria-disabled='true'] {
    background-color: #fff;
    color: #eee;
    outline: none;
  }

  .u-sr-only {
    position: absolute;
    top: 0;
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
`;function u(n=new Date,{weekOrder:e=0,central:a=!1,startOfWeek:t=!1,selected:s=!1,previousMonth:i=!1,currentMonth:r=!1,nextMonth:l=!1,past:c=!1,today:h=!1,future:D=!1,disabled:k=!1,disabledInfo:f=""}={}){return{weekOrder:e,central:a,date:n,startOfWeek:t,selected:s,previousMonth:i,currentMonth:r,nextMonth:l,past:c,today:h,future:D,disabled:k,tabindex:"-1",ariaPressed:"false",ariaCurrent:void 0,disabledInfo:f}}function $(n,{firstDayOfWeek:e=0}={}){if(Object.prototype.toString.call(n)!=="[object Date]")throw new Error("invalid date provided");let a=new Date(n),t=new Date(n);for(;t.getDay()!==e;)t.setDate(t.getDate()-1),a=new Date(t);let s={days:[]};for(let i=0;i<7;i+=1)i!==0&&a.setDate(a.getDate()+1),s.days.push(u(new Date(a),{weekOrder:i,startOfWeek:i===0}));return s}function b(n,{firstDayOfWeek:e=0}={}){if(Object.prototype.toString.call(n)!=="[object Date]")throw new Error("invalid date provided");let a=new Date(n);a.setDate(1);let t={firstDayOfWeek:e},s={weeks:[]},i=$(a,t);do{s.weeks.push(i);let r=new Date(i.days[6].date);r.setDate(r.getDate()+1),i=$(r,t)}while(s.weeks.length!==6);return s}function Y(n,{firstDayOfWeek:e=0,pastMonths:a=0,futureMonths:t=0}={}){let s={months:[]};for(let i=a;i>0;i-=1){let r=new Date(n);r.setMonth(r.getMonth()-i),s.months.push(b(r,{firstDayOfWeek:e}))}s.months.push(b(n,{firstDayOfWeek:e}));for(let i=0;i<t;i+=1){let r=new Date(n);r.setMonth(r.getMonth()+(i+1)),s.months.push(b(r,{firstDayOfWeek:e}))}return s}var E=["January","February","March","April","May","June","July","August","September","October","November","December"];function y(n,e,a=E){let t=n.date.getDate(),s=a[n.date.getMonth()],i=n.date.getFullYear(),r=n.weekOrder?e[n.weekOrder]:e[0];return{dayNumber:t,monthName:s,year:i,weekdayName:r}}var C=[1,2,3,4,5,6,7],O=[31,28,31,30,31,30,31,31,30,31,30,31];function w(n,{weekdays:e,monthsLabels:a=E}){let{dayNumber:t,monthName:s,year:i,weekdayName:r}=y(n,e,a);function l(){return`${s} ${i} ${r}`}function c(){return`${n.disabledInfo}`}let h=t===1,D=n.weekOrder===6&&C.includes(t),k=n.startOfWeek&&C.includes(t);i%4===0&&(i%100!==0||i%400===0)&&(O[1]=29);let f=O[n.date.getMonth()],x=[];for(let M=f;M>=f-7;M-=1)x.push(M);let U=n.weekOrder===6&&x.includes(t),R=n.startOfWeek&&x.includes(t),I=f===t;return o`
    <td
      role="gridcell"
      class="calendar__day-cell"
      ?current-month=${n.currentMonth}
      ?first-day=${h}
      ?end-of-first-week=${D}
      ?start-of-first-full-week=${k}
      ?end-of-last-full-week=${U}
      ?start-of-last-week=${R}
      ?last-day=${I}
    >
      <div
        role="button"
        .date=${n.date}
        class="calendar__day-button"
        tabindex=${g(n.tabindex)}
        aria-pressed=${g(n.ariaPressed)}
        aria-current=${g(n.ariaCurrent)}
        aria-disabled=${n.disabled?"true":"false"}
        ?selected=${n.selected}
        ?past=${n.past}
        ?today=${n.today}
        ?future=${n.future}
        ?previous-month=${n.previousMonth}
        ?current-month=${n.currentMonth}
        ?next-month=${n.nextMonth}
      >
        <span class="calendar__day-button__text">${t}</span>
        <span class="u-sr-only">${l()} ${c()}</span>
      </div>
    </td>
  `}function S(n,{weekdaysShort:e,weekdays:a,monthsLabels:t,dayTemplate:s=w}){return o`
    <div id="js-content-wrapper">
      ${n.months.map(i=>o`
          <table
            role="grid"
            data-wrap-cols
            aria-readonly="true"
            class="calendar__grid"
            aria-labelledby="month year"
          >
            <thead>
              <tr role="row">
                ${e.map((r,l)=>o`
                    <th
                      role="columnheader"
                      class="calendar__weekday-header"
                      scope="col"
                      aria-label="${a[l]}"
                    >
                      ${r}
                    </th>
                  `)}
              </tr>
            </thead>
            <tbody>
              ${i.weeks.map(r=>o`
                  <tr role="row">
                    ${r.days.map(l=>s(l,{weekdaysShort:e,weekdays:a,monthsLabels:t}))}
                  </tr>
                `)}
            </tbody>
          </table>
        `)}
    </div>
  `}function B(n){let e=new Date(n);return e.setDate(1),e.setMonth(n.getMonth()+1),e}function P(n){let e=new Date(n);return e.setDate(0),new Date(e)}var v=n=>n.classList.contains("calendar__day-button");function A(n){return n.getAttribute("aria-disabled")==="true"}var N=class extends F(T){static get localizeNamespaces(){return[{"lion-calendar":e=>{switch(e){case"bg-BG":case"bg":return import("../@lion/ui/components/calendar/translations/bg.js");case"cs-CZ":case"cs":return import("../@lion/ui/components/calendar/translations/cs.js");case"de-AT":case"de-DE":case"de":return import("../@lion/ui/components/calendar/translations/de.js");case"en-AU":case"en-GB":case"en-PH":case"en-US":case"en":return import("../@lion/ui/components/calendar/translations/en.js");case"es-ES":case"es":return import("../@lion/ui/components/calendar/translations/es.js");case"fr-FR":case"fr-BE":case"fr":return import("../@lion/ui/components/calendar/translations/fr.js");case"hu-HU":case"hu":return import("../@lion/ui/components/calendar/translations/hu.js");case"it-IT":case"it":return import("../@lion/ui/components/calendar/translations/it.js");case"nl-BE":case"nl-NL":case"nl":return import("../@lion/ui/components/calendar/translations/nl.js");case"pl-PL":case"pl":return import("../@lion/ui/components/calendar/translations/pl.js");case"ro-RO":case"ro":return import("../@lion/ui/components/calendar/translations/ro.js");case"ru-RU":case"ru":return import("../@lion/ui/components/calendar/translations/ru.js");case"sk-SK":case"sk":return import("../@lion/ui/components/calendar/translations/sk.js");case"tr-TR":case"tr":return import("../@lion/ui/components/calendar/translations/tr.js");case"uk-UA":case"uk":return import("../@lion/ui/components/calendar/translations/uk.js");case"zh-CN":case"zh":return import("../@lion/ui/components/calendar/translations/zh.js");default:return import("../@lion/ui/components/calendar/translations/en.js")}}},...super.localizeNamespaces]}static get properties(){return{minDate:{attribute:!1},maxDate:{attribute:!1},disableDates:{attribute:!1},selectedDate:{attribute:!1},centralDate:{attribute:!1},firstDayOfWeek:{attribute:!1},weekdayHeaderNotation:{attribute:!1},locale:{attribute:!1},__focusedDate:{attribute:!1},__data:{attribute:!1}}}constructor(){super(),this.__data={months:[]},this.minDate=new Date(0),this.maxDate=new Date(864e13),this.dayPreprocessor=e=>e,this.disableDates=e=>!1,this.firstDayOfWeek=0,this.weekdayHeaderNotation="short",this.__today=_(new Date),this.centralDate=this.__today,this.__focusedDate=null,this.__connectedCallbackDone=!1,this.__eventsAdded=!1,this.locale="",this.__boundKeyboardNavigationEvent=this.__keyboardNavigationEvent.bind(this),this.__boundClickDateDelegation=this.__clickDateDelegation.bind(this),this.__boundFocusDateDelegation=this.__focusDateDelegation.bind(this),this.__boundBlurDateDelegation=this.__focusDateDelegation.bind(this)}static get styles(){return[W]}render(){return o`
      <div class="calendar" role="application">
        ${this.__renderNavigation()} ${this.__renderData()}
      </div>
    `}get focusedDate(){return this.__focusedDate}goToNextMonth(){this.__modifyDate(1,{dateType:"centralDate",type:"Month"})}goToPreviousMonth(){this.__modifyDate(-1,{dateType:"centralDate",type:"Month"})}goToNextYear(){this.__modifyDate(1,{dateType:"centralDate",type:"FullYear"})}goToPreviousYear(){this.__modifyDate(-1,{dateType:"centralDate",type:"FullYear"})}async focusDate(e){this.centralDate=e,await this.updateComplete,this.focusCentralDate()}focusCentralDate(){(this.shadowRoot?.querySelector("#js-content-wrapper")).querySelector('[tabindex="0"]')?.focus(),this.__focusedDate=this.centralDate}async focusSelectedDate(){this.selectedDate&&await this.focusDate(this.selectedDate)}async connectedCallback(){super.connectedCallback(),this.__connectedCallbackDone=!0,await this.updateComplete,this.__eventsAdded||(this.__contentWrapperElement=this.shadowRoot?.getElementById("js-content-wrapper"),this.__contentWrapperElement.addEventListener("click",this.__boundClickDateDelegation),this.__contentWrapperElement.addEventListener("focus",this.__boundFocusDateDelegation),this.__contentWrapperElement.addEventListener("blur",this.__boundBlurDateDelegation),this.__contentWrapperElement.addEventListener("keyup",this.__boundKeyboardNavigationEvent),this.__eventsAdded=!0)}firstUpdated(e){super.firstUpdated(e),this.__calculateInitialCentralDate(),this.__data=this.__createData()}disconnectedCallback(){super.disconnectedCallback(),this.__contentWrapperElement&&(this.__contentWrapperElement.removeEventListener("click",this.__boundClickDateDelegation),this.__contentWrapperElement.removeEventListener("focus",this.__boundFocusDateDelegation),this.__contentWrapperElement.removeEventListener("blur",this.__boundBlurDateDelegation),this.__contentWrapperElement.removeEventListener("keydown",this.__boundKeyboardNavigationEvent),this.__eventsAdded=!1)}updated(e){super.updated(e),e.has("__focusedDate")&&this.__focusedDate&&this.focusCentralDate()}requestUpdate(e,a,t){if(super.requestUpdate(e,a,t),e===void 0)return;e==="__focusedDate"&&this.__focusedDateChanged(),["centralDate","minDate","maxDate","selectedDate","disableDates"].includes(e)&&this.__connectedCallbackDone&&(this.__data=this.__createData())}initCentralDate(){this.selectedDate?this.focusSelectedDate():(this.__isEnabledDate(this.__initialCentralDate)?this.centralDate=this.__initialCentralDate:this.centralDate=this.findNearestEnabledDate(this.__initialCentralDate),this.focusCentralDate())}static enabledWarnings=super.enabledWarnings?.filter(e=>e!=="change-in-update")||[];__calculateInitialCentralDate(){this.centralDate===this.__today&&this.selectedDate?this.centralDate=this.selectedDate:this.__isEnabledDate(this.centralDate)||(this.centralDate=this.findNearestEnabledDate(this.centralDate)),this.__initialCentralDate=this.centralDate}__renderMonthNavigation(e,a){let t=this.centralDate.getMonth()===11?d({locale:this.__getLocale()})[0]:d({locale:this.__getLocale()})[this.centralDate.getMonth()+1],s=this.centralDate.getMonth()===0?d({locale:this.__getLocale()})[11]:d({locale:this.__getLocale()})[this.centralDate.getMonth()-1],i=this.centralDate.getMonth()===11?a+1:a,r=this.centralDate.getMonth()===0?a-1:a;return o`
      <div class="calendar__navigation__month">
        ${this.__renderPreviousButton("Month",s,r)}
        <h2 class="calendar__navigation-heading" id="month" aria-atomic="true">${e}</h2>
        ${this.__renderNextButton("Month",t,i)}
      </div>
    `}__renderYearNavigation(e,a){let t=a+1,s=a-1;return o`
      <div class="calendar__navigation__year">
        ${this.__renderPreviousButton("FullYear",e,s)}
        <h2 class="calendar__navigation-heading" id="year" aria-atomic="true">${a}</h2>
        ${this.__renderNextButton("FullYear",e,t)}
      </div>
    `}__renderNavigation(){let e=d({locale:this.__getLocale()})[this.centralDate.getMonth()],a=this.centralDate.getFullYear();return o`
      <div class="calendar__navigation">
        ${this.__renderYearNavigation(e,a)} ${this.__renderMonthNavigation(e,a)}
      </div>
    `}__renderData(){return S(this.__data,{monthsLabels:d({locale:this.__getLocale()}),weekdaysShort:m({locale:this.__getLocale(),style:this.weekdayHeaderNotation,firstDayOfWeek:this.firstDayOfWeek}),weekdays:m({locale:this.__getLocale(),style:"long",firstDayOfWeek:this.firstDayOfWeek}),dayTemplate:w})}__getPreviousDisabled(e,a,t){let s,i=a;return this.minDate&&e==="Month"?s=P(this.centralDate)<this.minDate:this.minDate&&(s=t<this.minDate.getFullYear()),!s&&this.minDate&&e==="FullYear"&&t===this.minDate.getFullYear()&&this.centralDate.getMonth()<this.minDate.getMonth()&&(i=d({locale:this.__getLocale()})[this.minDate.getMonth()]),{disabled:s,month:i}}__getNextDisabled(e,a,t){let s,i=a;return this.maxDate&&e==="Month"?s=B(this.centralDate)>this.maxDate:this.maxDate&&(s=t>this.maxDate.getFullYear()),!s&&this.maxDate&&e==="FullYear"&&t===this.maxDate.getFullYear()&&this.centralDate.getMonth()>=this.maxDate.getMonth()&&(i=d({locale:this.__getLocale()})[this.maxDate.getMonth()]),{disabled:s,month:i}}__renderPreviousButton(e,a,t){let{disabled:s,month:i}=this.__getPreviousDisabled(e,a,t),r=this.__getNavigationLabel("previous",e,i,t);return o`
      <button
        class="calendar__previous-button"
        aria-label=${r}
        title=${r}
        @click=${()=>{e==="FullYear"?this.goToPreviousYear():this.goToPreviousMonth()}}
        ?disabled=${s}
      >
        ${this._previousIconTemplate()}
      </button>
    `}_previousIconTemplate(){return o`&lt;`}__renderNextButton(e,a,t){let{disabled:s,month:i}=this.__getNextDisabled(e,a,t),r=this.__getNavigationLabel("next",e,i,t);return o`
      <button
        class="calendar__next-button"
        aria-label=${r}
        title=${r}
        @click=${()=>{e==="FullYear"?this.goToNextYear():this.goToNextMonth()}}
        ?disabled=${s}
      >
        ${this._nextIconTemplate()}
      </button>
    `}_nextIconTemplate(){return o`&gt;`}__getNavigationLabel(e,a,t,s){return`${this.msgLit(`lion-calendar:${e}${a}`)}, ${t} ${s}`}__getSelectableDateRange(){let e=u(new Date(this.minDate)),a=u(new Date(this.maxDate)),t=r=>{let{dayNumber:l,monthName:c,year:h}=y(r,m({locale:this.__getLocale(),style:"long",firstDayOfWeek:this.firstDayOfWeek}));return`${l} ${c} ${h}`},s=t(e),i=t(a);return{earliestSelectableDate:s,latestSelectableDate:i}}__coreDayPreprocessor(e,{currentMonth:a=!1}={}){let t=u(new Date(e.date),e),s=_(new Date);t.central=p(t.date,this.centralDate);let i=`${t.date.getFullYear()}${`0${t.date.getMonth()+1}`.slice(-2)}`,r=a&&`${a.getFullYear()}${`0${a.getMonth()+1}`.slice(-2)}`;return t.previousMonth=a&&i<r,t.currentMonth=a&&i===r,t.nextMonth=a&&i>r,t.selected=this.selectedDate?p(t.date,this.selectedDate):!1,t.past=t.date<s,t.today=p(t.date,s),t.future=t.date>s,t.disabled=this.disableDates(t.date),t.tabindex=t.central?"0":"-1",t.ariaPressed=t.selected?"true":"false",t.ariaCurrent=t.today?"date":void 0,t.disabledInfo="",t.disabled&&(t.disabledInfo=`${this.msgLit("lion-calendar:defaultDisabledDate")}`),this.minDate&&_(t.date)<_(this.minDate)&&(t.disabled=!0,t.disabledInfo=`${this.msgLit("lion-calendar:beforeDisabledDate",{params:this.__getSelectableDateRange().earliestSelectableDate})}`),this.maxDate&&_(t.date)>_(this.maxDate)&&(t.disabled=!0,t.disabledInfo=`${this.msgLit("lion-calendar:afterDisabledDate",{params:this.__getSelectableDateRange().latestSelectableDate})}`),this.dayPreprocessor(t)}__createData(e){let a=Y(this.centralDate,{firstDayOfWeek:this.firstDayOfWeek,...e});return a.months.forEach((t,s)=>{t.weeks.forEach((i,r)=>{i.days.forEach((l,c)=>{let h=a.months[s].weeks[r].days[c],D=a.months[s].weeks[0].days[6].date;a.months[s].weeks[r].days[c]=this.__coreDayPreprocessor(h,{currentMonth:D})})})}),a}__dateSelectedByUser(e){this.selectedDate=e,this.__focusedDate=e,this.dispatchEvent(new CustomEvent("user-selected-date-changed",{detail:{selectedDate:e}}))}__focusedDateChanged(){this.__focusedDate&&(this.centralDate=this.__focusedDate)}findNextEnabledDate(e){let a=e||this.centralDate;return this.__findBestEnabledDateFor(a,{mode:"future"})}findPreviousEnabledDate(e){let a=e||this.centralDate;return this.__findBestEnabledDateFor(a,{mode:"past"})}findNearestEnabledDate(e){let a=e||this.centralDate;return this.__findBestEnabledDateFor(a,{mode:"both"})}__isEnabledDate(e){return!this.__coreDayPreprocessor({date:e}).disabled}__findBestEnabledDateFor(e,{mode:a="both"}={}){let t=this.minDate&&this.minDate>e?new Date(this.minDate):new Date(e),s=this.maxDate&&this.maxDate<e?new Date(this.maxDate):new Date(e);this.minDate&&this.minDate>e&&t.setDate(t.getDate()-1),this.maxDate&&this.maxDate<e&&s.setDate(s.getDate()+1);let i=0;do{if(i+=1,(a==="both"||a==="future")&&(t.setDate(t.getDate()+1),this.__isEnabledDate(t)))return t;if((a==="both"||a==="past")&&(s.setDate(s.getDate()-1),this.__isEnabledDate(s)))return s}while(i<750);let r=e.getFullYear(),l=e.getMonth()+1,c=e.getDate();throw new Error(`Could not find a selectable date within +/- 750 day for ${r}/${l}/${c}`)}__clickDateDelegation(e){let a=e.composedPath()[0];v(a)&&!A(a)&&this.__dateSelectedByUser(a.date)}__focusDateDelegation(){!this.__focusedDate&&v(this.shadowRoot?.activeElement)&&(this.__focusedDate=this.shadowRoot?.activeElement?.date)}__blurDateDelegation(){setTimeout(()=>{this.shadowRoot?.activeElement&&!v(this.shadowRoot?.activeElement)&&(this.__focusedDate=null)},1)}__dayButtonSelection(e){v(e)&&!A(e)&&this.__dateSelectedByUser(e.date)}__keyboardNavigationEvent(e){switch(["ArrowLeft","ArrowUp","ArrowRight","ArrowDown","PageDown","PageUp"," ","Enter"].includes(e.key)&&e.preventDefault(),e.key){case" ":case"Enter":this.__dayButtonSelection(e.composedPath()[0]);break;case"ArrowUp":this.__modifyDate(-7,{dateType:"__focusedDate",type:"Date"});break;case"ArrowDown":this.__modifyDate(7,{dateType:"__focusedDate",type:"Date"});break;case"ArrowLeft":this.__modifyDate(-1,{dateType:"__focusedDate",type:"Date"});break;case"ArrowRight":this.__modifyDate(1,{dateType:"__focusedDate",type:"Date"});break;case"PageDown":e.altKey===!0?this.__modifyDate(1,{dateType:"__focusedDate",type:"FullYear"}):this.__modifyDate(1,{dateType:"__focusedDate",type:"Month"});break;case"PageUp":e.altKey===!0?this.__modifyDate(-1,{dateType:"__focusedDate",type:"FullYear"}):this.__modifyDate(-1,{dateType:"__focusedDate",type:"Month"});break;case"Tab":this.__focusedDate=null;break}}__modifyDate(e,{dateType:a,type:t}){let s=new Date(this.centralDate);if(t!=="Date"&&s.setDate(1),s[`set${t}`](s[`get${t}`]()+e),t!=="Date"){let i=new Date(s.getFullYear(),s.getMonth()+1,0).getDate();s.setDate(Math.min(this.centralDate.getDate(),i))}this[a]=s}__getLocale(){return this.locale||this._localizeManager.locale}};export{p as a,N as b};
