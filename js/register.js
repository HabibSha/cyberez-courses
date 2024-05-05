const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  inputsValidate();
});

const errorMessage = (element, message) => {
  const inputControl = element.parentElement;
  const displayError = inputControl.querySelector(".error");

  displayError.innerText = message;
  inputControl.classList.add("error");
};

const successMessage = (element) => {
  const inputControl = element.parentElement;
  const displayError = inputControl.querySelector(".error");

  displayError.innerText = "";
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const inputsValidate = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (usernameValue === "") {
    errorMessage(username, "Username is required");
  } else if (usernameValue.length < 3) {
    errorMessage(username, "Username should be 3 characters long");
  } else {
    successMessage(username);
  }

  if (emailValue === "") {
    errorMessage(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    errorMessage(email, "Please enter a valid email address");
  } else {
    successMessage(email);
  }

  if (passwordValue === "") {
    errorMessage(password, "Password is required");
  } else if (passwordValue.length < 6) {
    errorMessage(password, "Password must be at least 6 characters");
  } else {
    successMessage(password);
  }

  if (confirmPasswordValue === "") {
    errorMessage(confirmPassword, "Please confirm your password");
  } else if (confirmPasswordValue !== passwordValue) {
    errorMessage(confirmPassword, "Password did not match");
  } else {
    successMessage(confirmPassword);
  }
};
