import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(handleSubmit) {
    super.open();
    this.submitCallback = handleSubmit;
  }
  setEventListeners() {
    super.setEventListeners();
    this.form = this.popup.querySelector("form");
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.submitCallback();
    });
  }
}
