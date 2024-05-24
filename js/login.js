const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

const formValues = {
  email: "",
  password: "",
};

// Function to update formValues object
const updateFormValues = (key, value) => {
  formValues[key] = value;
};

// Adding event listeners for the change event on each input
email.addEventListener("change", (e) =>
  updateFormValues("email", e.target.value)
);
password.addEventListener("change", (e) =>
  updateFormValues("password", e.target.value)
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputsValidate()) {
    console.log(formValues);
    // Clear input fields after form submission
    email.value = "";
    password.value = "";
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
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  let isValid = true;

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

  return isValid;
};
