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
  popupProfile,
  openImagePopup
} from "./scripts/utils.js";

const formValidatorProfile=new FormValidator(formConfig, formProfile);
const formValidatorAddElement=new FormValidator(formConfig, formAddElement);

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

initialCards.forEach((item) => {
  const element = new Card(item.name, item.link, () => {
    openImagePopup(item.name, item.link)
  });
  const newCard = element.generatorCard();
  elementsArea.append(newCard);
});

overlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    closePopups();
  });
});


formValidatorProfile.enableValidation()
formValidatorAddElement.enableValidation()