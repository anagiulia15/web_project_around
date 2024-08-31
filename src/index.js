import "./index.css";
import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import {
  formProfile,
  formAddElement,
  editbutton,
  formConfig,
  elementsArea,
  avatarButton,
  addCardButton,
} from "./scripts/utils.js";
import Userinfo from "./scripts/Userinfo.js";
import Section from "./scripts/Section.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupwithImage.js";
import PopupWithConfirmation from "./scripts/PopupWithConfirmation.js";
import api from "./scripts/api.js";

const userInfo = new Userinfo(".profile__name", ".profile__about");
const avatarNode = document.querySelector(".profile__avatar");
let section = null;
let currentUser = null;

api
  .getUserinfo()
  .then((user) => {
    currentUser = user;
    userInfo.setUserInfo(user.name, user.about);
    avatarNode.src = user.avatar;
    return api.getCards();
  })
  .then((cards) => {
    section = new Section(
      {
        data: cards,
        renderer: (item) => {
          const element = new Card(
            item,
            currentUser,
            () => {
              popupImage.open(item.name, item.link);
            },
            (cardId, callback) => {
              popupConfirmation.open(() => {
                api.deleteCard(cardId).then(() => {
                  callback();
                  popupConfirmation.close();
                });
              });
            },
            (cardId) => {
              return api.addLike(cardId);
            },
            (cardId) => {
              return api.removeLike(cardId);
            },
            ".template"
          );
          const newCard = element.generatorCard();
          elementsArea.prepend(newCard);
          popupAddCard.close();
        },
      },
      ".elements"
    );
    section.renderItems();
  });

const formValidatorProfile = new FormValidator(formConfig, formProfile);
const formValidatorAddElement = new FormValidator(formConfig, formAddElement);
const formValidatorAvatar = new FormValidator(formConfig, formAddElement);

const popupProfile = new PopupWithForm(".popup_profile", ({ name, about }) => {
  api.updateUser(name, about).then((user) => {
    userInfo.setUserInfo(user.name, user.about);
    popupProfile.close();
  });
});

const popupAddCard = new PopupWithForm(".popup_card", ({ name, link }) => {
  api.storeCard(name, link).then((card) => {
    const element = new Card(
      card,
      currentUser,
      () => {
        popupImage.open(card.name, card.link);
      },
      (cardId, callback) => {
        popupConfirmation.open(() => {
          api.deleteCard(cardId).then(() => {
            callback();
            popupConfirmation.close();
          });
        });
      },
      (cardId) => {
        return api.addLike(cardId);
      },
      (cardId) => {
        return api.removeLike(cardId);
      },
      ".template"
    );
    const newCard = element.generatorCard();
    elementsArea.prepend(newCard);
    popupAddCard.close();
  });
});
const popupImage = new PopupWithImage("#popupopenimage");
const popupConfirmation = new PopupWithConfirmation(".popup_confirmation");
const popupAvatar = new PopupWithForm(".popup_avatar", ({ avatar }) => {
  api.updateAvatar(avatar).then(() => {});
  document.querySelector(".profile_avatar").src = avatar;
});
editbutton.addEventListener("click", () => {
  popupProfile.open();
});
addCardButton.addEventListener("click", () => {
  popupAddCard.open();
});
formValidatorProfile.enableValidation();
formValidatorAddElement.enableValidation();

avatarButton.addEventListener("click", () => {
  popupAvatar.open();
});

formValidatorProfile.enableValidation();
formValidatorAddElement.enableValidation();
formValidatorAvatar.enableValidation();
