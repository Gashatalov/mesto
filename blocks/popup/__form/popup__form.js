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
