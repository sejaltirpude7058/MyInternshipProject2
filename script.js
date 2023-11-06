const form = document.querySelector("#registration-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

form.addEventListener("submit", (event) => {
  // event.preventDefault();

  validateForm();
});

function validateForm() {
  // NAME
  if (nameInput.value.trim() == "") {
    setError(nameInput, " *Name Can not be empty!");
  } else {
    setSuccess(nameInput);
  }

  // EMAIL
  if (emailInput.value.trim() == "") {
    setError(emailInput, " *Please Provide your Email Address!");
  } else if (isEmailValid(emailInput.value)) {
    setSuccess(emailInput);
  } else {
    setError(emailInput, "*Please Provide Valid Email Address!");
  }

  // USERNAME
  if (usernameInput.value.trim() == "") {
    setError(usernameInput, " *Username Can not be empty!");
  } else {
    setSuccess(usernameInput);
  }

  // PASSWORD
  if (passwordInput.value.trim() == "") {
    setError(passwordInput, " *Please Set Your Password!");
    return false;
  }
  if (
    passwordInput.value.trim().length < 8 ||
    passwordInput.value.trim().length > 20
  ) {
    setError(passwordInput, "*Must be atleast 8 characters!");
    return false;
  }
  if (passwordInput.value.trim().search(/[0-9]/) == -1) {
    setError(passwordInput, "*Must Contain atleast 1 numeric value!");
    return false;
  }
  if (passwordInput.value.trim().search(/[a-z]/) == -1) {
    setError(passwordInput, "*Must Contain atleast 1 lowercase character!");
    return false;
  }
  if (passwordInput.value.trim().search(/[A-Z]/) == -1) {
    setError(passwordInput, "*Must Contain atleast 1 uppercase character!");
    return false;
  }
  if (passwordInput.value.trim().search(/[!\%\^\&\*\@\+\_\-\=\$\#\?]/) == -1) {
    setError(passwordInput, "*Must Contain atleast 1 special character!");
    return false;
  } else {
    setSuccess(passwordInput);
  }

  // CONFIRM PASSWORD
  if (confirmPasswordInput.value.trim() == "") {
    setError(confirmPasswordInput, " *Please Retype Your Password!");
  } else if (confirmPasswordInput.value !== passwordInput) {
    setError(confirmPasswordInput, "*Password does Not Match!");
  } else {
    setSuccess(confirmPasswordInput);
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");
  const para = parent.querySelector("p");
  para.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}

function isEmailValid(email) {
  const reg =
    "^[A-Za-z0-9](([a-zA-Z0-9,=.!-#|$%^&*+/?_`{}~]+)*)@(?:[0-9a-zA-Z-]+.)+[a-zA-Z]{2,9}$";
  return reg.test(email);
}
