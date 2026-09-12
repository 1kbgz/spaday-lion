import"../../../../../../../chunks/chunk-QRJP623D.js";import"../../../../../../../chunks/chunk-GBTDAY7H.js";import"../../../../../../../chunks/chunk-EQAXS5KL.js";import"../../../../../../../chunks/chunk-UNVR33PJ.js";import"../../../../../../../chunks/chunk-NY4564DG.js";import"../../../../../../../chunks/chunk-XXFKTU6O.js";import"../../../../../../../chunks/chunk-J4J4ZRYG.js";import"../../../../../../../chunks/chunk-TE2JQMEO.js";import"../../../../../../../chunks/chunk-NAZQDWW4.js";import"../../../../../../../chunks/chunk-3FLG2RCD.js";import"../../../../../../../chunks/chunk-INXFIC65.js";import"../../../../../../../chunks/chunk-AO6WF3QW.js";import"../../../../../../../chunks/chunk-VTXRNBM3.js";import"../../../../../../../chunks/chunk-SE4KL3Y3.js";import"../../../../../../../chunks/chunk-RUY33WIS.js";import"../../../../../../../chunks/chunk-2RQUFVYT.js";import"../../../../../../../chunks/chunk-P6MAAE2Y.js";import"../../../../../../../chunks/chunk-N4SGLO6O.js";import"../../../../../../../chunks/chunk-LZQLJU6K.js";import"../../../../../../../chunks/chunk-7CCH34WU.js";import"../../../../../../../chunks/chunk-E57LZUIU.js";import"../../../../../../../chunks/chunk-KUQDXRGA.js";import"../../../../../../../chunks/chunk-BFLGHUXU.js";import"../../../../../../../chunks/chunk-FI5CQNTJ.js";import"../../../../../../../chunks/chunk-BKLT73JL.js";import"../../../../../../../chunks/chunk-QKO3X2TN.js";import"../../../../../../../chunks/chunk-VQ6EG5L2.js";import"../../../../../../../chunks/chunk-QFMB63EV.js";import"../../../../../../../chunks/chunk-42IMG2OW.js";import"../../../../../../../chunks/chunk-2RIUOT5J.js";import"../../../../../../../chunks/chunk-4N4NIW6N.js";import"../../../../../../../chunks/chunk-HFPJEK3S.js";import"../../../../../../../chunks/chunk-QJ5JBX4H.js";import"../../../../../../../chunks/chunk-5Z52B7IE.js";import"../../../../../../../chunks/chunk-DYNWFY2C.js";import"../../../../../../../chunks/chunk-55HWW5UK.js";import"../../../../../../../chunks/chunk-E7IO7NYJ.js";import"../../../../../../../chunks/chunk-G2R74RDP.js";import"../../../../../../../chunks/chunk-BFVYUUFI.js";import"../../../../../../../chunks/chunk-MFBNIFRI.js";import"../../../../../../../chunks/chunk-XFV4G2SX.js";import"../../../../../../../chunks/chunk-TCJO2LYM.js";import"../../../../../../../chunks/chunk-GUORAR37.js";import"../../../../../../../chunks/chunk-XHF4G5V5.js";import"../../../../../../../chunks/chunk-DC6KWIYV.js";import"../../../../../../../chunks/chunk-JI4JQMWL.js";import"../../../../../../../chunks/chunk-2TELIGH7.js";import"../../../../../../../chunks/chunk-4AGXGNB7.js";import"../../../../../../../chunks/chunk-W6YAUKAV.js";import"../../../../../../../chunks/chunk-765SGQET.js";import{r as o,u as n}from"../../../../../../../chunks/chunk-EPIRVTM2.js";import"../../../../../../../chunks/chunk-5WT7LR6D.js";import"../../../../../../../chunks/chunk-CHUHNXUY.js";import"../../../../../../../chunks/chunk-RFUIJ2RA.js";import"../../../../../../../chunks/chunk-5G3K6R3U.js";import"../../../../../../../chunks/chunk-DSM4IEUY.js";import"../../../../../../../chunks/chunk-KVEQ5QLL.js";import"../../../../../../../chunks/chunk-JK7PRD3U.js";import"../../../../../../../chunks/chunk-G7OXZUGX.js";import"../../../../../../../chunks/chunk-7ONKQLO6.js";import"../../../../../../../chunks/chunk-GNR73WXY.js";import{d as l}from"../../../../../../../chunks/chunk-TIEK7LWH.js";import{a as i}from"../../../../../../../chunks/chunk-2FELQFK7.js";var e=class extends l{get _lionFormNode(){return this.shadowRoot?.querySelector("lion-form")}render(){return i`
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
