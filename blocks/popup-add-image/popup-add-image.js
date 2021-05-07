// Открытие попапа
let addButton = document.querySelector('.profile__add-button');

function openPopupAddImage() {
  let popupWindow = document.querySelector('.popup-add-image').classList;
  popupWindow.add('popup_opened');
}

// Ждем клик по кнопке добавить
addButton.addEventListener('click', openPopupAddImage);

// Закрытие попапа
let closeButtonAddImage = document.getElementById('close_popup-add-image');

function closePopupAddImage() {
  let popupWindow = document.querySelector('.popup-add-image').classList;
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
  function openImagePopup() {
    imagePopup.classList.toggle('popup_opened');
    console.log('click!!!');
  }

  const newCard = cardTemplate.content.querySelector('.elements__card').cloneNode(true);

  newCard.querySelector('.elements__header').textContent = card.name;
  newCard.querySelector('.elements__image').src = card.link;
  newCard.querySelector('.elements__image').alt = card.name;
  newCard.querySelector('.image-popup__image').src = card.link;
  newCard.querySelector('.image-popup__image').alt = card.name;
  newCard.querySelector('.image-popup__header').textContent = card.name;

  const cardRemoveButton = newCard.querySelector('.elements__trash');
  const likeButton = newCard.querySelector('.elements__like');
  const imagePopupOpen = newCard.querySelector('.elements__image');

  const closeImagePopup = newCard.querySelector('.image-popup__close');

  const imagePopup = newCard.querySelector('.image-popup');

  cardsList.prepend(newCard);

// Ждем клик по кнопке удалить
cardRemoveButton.addEventListener('click', removeCard);

// Ждем клик по кнопке лайк
likeButton.addEventListener('click', likeCard);

// Ждем клик по картинке для открытия попапа
imagePopupOpen.addEventListener('click', openImagePopup);


//Ждем клик по крестику для закрытия попапа картинки
closeImagePopup.addEventListener('click', openImagePopup);




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



