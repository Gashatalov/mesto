//Блок редактировать профиль
const editButton = document.querySelector(".profile__edit-button");
const userName = document.querySelector(".profile__name");
const userWork = document.querySelector(".profile__work");
const userFormName = document.getElementById("user-form-name");
const userFormWork = document.getElementById("user-form-work");
const editForm = document.getElementById("edit-form");
const popupEdit = document.querySelector(".popup-edit");
const closePopupEdit = document.getElementById("close-button-popup-edit");

// Блок добавления фото
const addButton = document.querySelector(".profile__add-button");
const popupAddImg = document.querySelector(".popup-add-image");
const popupImage = document.querySelector(".image-popup");
const closeButtonAddImage = document.getElementById("close-popup-add-image");
const closeImagePopupButton = document.querySelector(".image-popup__close");

// Функция создания карточек
const cardsList = document.querySelector(".elements__cards");
const cardTemplate = document.getElementById("card-template");
const addImageForm = document.getElementById("add-image");
const userImageName = document.getElementById("image-name");
const userImageSrc = document.getElementById("image-src");
const cardImage = document.querySelector(".image-popup__image");
const cardImageTitle = document.querySelector(".image-popup__header");

const escKeyCode = 27;

//Закрытие попапа по клику на ESC
function handleEscClose(e) {
  if (e.keyCode === escKeyCode) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

// Единые функции открытия и закрытия попапов
function openPopup(popupType) {
  popupType.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscClose);
}

function closePopup(popupType) {
  popupType.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscClose);
}

// Ждем клик по крестику для закрытия попапа редактирования профиля
closePopupEdit.addEventListener("click", function () {
  closePopup(popupEdit);
});

// Вставка данных пользователя в поля формы
function fillForm() {
  userFormName.setAttribute("value", userName.textContent);
  userFormWork.setAttribute("value", userWork.textContent);
}

// Единая фукнция при клике на кнопку редактирования профиля
function openPopupFillForm() {
  fillForm();
  openPopup(popupEdit);
  const buttonSave = popupEdit.querySelector(".popup__button");
  const inputList = [userFormName, userFormWork];
  toggleButtonState(buttonSave, inputList, configValidation);
}

// Ждем клик по кнопке edit
editButton.addEventListener("click", function () {
  openPopupFillForm();
});

// Сохранение данных пользователя
function saveUserInfo(evt) {
  userName.textContent = userFormName.value;
  userWork.textContent = userFormWork.value;
}

// Единая фукнция при клике на кнопку сохранить
function saveFormClosePopup(evt) {
  evt.preventDefault();
  saveUserInfo();
  closePopup(popupEdit);
}

// Ждем клик по кнопке "сохранить" в форме редактировать профиль
editForm.addEventListener("submit", saveFormClosePopup);

// Ждем клик по кнопке добавить изображение
addButton.addEventListener("click", function () {
  openPopup(popupAddImg);
});

// Ждем клик по кнопке закрытия попапа добавления изображения
closeButtonAddImage.addEventListener("click", function () {
  closePopup(popupAddImg);
});

// Добавление карточек при закгрузке страницы
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//Ждем клик по крестику для закрытия попапа картинки
closeImagePopupButton.addEventListener("click", function () {
  closePopup(popupImage);
});

// Удаление карточки
function removeCard(e) {
  e.target.closest(".elements__card").remove();
}
// Лайк
function likeCard(e) {
  e.target.classList.toggle("elements__like_active");
}

// Открытие попапа с картинкой
function openImagePopup(link, name) {
  cardImage.src = link;
  cardImage.alt = name;
  cardImageTitle.textContent = name;
  openPopup(popupImage);
}

// Создание карточки
function createCard(card) {
  const newCard = cardTemplate.content
    .querySelector(".elements__card")
    .cloneNode(true);
  const cardRemoveButton = newCard.querySelector(".elements__trash");
  const likeButton = newCard.querySelector(".elements__like");
  const imagePopupOpen = newCard.querySelector(".elements__image");
  newCard.querySelector(".elements__header").textContent = card.name;
  imagePopupOpen.src = card.link;
  imagePopupOpen.alt = card.name;

  // Ждем клик по кнопке удалить
  cardRemoveButton.addEventListener("click", removeCard);

  // Ждем клик по кнопке лайк
  likeButton.addEventListener("click", likeCard);

  // Ждем клик по картинке для открытия попапа
  imagePopupOpen.addEventListener("click", function () {
    openImagePopup(card.link, card.name);
  });

  return newCard;
}

//Функция добавления карточек
function addCardList(newCard) {
  const elementItem = createCard(newCard);
  cardsList.prepend(elementItem);
}

// Создание карточек из массива
initialCards.forEach(function (card) {
  addCardList(card);
});

// Добавление карточки пользователем
function addUserImage(evt) {
  evt.preventDefault();
  // получаем данные пользователя
  const userCard = {
    name: `${userImageName.value}`,
    link: `${userImageSrc.value}`,
  };
  addCardList(userCard);
}

function addCardClosePopup(evt) {
  addUserImage(evt);
  closePopup(popupAddImg);
}

addImageForm.addEventListener("submit", addCardClosePopup);

// Закрытие попапов при клике по фону
function closePopupOverlayClick(popupType, event) {
  if (event.target === event.currentTarget) {
    closePopup(popupType);
  }
}

popupAddImg.addEventListener("click", function () {
  closePopupOverlayClick(popupAddImg, event);
});
popupEdit.addEventListener("click", function () {
  closePopupOverlayClick(popupEdit, event);
});
popupImage.addEventListener("click", function () {
  closePopupOverlayClick(popupImage, event);
});

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
