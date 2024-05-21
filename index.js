const editbutton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('.popup_profile');
const popupNewCard = document.querySelector('.popup_card');
const closeButtons = document.querySelectorAll('.popup__close');
const nameNode = document.querySelector('.profile__name');
const aboutNode = document.querySelector('.profile__about');
const inputNameNode = document.querySelector('.form__input_name')
const inputAboutNode = document.querySelector('.form__input_about');
const formProfile = document.querySelector('.form_profile');



function openPopup(popup){
    popup.classList.add('popup_show');
}

function closePopups(){
    popupNewCard.classList.remove('popup_show');
    popupProfile.classList.remove('popup_show');
}

editbutton.addEventListener('click', () => {
    openPopup(popupProfile);
    inputNameNode.value = nameNode.textContent;
    inputAboutNode.value = aboutNode.textContent;
})

addCardButton.addEventListener('click', () => {
    openPopup(popupNewCard)
})

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        closePopups();
    })
})

formProfile.addEventListener('submit', (event) =>{
    event.preventDefault(); 
    if(inputNameNode.value && inputAboutNode.value){
        nameNode.textContent = inputNameNode.value;
        aboutNode.textContent = inputAboutNode.value;
        closePopups();
        formProfile.reset();
    }    
})