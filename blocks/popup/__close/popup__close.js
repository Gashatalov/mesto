let closeButton = document.querySelector('.popup__close');

function closePopup() {
  let popupWindow = document.querySelector('.popup').classList;
  popupWindow.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);
