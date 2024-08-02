import {template } from "./utils.js";
export default class Card {
  constructor(name, link,handleCardClick) {
    this._name = name
    this._link = link
    this._card = this.getTemplate();
    this._handleCardClick=handleCardClick;
  }

  getTemplate() {
    return template.cloneNode(true).content.querySelector(".element");
  }

  setProperties() {
    this._cardImage = this._card.querySelector(".element__image");
    this._cardTitle = this._card.querySelector(".element__name");
    this._btnDelete = this._card.querySelector(".element__trash");
    this._btnLike = this._card.querySelector(".element__heart");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
  }

  generatorCard() {
    this.getTemplate();
    this.setProperties();
    this.handleEvents();
    return this._card;
  }

  handlelike() {
    this._btnLike.classList.toggle("element__heart_active");
  }

  handleDislike() {
    this._btnLike.classList.remove("element__heart_active");
  }

  handleDelete() {
    this._card.remove();
  }

  handleEvents() {
    this._btnLike.addEventListener("click", () => {
      this.handlelike();
    });

    this._btnDelete.addEventListener("click", () => {
      this.handleDelete();
    });

    this._cardImage.addEventListener("click", () => {
    this._handleCardClick();
    });
  }  
}
