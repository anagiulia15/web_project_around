import Api from "../api.js";
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

import api from "../api.js";

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
        openImagePopup(item.name, item.link)
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
    const element = new Card(item.name, item.link, () => {
      openImagePopup(card.name, card.link)
    });
    const newCard = element.generatorCard();
    append
  });
})

/*
editbutton.addEventListener("click", () => {
  openPopup(popupProfile);
  inputNameNode.value = nameNode.textContent;
  inputAboutNode.value = aboutNode.textContent;
});

addCardButton.addEventListener("click", () => {
  openPopup(popupNewCard);
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
*/
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