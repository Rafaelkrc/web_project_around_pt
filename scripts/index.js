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

function getCardElement(name, link) {
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
  resetValidation(editProfileForm);
  openModalFunction(openModal);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  handleCloseModal();
}

function handleOpenEditModalCard() {
  newCardForm.reset(); // limpa os inputs

  resetValidation(newCardForm);
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

//Validação do Formulário
function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error_visible");
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__error_visible");
  errorElement.textContent = "";
}

function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add("popup__button_disabled");
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("popup__button_disabled");
  }
}

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
}

enableValidation();

// Fechar popup fora do conteúdo
function handleOverlayClick(evt) {
  if (evt.target.classList.contains("popup")) {
    evt.target.classList.remove("popup_is-opened");
  }
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");

    if (openedPopup) {
      openedPopup.classList.remove("popup_is-opened");
    }
  }
}
document.addEventListener("keydown", handleEscClose);
const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", handleOverlayClick);
});

function resetValidation(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");

  inputList.forEach((inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove("popup__input_type_error");
    errorElement.textContent = "";
    errorElement.classList.remove("popup__error_visible");
  });

  buttonElement.disabled = true;
  buttonElement.classList.add("popup__button_disabled");
}
