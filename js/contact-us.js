const userName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const form = document.getElementById("form");

const formValues = {
  userName: "",
  email: "",
  subject: "",
  message: "",
};

// Function to update formValues object
const updateFormValues = (key, value) => {
  formValues[key] = value;
};

// Adding event listeners for the change event on each input
userName.addEventListener("change", (e) =>
  updateFormValues("userName", e.target.value)
);

email.addEventListener("change", (e) =>
  updateFormValues("email", e.target.value)
);

subject.addEventListener("change", (e) =>
  updateFormValues("subject", e.target.value)
);

message.addEventListener("change", (e) =>
  updateFormValues("message", e.target.value)
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputsValidate()) {
    console.log(formValues);
    // Clear input fields after form submission
    userName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
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
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();
  let isValid = true;

  if (userNameValue === "") {
    errorMessage(userName, "Name is required");
    isValid = false;
  } else {
    successMessage(userName);
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

  if (subjectValue === "") {
    errorMessage(subject, "Subject is required");
    isValid = false;
  } else {
    successMessage(subject);
  }

  if (messageValue === "") {
    errorMessage(message, "Message is required");
    isValid = false;
  } else {
    successMessage(message);
  }

  return isValid;
};
