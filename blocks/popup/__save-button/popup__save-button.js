let saveButton = document.querySelector('.popup__save-button');

function saveUserInfo (evt) {
  evt.preventDefault();
  userName.textContent = userFormName.value;
  userWork.textContent =  userFormWork.value;
}


/* ждем клик по кнопке "сохранить" */
saveButton.addEventListener('submit', saveUserInfo);
