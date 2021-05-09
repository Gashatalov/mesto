// открытие попапа
const editButton = document.querySelector('.profile__edit-button');

function openPopup() {
  const popupWindow = document.querySelector('.popup').classList;
  popupWindow.add('popup_opened');
}

function fillForm() {
  // вставка данных пользователя в поля формы
const userName = document.querySelector('.profile__name');
const userWork = document.querySelector('.profile__work');

const userFormName = document.querySelectorAll('.popup__input-text')[0];
const userFormWork = document.querySelectorAll('.popup__input-text')[1];

  userFormName.setAttribute('value', userName.textContent);
  userFormWork.setAttribute('value', userWork.textContent);
}

// Единая фукнция при клике на кнопку
function openPopupFillForm() {
  openPopup();
  fillForm();
}

// ждем клик по кнопке edit
editButton.addEventListener('click', openPopupFillForm);

// Закрытие попапа
const closeButton = document.querySelector('.popup__close');

function closePopup() {
  const popupWindow = document.querySelector('.popup').classList;
  popupWindow.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

// Сохранение данных пользователя

const submitForm = document.querySelector('.popup__form');

function saveUserInfo (evt) {

  evt.preventDefault();
  const userName = document.querySelector('.profile__name');
  const userWork = document.querySelector('.profile__work');

  const userFormName = document.querySelectorAll('.popup__input-text')[0];
  const userFormWork = document.querySelectorAll('.popup__input-text')[1];

  userName.textContent = userFormName.value;
  userWork.textContent =  userFormWork.value;
}

function closePopup() {

  const popupWindow = document.querySelector('.popup').classList;
  popupWindow.remove('popup_opened');


}

function saveFormClosePopup(evt) {
  saveUserInfo(evt);
  closePopup();
}

// ждем клик по кнопке "сохранить"
submitForm.addEventListener('submit', saveFormClosePopup);



// Открытие попапа добавления изображения
const addButton = document.querySelector('.profile__add-button');

function openPopupAddImage() {
  const popupWindow = document.querySelector('.popup-add-image').classList;
  popupWindow.add('popup_opened');
}

// Ждем клик по кнопке добавить изображение
addButton.addEventListener('click', openPopupAddImage);

// Закрытие попапа доавления изобржения
const closeButtonAddImage = document.getElementById('close_popup-add-image');

function closePopupAddImage() {
  const popupWindow = document.querySelector('.popup-add-image').classList;
  popupWindow.remove('popup_opened');
}

closeButtonAddImage.addEventListener('click', closePopupAddImage);

// Добавление карточек при закгрузке страницы
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



// Функция создания карточек
const cardsList = document.querySelector('.elements__cards');
const cardTemplate = document.getElementById('card-template');

function createCard(card) {


  // Функция удаления карточки
  function removeCard(e) {
    e.target.closest('.elements__card').remove();
  }
  function likeCard() {
    likeButton.classList.toggle('elements__like_active');
  }


  function closeImagePopup() {
    imagePopup.classList.remove('popup_opened');
  }
    const closeImagePopupButton = document.querySelector('.image-popup__close');


//Ждем клик по крестику для закрытия попапа картинки
closeImagePopupButton.addEventListener('click', closeImagePopup);


  function openImagePopup() {
    imagePopup.classList.toggle('popup_opened');
    document.querySelector('.image-popup__image').src = card.link;
    document.querySelector('.image-popup__image').alt = card.name;
    document.querySelector('.image-popup__header').textContent = card.name;
   }

  const newCard = cardTemplate.content.querySelector('.elements__card').cloneNode(true);

  newCard.querySelector('.elements__header').textContent = card.name;
  newCard.querySelector('.elements__image').src = card.link;
  newCard.querySelector('.elements__image').alt = card.name;


  const cardRemoveButton = newCard.querySelector('.elements__trash');
  const likeButton = newCard.querySelector('.elements__like');
  const imagePopupOpen = newCard.querySelector('.elements__image');
  const imagePopup = document.querySelector('.image-popup');

  cardsList.prepend(newCard);

// Ждем клик по кнопке удалить
cardRemoveButton.addEventListener('click', removeCard);

// Ждем клик по кнопке лайк
likeButton.addEventListener('click', likeCard);

// Ждем клик по картинке для открытия попапа
imagePopupOpen.addEventListener('click', openImagePopup);










}

// Создание карточек из массива
initialCards.forEach(function(card) {
  createCard(card);
});


// Добавление карточки пользователем
const addImageForm = document.getElementById('add-image');

function addUserImage (evt) {

  evt.preventDefault();
  // получаем данные пользователя

  const userImageName = document.getElementById('image-name');
  const userImageSrc = document.getElementById('image-src');
  const userCard = {name: `${userImageName.value}`, link: `${userImageSrc.value}`};
  createCard(userCard);
}


function addCardClosePopup(evt) {
  addUserImage(evt);
  closePopupAddImage();
}

addImageForm.addEventListener('submit', addCardClosePopup);







