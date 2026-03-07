initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

initialCards.forEach(function (cards) {
  console.log(cards);
});

const editProfile = document.querySelector(".profile__edit-button");
const openModal = document.querySelector("#edit-popup");
const closeModal = openModal.querySelector(".popup__close");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const nameInput = openModal.querySelector(".popup__input_type_name");
const descriptionInput = openModal.querySelector(
  ".popup__input_type_description",
);

const editProfileForm = openModal.querySelector("#edit-profile-form");

const templateCard = document.querySelector("#card").content;
const cardsList = document.querySelector(".cards__list");

const profileAddButton = document.querySelector(".profile__add-button");
const cardTitle = document.querySelector(".card__title");
const cardImg = document.querySelector("card__image");
const titleCardInput = document.querySelector(".popup__input_type_card-name");
const imgCardUrl = document.querySelector(".popup__input_type_url");
const openModalCard = document.querySelector("#new-card-popup");
const closeModalCard = openModalCard.querySelector(".popup__close");
const newCardForm = openModalCard.querySelector("#new-card-form");
const openImg = document.querySelector("#image-popup");
const popupImg = openImg.querySelector(".popup__image");
const popupCaption = openImg.querySelector(".popup__caption");
const closeImagePopup = openImg.querySelector(".popup__close");

editProfile.addEventListener("click", handleOpenEditModal);
closeModal.addEventListener("click", handleCloseModal);
editProfileForm.addEventListener("submit", handleProfileFormSubmit);
profileAddButton.addEventListener("click", handleOpenEditModalCard);
closeModalCard.addEventListener("click", handleCloseEditModalCard);
newCardForm.addEventListener("submit", handleCardFormSubmit);

function getCardElement(
  name = "Lugar sem nome",
  link = "./images/placeholder.jpg",
) {
  const cardElement = templateCard.querySelector(".card").cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = name;
  const cardImg = cardElement.querySelector(".card__image");
  cardImg.src = link;
  cardImg.alt = name;
  const likeCard = cardElement.querySelector(".card__like-button");
  likeCard.addEventListener("click", function () {
    likeCard.classList.add("card__like-button_is-active");
  });

  const cardRemove = cardElement.querySelector(".card__delete-button");
  cardRemove.addEventListener("click", function () {
    cardElement.remove();
  });

  cardImg.addEventListener("click", function () {
    popupImg.src = link;
    popupImg.alt = name;
    popupCaption.textContent = name;

    closeImagePopup.addEventListener("click", function () {
      openImg.classList.remove("popup_is-opened");
    });
    openModalFunction(openImg);
  });

  return cardElement;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.prepend(cardElement);
}

initialCards.forEach(function (card) {
  renderCard(card.name, card.link, cardsList);
});

function openModalFunction(modal) {
  modal.classList.add("popup_is-opened");
}

function handleCloseModal() {
  openModal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModalFunction(openModal);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  handleCloseModal();
}

function handleOpenEditModalCard() {
  openModalFunction(openModalCard);
}

function handleCloseEditModalCard() {
  openModalCard.classList.remove("popup_is-opened");
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(titleCardInput.value, imgCardUrl.value, cardsList);
  newCardForm.reset();

  handleCloseEditModalCard();
}
