export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
    this.popup = document.querySelector(popupSelector);
    this.setEventListeners();
  }

  open() {
    this.popup.classList.add("popup_show");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this.popup.classList.remove("popup_show");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const overlay = this.popup.querySelector(".popup__overlay");
    const button = this.popup.querySelector(".popup__close");

    overlay.addEventListener("click", () => {
      this.close();
    });

    button.addEventListener("click", () => {
      this.close();
    });
  }
}
