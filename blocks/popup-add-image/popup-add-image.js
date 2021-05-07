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

function closePopup() {
  let popupWindow = document.querySelector('.popup-add-image').classList;
  popupWindow.remove('popup_opened');
}

closeButtonAddImage.addEventListener('click', closePopup);
