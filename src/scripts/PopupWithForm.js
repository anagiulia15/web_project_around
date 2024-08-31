import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor(popupSelector, submitCallback){
        super(popupSelector);
        this.submitCallback = submitCallback;        
    }


    _getInputValues(){
        const form = this.popup.querySelector('form');
        const formInputs = form.querySelectorAll('.form__input');
        const inputValues = {};
        formInputs.forEach(input => {
            if(input.name){
                inputValues[input.name] = input.value;
            }
        })
        return inputValues;        
    }

    setEventListeners(){
        super.setEventListeners();
        const form = this.popup.querySelector('form');
        form.addEventListener('submit', (event)=> {
            event.preventDefault();
            this.submitCallback(this._getInputValues())
        })
    }

    close(){
        super.close();
        const form = this.popup.querySelector('form');
        form.reset();
    }

}