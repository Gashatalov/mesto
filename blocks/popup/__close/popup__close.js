const closeButton = document.querySelector('.popup__close');

function closePopup() {
  const popupWindow = document.querySelector('.popup').classList;
  popupWindow.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);
