import  Popup  from "./Popup";

export default class PopupWithImage extends Popup {
    
    constructor(popupSelector){
        super(popupSelector);        
    }
 
    open(name, link){
        super.open();        
        const imageNode = this.popup.querySelector(".popup__image")
        const subtitleNode= this.popup.querySelector(".popup__subtitle")
        imageNode.src = link;
        subtitleNode.textContent= name;
        imageNode.alt = name;
    }
}