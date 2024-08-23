
import "./index.css";
import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import {
  openPopup,
  inputAboutNode,
  inputNameNode,
  closePopups,
  formProfile,
  nameNode,
  aboutNode,
  formAddElement,
  inputLinkElementNode,
  inputNameElementNode,
  initialCards,
  editbutton,
  addCardButton,
  closeButtons,
  formConfig,
  elementsArea,
  overlays,
  popupNewCard,
  openImagePopup
} from "./scripts/utils.js";
import Userinfo from "./scripts/Userinfo.js";
import Section from "./scripts/Section.js"
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupwithImage.js";
import api from "./scripts/api.js";

const userInfo = new Userinfo('.profile__name', '.profile__about');
const avatarNode = document.querySelector('.profile__avatar');
let section = null;
let currentUser = null;

api.getUserinfo().then(user => {
  currentUser = user;
  userInfo.setUserInfo(user.name, user.about);
  avatarNode.src = user.avatar;
  return api.getCards();
}).then(cards => {
  section = new Section({
    data: cards, 
    renderer: item => {
      const element = new Card(item.name, item.link, () => {
       item.name,
       item.link,
       item,
       currentUser,
       ()=>{
        popupImage.open(item.name,item.link);
       ],
       (cardId) =>{
        return api.deleteCard(cardId
        ], 
        )
      });
      const newCard = element.generatorCard();
      section.setItem(newCard);
    }
  },'.elements' );
  section.renderItems();
})

const formValidatorProfile=new FormValidator(formConfig, formProfile);
const formValidatorAddElement=new FormValidator(formConfig, formAddElement);

const popupProfile = new PopupWithForm('.popup_profile', ({name, about}) => {
  api.updateUser(name, about).then((user) => {
    userInfo.setUserInfo(user.name, user.about);
  });
})

const popupAddCard = new PopupWithForm('.popup_card', ({name, link}) => {
  api.storeCard(name, link).then((card) => {
    const element = new Card(name, link, () => {
      popupImage.open(item.name,item.link)   
    });
    const newCard = element.generatorCard();
    elementsArea.prepend(newCard);
  });
})
const popupImage=new PopupWithImage('popupopenimage');

editbutton.addEventListener("click", () => {
  popupProfile.open();
});
formValidatorProfile.enableValidation()
formValidatorAddElement.enableValidation()

addCardButton.addEventListener("click", () => {
  popupAddCard.open();
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closePopups();
  });
});

formProfile.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputNameNode.value && inputAboutNode.value) {
    nameNode.textContent = inputNameNode.value;
    aboutNode.textContent = inputAboutNode.value;
    closePopups();
    formProfile.reset();
  }
});

formAddElement.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputNameElementNode.value && inputLinkElementNode.value) {
    const element = new Card(
      inputNameElementNode.value,
      inputLinkElementNode.value, () => {
        openImagePopup(item.name, item.link)
      }
    );
    const newCard = element.generatorCard();
    elementsArea.prepend(newCard);
    closePopups();
    formAddElement.reset();
  }
});

/*
initialCards.forEach((item) => {
  const element = new Card(item.name, item.link, () => {
    openImagePopup(item.name, item.link)
  });
  const newCard = element.generatorCard();
  elementsArea.append(newCard);
});
*/
/*
overlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    closePopups();
  });
});

*/
formValidatorProfile.enableValidation()
formValidatorAddElement.enableValidation()