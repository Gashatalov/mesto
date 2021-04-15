/* открытие попапа */
let editButton = document.querySelector('.profile__edit-button');

function openPopup() {
  let popupWindow = document.querySelector('.popup').classList;
  popupWindow.add('popup_opened');
}

/* вставка данных пользователя в поля формы */

let userName = document.querySelector('.profile__name');
let userWork = document.querySelector('.profile__work');

let userFormName = document.querySelectorAll('.popup__input-text')[0];
let userFormWork = document.querySelectorAll('.popup__input-text')[1];


function fillForm() {
  userFormName.setAttribute('value', userName.textContent);
  userFormWork.setAttribute('value', userWork.textContent);
}

/* ждем клик по кнопке edit */
editButton.addEventListener('click', openPopup);
editButton.addEventListener('click', fillForm);
