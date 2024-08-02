export default class FormValidator {
  constructor(formConfig, form) {
    this._formElement = form;
    this._formConfig = formConfig;
  }

  _showInputError(formElement, inputElement, errorMessage, formConfig) {
    const errorElement = formElement.querySelector(
      `.form__error_${inputElement.name}`
    );
    inputElement.classList.add(formConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(formConfig.errorClass);
  }

  _hideInputError(formElement, inputElement, formConfig) {
    const errorElement = formElement.querySelector(
      `.form__error_${inputElement.name}`
    );
    inputElement.classList.remove(formConfig.inputErrorClas);
    errorElement.classList.remove(formConfig.errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(formElement, inputElement, formConfig) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        formConfig
      );
    } else {
      this._hideInputError(formElement, inputElement, formConfig);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement, formConfig) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(formConfig.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(formConfig.inactiveButtonClass);
    }
  }

  _setEventListeners(formElement, formConfig) {
    const inputList = Array.from(
      formElement.querySelectorAll(formConfig.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      formConfig.submitButtonSelector
    );

    this._toggleButtonState(inputList, buttonElement, formConfig);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input",  () =>  {
        this._checkInputValidity(formElement, inputElement, formConfig);
        this._toggleButtonState(inputList, buttonElement, formConfig);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    this._setEventListeners(this._formElement, this._formConfig);
  }
}
