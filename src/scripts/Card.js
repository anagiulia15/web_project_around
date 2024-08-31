export default class Card {
  constructor(    
    cardData,
    user, 
    handleCardClick,
    handleDelete,
    handleAddLike,    
    handleRemoveLike, 
    template
  ) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardData = cardData;
    this._user = user;    
    this._handleCardClick = handleCardClick;
    this._handleDelete = handleDelete;
    this._handleRemoveLike = handleRemoveLike;
    this._handleAddLike = handleAddLike;
    this._template = document.querySelector(template);
    this._card = this.getTemplate();
  }

  getTemplate() {
    return this._template.cloneNode(true).content.querySelector(".element");
  }

  setProperties() {
    this._cardImage = this._card.querySelector(".element__image");
    this._cardTitle = this._card.querySelector(".element__name");
    this._btnDelete = this._card.querySelector(".element__trash");
    this._btnLike = this._card.querySelector(".element__heart");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    if (!this.hasCardOwner()) {
      this._btnDelete.remove();
    }    
    if (this.isLikeOwner()) {
      this._btnLike.classList.add("element__heart_active");      
    }
    this._card.querySelector(".element__counter").textContent =
        this._cardData.likes.length;
  }

  generatorCard() {
    this.getTemplate();
    this.setProperties();
    this.handleEvents();
    return this._card;
  }

  handleEvents() {
    this._btnLike.addEventListener("click", () => {
      if(this.isLikeOwner()){
        this._handleRemoveLike(this._cardData._id).then(cardData => {
          this._cardData = cardData;
          this._btnLike.classList.remove("element__heart_active");    
          this._card.querySelector(".element__counter").textContent =
          this._cardData.likes.length;          
        });
      }else{
        this._handleAddLike(this._cardData._id).then(cardData => {
          this._cardData = cardData;
          this._btnLike.classList.add("element__heart_active");    
          this._card.querySelector(".element__counter").textContent =
          this._cardData.likes.length;
        });
      }
    });

    this._btnDelete.addEventListener("click", () => {
      this._handleDelete(this._cardData._id, () =>{
        this._card.remove()
      })
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  hasCardOwner() {
    return this._cardData.owner._id == this._user._id;
  }

  isLikeOwner() {
    return this._cardData.likes.some((like) => like._id === this._user._id);
  }
}
