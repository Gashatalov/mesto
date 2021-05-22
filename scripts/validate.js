


function hideInputError (formElement, inputElement, config) {
  const {inputErrorClass, errorClass } = config;
  inputElement.classList.remove(inputErrorClass);
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';

}

function showInputError (formElement, inputElement, config) {
  const {inputErrorClass, errorClass } = config;
  inputElement.classList.add(inputErrorClass);
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);


}

function checkInputValidity (formElement, inputElement, config) {

   if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  } else {
    showInputError(formElement, inputElement, config);
  }

}

function validityState(inputList) {
  return inputList.some(inputElement => !inputElement.validity.valid);

}

function toggleButtonState(buttonElement, inputList) {
  if (validityState(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add('popup__save-button_disabled');

  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__save-button_disabled');

  }

}



function setEventListeners(formElement, config) {

  const { inputSelector, submitButtonSelector, ...restConfig } = config;

  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
  });
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

 inputList.forEach((inputElement) => {
   inputElement.addEventListener('input', () => {
    checkInputValidity(formElement, inputElement, restConfig);
    toggleButtonState(buttonElement, inputList);
   })

 });

 toggleButtonState(buttonElement, inputList);



}


function enableValidation (config) {
  const { formSelector, ...restConfig } = config;
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, restConfig);
  })

}






