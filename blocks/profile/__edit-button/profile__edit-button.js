/* открытие попапа */
let editButton = document.querySelector('.profile__edit-button');

function openPopup() {
  let popupWindow = document.querySelector('.popup').classList;
  popupWindow.add('popup_opened');
}

function fillForm() {
  /* вставка данных пользователя в поля формы */
let userName = document.querySelector('.profile__name');
let userWork = document.querySelector('.profile__work');

let userFormName = document.querySelectorAll('.popup__input-text')[0];
let userFormWork = document.querySelectorAll('.popup__input-text')[1];

  userFormName.setAttribute('value', userName.textContent);
  userFormWork.setAttribute('value', userWork.textContent);
}

/* Единая фукнция при клике не кнопку*/
function openPopupFillForm() {
  openPopup();
  fillForm();
}

/* ждем клик по кнопке edit */
editButton.addEventListener('click', openPopupFillForm);

