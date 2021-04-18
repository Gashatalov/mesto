let submitForm = document.querySelector('.popup__form');

function saveUserInfo (evt) {

  evt.preventDefault();
  let userName = document.querySelector('.profile__name');
  let userWork = document.querySelector('.profile__work');

  let userFormName = document.querySelectorAll('.popup__input-text')[0];
  let userFormWork = document.querySelectorAll('.popup__input-text')[1];

  userName.textContent = userFormName.value;
  userWork.textContent =  userFormWork.value;
}

function closePopup() {

  let popupWindow = document.querySelector('.popup').classList;
  popupWindow.remove('popup_opened');


}

function saveFormClosePopup(evt) {
  saveUserInfo(evt);
  closePopup();
}


/* ждем клик по кнопке "сохранить" */
submitForm.addEventListener('submit', saveFormClosePopup);
