export const editbutton = document.querySelector(".profile__edit-button");
export const addCardButton = document.querySelector(".profile__add-button");
export const popupProfile = document.querySelector(".popup_profile");
export const popupNewCard = document.querySelector(".popup_card");
export const popupImage = document.querySelector("#popupopenimage");
export const closeButtons = document.querySelectorAll(".popup__close");
export const nameNode = document.querySelector(".profile__name");
export const aboutNode = document.querySelector(".profile__about");
export const inputNameNode = document.querySelector(".form__input_name");
export const inputAboutNode = document.querySelector(".form__input_about");
export const formProfile = document.querySelector(".form_profile");
export const formAddElement = document.querySelector(".form_element");
export const inputNameElementNode =
  formAddElement.querySelector(".form__input_name");
export const inputLinkElementNode =
  formAddElement.querySelector(".form__input_link");
export const elementsArea = document.querySelector(".elements");
export const overlays = document.querySelectorAll(".popup__overlay");
export const template = document.querySelector(".template");

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

export function openImagePopup(link, name) {
  const imgPop = popupImage.querySelector(".popup__image");
  const imgTitle = popupImage.querySelector(".popup__subtitle");
  imgPop.src = link;
  imgPop.alt = name;
  imgTitle.textContent = name;
  popupImage.classList.add("popup_show");
}

export function handleEscPress(event) {
  if (event.key === "Escape") {
    closePopups();
  }
}

export function openPopup(popup) {
  popup.classList.add("popup_show");
  document.addEventListener("keydown", handleEscPress);
}

export function closePopups() {
  document.querySelectorAll('.popup').forEach(popup => {
    popup.classList.remove("popup_show");
  });
  document.removeEventListener("keydown", handleEscPress);
}

export const formConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};
