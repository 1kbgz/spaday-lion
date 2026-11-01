import"../../../../../../../chunks/chunk-NR24BKKV.js";import"../../../../../../../chunks/chunk-ZULDMJTJ.js";import"../../../../../../../chunks/chunk-BN4BEIPK.js";import"../../../../../../../chunks/chunk-FKFOO4S4.js";import"../../../../../../../chunks/chunk-XQI3RJIX.js";import"../../../../../../../chunks/chunk-XDBZVGD5.js";import"../../../../../../../chunks/chunk-LZFJGIX5.js";import"../../../../../../../chunks/chunk-V7MIEZC3.js";import"../../../../../../../chunks/chunk-PJAI65DG.js";import"../../../../../../../chunks/chunk-QFEQLKOT.js";import"../../../../../../../chunks/chunk-3M7AIZ7Z.js";import"../../../../../../../chunks/chunk-RNNWRLIY.js";import"../../../../../../../chunks/chunk-MFXV3CZH.js";import"../../../../../../../chunks/chunk-KSTBX3IN.js";import"../../../../../../../chunks/chunk-634FEK4K.js";import"../../../../../../../chunks/chunk-TLA4EMAV.js";import"../../../../../../../chunks/chunk-S36KFDPN.js";import"../../../../../../../chunks/chunk-NNMALYCG.js";import"../../../../../../../chunks/chunk-3FXY6MQT.js";import"../../../../../../../chunks/chunk-Y4FV4LOY.js";import"../../../../../../../chunks/chunk-JNAV56CL.js";import"../../../../../../../chunks/chunk-PY233DOM.js";import"../../../../../../../chunks/chunk-TSMGR6YF.js";import"../../../../../../../chunks/chunk-QR54KGLV.js";import"../../../../../../../chunks/chunk-KF5WK6ZB.js";import"../../../../../../../chunks/chunk-RIYACCXW.js";import"../../../../../../../chunks/chunk-SRQTIXPL.js";import"../../../../../../../chunks/chunk-LWRRUVCH.js";import"../../../../../../../chunks/chunk-XDDBOJQR.js";import"../../../../../../../chunks/chunk-N7HJ24EG.js";import"../../../../../../../chunks/chunk-YLQQRKPC.js";import"../../../../../../../chunks/chunk-B6VNKDZ7.js";import"../../../../../../../chunks/chunk-JJUKAB5D.js";import"../../../../../../../chunks/chunk-Q7QHAMD5.js";import"../../../../../../../chunks/chunk-BG7OF5BZ.js";import"../../../../../../../chunks/chunk-ZIADQI5X.js";import"../../../../../../../chunks/chunk-E7IO7NYJ.js";import"../../../../../../../chunks/chunk-UJBCIS2O.js";import"../../../../../../../chunks/chunk-XGCJ52LF.js";import"../../../../../../../chunks/chunk-YDEDXNLC.js";import"../../../../../../../chunks/chunk-MFUF42AM.js";import"../../../../../../../chunks/chunk-GJ2YTEX2.js";import"../../../../../../../chunks/chunk-UD5G5NDY.js";import"../../../../../../../chunks/chunk-XHF4G5V5.js";import"../../../../../../../chunks/chunk-CZIDCRVK.js";import"../../../../../../../chunks/chunk-SVJBS2SZ.js";import"../../../../../../../chunks/chunk-UXEQWZHJ.js";import"../../../../../../../chunks/chunk-WAA46TDN.js";import"../../../../../../../chunks/chunk-P652YDCE.js";import"../../../../../../../chunks/chunk-7SOX2IXL.js";import{r as o,u as n}from"../../../../../../../chunks/chunk-PULZ3MQ6.js";import"../../../../../../../chunks/chunk-6KBDMRUY.js";import"../../../../../../../chunks/chunk-37KYJJ74.js";import"../../../../../../../chunks/chunk-RFUIJ2RA.js";import"../../../../../../../chunks/chunk-5G3K6R3U.js";import"../../../../../../../chunks/chunk-DSM4IEUY.js";import"../../../../../../../chunks/chunk-X44RUMV6.js";import"../../../../../../../chunks/chunk-JK7PRD3U.js";import"../../../../../../../chunks/chunk-G7OXZUGX.js";import"../../../../../../../chunks/chunk-7ONKQLO6.js";import"../../../../../../../chunks/chunk-GNR73WXY.js";import{d as l}from"../../../../../../../chunks/chunk-TIEK7LWH.js";import{a as i}from"../../../../../../../chunks/chunk-2FELQFK7.js";var e=class extends l{get _lionFormNode(){return this.shadowRoot?.querySelector("lion-form")}render(){return i`
      <lion-form>
        <form>
          <lion-fieldset name="fullName">
            <lion-input
              name="firstName"
              label="First Name"
              .validators="${[new o]}"
            ></lion-input>
            <lion-input
              name="lastName"
              label="Last Name"
              .validators="${[new o]}"
            ></lion-input>
          </lion-fieldset>
          <lion-input-date
            name="date"
            label="Date of application"
            .modelValue="${new Date("2000/12/12")}"
            .validators="${[new o]}"
          ></lion-input-date>
          <lion-input-datepicker
            name="datepicker"
            label="Date to be picked"
            .modelValue="${new Date("2020/12/12")}"
            .validators="${[new o]}"
          ></lion-input-datepicker>
          <lion-textarea
            name="bio"
            label="Biography"
            .validators="${[new o,new n(10)]}"
            help-text="Please enter at least 10 characters"
          ></lion-textarea>
          <lion-input-amount name="money" label="Money"></lion-input-amount>
          <lion-input-iban name="iban" label="Iban"></lion-input-iban>
          <lion-input-email name="email" label="Email"></lion-input-email>
          <lion-input-tel name="tel" label="Telephone Number"></lion-input-tel>
          <lion-input-tel-dropdown
            name="tel-dropdown"
            label="Telephone Number with dropdown list"
          ></lion-input-tel-dropdown>
          <lion-checkbox-group
            label="What do you like?"
            name="checkers"
            .validators="${[new o]}"
          >
            <lion-checkbox .choiceValue="${"foo"}" checked label="I like foo"></lion-checkbox>
            <lion-checkbox .choiceValue="${"bar"}" checked label="I like bar"></lion-checkbox>
            <lion-checkbox .choiceValue="${"baz"}" label="I like baz"></lion-checkbox>
          </lion-checkbox-group>
          <lion-radio-group
            name="dinosaurs"
            label="Favorite dinosaur"
            .validators="${[new o]}"
          >
            <lion-radio .choiceValue="${"allosaurus"}" label="allosaurus"></lion-radio>
            <lion-radio .choiceValue="${"brontosaurus"}" checked label="brontosaurus"></lion-radio>
            <lion-radio .choiceValue="${"diplodocus"}" label="diplodocus"></lion-radio>
          </lion-radio-group>
          <lion-select-rich name="favoriteColor" label="Favorite color">
            <lion-options slot="input">
              <lion-option .choiceValue="${"red"}">Red</lion-option>
              <lion-option .choiceValue="${"hotpink"}" checked>Hotpink</lion-option>
              <lion-option .choiceValue="${"teal"}">Teal</lion-option>
            </lion-options>
          </lion-select-rich>
          <lion-select label="Lyrics" name="lyrics" .validators="${[new o]}">
            <select slot="input">
              <option value="1">Fire up that loud</option>
              <option value="2">Another round of shots...</option>
              <option value="3">Drop down for what?</option>
            </select>
          </lion-select>
          <lion-input-range
            name="range"
            min="1"
            max="5"
            .modelValue="${2.3}"
            unit="%"
            step="0.1"
            label="Input range"
          >
          </lion-input-range>
          <lion-checkbox-group name="terms" .validators="${[new o]}">
            <lion-checkbox label="I blindly accept all terms and conditions"></lion-checkbox>
          </lion-checkbox-group>
          <lion-textarea name="comments" label="Comments"></lion-textarea>
          <div class="buttons">
            <lion-button raised>Submit</lion-button>
            <lion-button
              type="button"
              raised
              @click=${()=>{this._lionFormNode.resetGroup()}}
              >Reset</lion-button
            >
          </div>
        </form>
      </lion-form>
    `}};customElements.define("umbrella-form",e);export{e as UmbrellaForm};
