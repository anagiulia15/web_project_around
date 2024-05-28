const editbutton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const popupProfile = document.querySelector(".popup_profile");
const popupNewCard = document.querySelector(".popup_card");
const popupImage = document.querySelector(".popup_image");
const closeButtons = document.querySelectorAll(".popup__close");
const nameNode = document.querySelector(".profile__name");
const aboutNode = document.querySelector(".profile__about");
const inputNameNode = document.querySelector(".form__input_name");
const inputAboutNode = document.querySelector(".form__input_about");
const formProfile = document.querySelector(".form_profile");
const formAddElement = document.querySelector(".form_element");
const inputNameElementNode = formAddElement.querySelector(".form__input_name");
const inputLinkElementNode = formAddElement.querySelector(".form__input_link");
const elementsArea = document.querySelector('.elements');

const initialCards = [
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

function createElement(name, link){
    const template = document.querySelector('.template');
    const nodeElement = template.content.querySelector('.element').cloneNode(true);
    nodeElement.querySelector('.element__image').src = link;
    nodeElement.querySelector('.element__name').textContent = name;

    nodeElement.querySelector('.element__heart').addEventListener('click', () => {
        nodeElement.querySelector('.element__heart').classList.toggle('element__heart_active');
    })

    nodeElement.querySelector('.element__trash').addEventListener('click', () => {
        nodeElement.querySelector('.element__trash').closest('.element').remove();
    })

    nodeElement.querySelector('.element__image').addEventListener('click', () => {
        openPopup(popupImage);
        popupImage.querySelector('.popup__image').src = link;
        popupImage.querySelector('.popup__image').alt = `FOTO DE ${name}`;
        popupImage.querySelector('.popup__subtitle').textContent = name;

    })

    return nodeElement;
}

function openPopup(popup) {
  popup.classList.add("popup_show");
}

function closePopups() {
  popupNewCard.classList.remove("popup_show");
  popupProfile.classList.remove("popup_show");
  popupImage.classList.remove("popup_show");
}

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

formAddElement.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputNameElementNode.value && inputLinkElementNode.value) {
        const element = createElement(inputNameElementNode.value, inputLinkElementNode.value);
        elementsArea.prepend(element);
        closePopups();
        formAddElement.reset();
    }
})

initialCards.forEach(item => {
    const element = createElement(item.name, item.link);
    elementsArea.append(element);
})