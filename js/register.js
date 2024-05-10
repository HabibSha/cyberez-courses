// declaring the inputs element
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("form");

const formValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// Function to update formValues object
const updateFormValues = (key, value) => {
  formValues[key] = value;
};

// Adding event listeners for the change event on each input
username.addEventListener("change", (e) =>
  updateFormValues("username", e.target.value)
);
email.addEventListener("change", (e) =>
  updateFormValues("email", e.target.value)
);
password.addEventListener("change", (e) =>
  updateFormValues("password", e.target.value)
);
confirmPassword.addEventListener("change", (e) =>
  updateFormValues("confirmPassword", e.target.value)
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputsValidate()) {
    console.log(formValues);
    // Clear input fields after form submission
    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
  }
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
  let isValid = true;

  if (usernameValue === "") {
    errorMessage(username, "Username is required");
    isValid = false;
  } else if (usernameValue.length < 3) {
    errorMessage(username, "Username should be 3 characters long");
    isValid = false;
  } else {
    successMessage(username);
  }

  if (emailValue === "") {
    errorMessage(email, "Email address is required");
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    errorMessage(email, "Please enter a valid email address");
    isValid = false;
  } else {
    successMessage(email);
  }

  if (passwordValue === "") {
    errorMessage(password, "Password is required");
    isValid = false;
  } else if (passwordValue.length < 6) {
    errorMessage(password, "Password must be at least 6 characters");
    isValid = false;
  } else {
    successMessage(password);
  }

  if (confirmPasswordValue === "") {
    errorMessage(confirmPassword, "Please confirm your password");
    isValid = false;
  } else if (confirmPasswordValue !== passwordValue) {
    errorMessage(confirmPassword, "Password did not match");
    isValid = false;
  } else {
    successMessage(confirmPassword);
  }

  return isValid;
};
