// declaring the inputs element
const form = document.getElementById("form");
const successMsg = document.getElementById("success_message");
const studentName = document.getElementById("name");
const mobileNumber = document.getElementById("number");
const email = document.getElementById("email");
const surname = document.getElementById("surname");
const presentAddress = document.getElementById("present-address");
const presentCity = document.getElementById("present-city");
const postalCodeC = document.getElementById("postal-codeC");
const permanentAddress = document.getElementById("permanent-address");
const cityName = document.getElementById("city-name");
const postalCodeP = document.getElementById("postal-codeP");
const officeAddress = document.getElementById("office-address");
const nid = document.getElementById("nid");
const occupation = document.getElementById("occupation");
const birth = document.getElementById("birth");
const nationality = document.getElementById("nationality");
const selectCourse = document.getElementById("select-course");
const education = document.getElementById("education");
const department = document.getElementById("department");
const studentId = document.getElementById("studentId");
const altName = document.getElementById("altName");
const altNumber = document.getElementById("altNumber");
const relation = document.getElementById("relation");
const hobby = document.getElementById("hobby");
const intention = document.getElementById("intention");

const formValues = {
  studentName: "",
  mobileNumber: "",
  email: "",
  surname: "",
  presentAddress: "",
  presentCity: "",
  postalCodeC: "",
  permanentAddress: "",
  cityName: "",
  postalCodeP: "",
  officeAddress: "",
  nid: "",
  occupation: "",
  birth: "",
  nationality: "",
  selectCourse: "",
  education: "",
  department: "",
  studentId: "",
  altName: "",
  altNumber: "",
  relation: "",
  hobby: "",
  intention: "",
};

// Function to update formValues object
const updateFormValues = (key, value) => {
  formValues[key] = value;
};

// Adding event listeners for the change event on each input
studentName.addEventListener("change", (e) =>
  // updateFormValues("studentName", e.target.value),
  console.log(e.target.value)
);
mobileNumber.addEventListener("change", (e) =>
  updateFormValues("mobileNumber", e.target.value)
);
email.addEventListener("change", (e) =>
  updateFormValues("email", e.target.value)
);
surname.addEventListener("change", (e) =>
  updateFormValues("surname", e.target.value)
);
presentAddress.addEventListener("change", (e) =>
  updateFormValues("presentAddress", e.target.value)
);
presentCity.addEventListener("change", (e) =>
  updateFormValues("presentCity", e.target.value)
);
postalCodeC.addEventListener("change", (e) =>
  updateFormValues("postalCodeC", e.target.value)
);
permanentAddress.addEventListener("change", (e) =>
  updateFormValues("permanentAddress", e.target.value)
);
cityName.addEventListener("change", (e) =>
  updateFormValues("cityName", e.target.value)
);
postalCodeP.addEventListener("change", (e) =>
  updateFormValues("postalCodeP", e.target.value)
);
officeAddress.addEventListener("change", (e) =>
  updateFormValues("officeAddress", e.target.value)
);
nid.addEventListener("change", (e) => updateFormValues("nid", e.target.value));
occupation.addEventListener("change", (e) =>
  updateFormValues("occupation", e.target.value)
);
birth.addEventListener("change", (e) =>
  updateFormValues("birth", e.target.value)
);
nationality.addEventListener("change", (e) =>
  updateFormValues("nationality", e.target.value)
);
selectCourse.addEventListener("change", (e) =>
  updateFormValues("selectCourse", e.target.value)
);
education.addEventListener("change", (e) =>
  updateFormValues("education", e.target.value)
);
department.addEventListener("change", (e) =>
  updateFormValues("department", e.target.value)
);
studentId.addEventListener("change", (e) =>
  updateFormValues("studentId", e.target.value)
);
altName.addEventListener("change", (e) =>
  updateFormValues("altName", e.target.value)
);
altNumber.addEventListener("change", (e) =>
  updateFormValues("altNumber", e.target.value)
);
relation.addEventListener("change", (e) =>
  updateFormValues("relation", e.target.value)
);
hobby.addEventListener("change", (e) =>
  updateFormValues("hobby", e.target.value)
);
intention.addEventListener("change", (e) =>
  updateFormValues("intention", e.target.value)
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputsValidate()) {
    console.log(formValues);
    successMsg.classList.add("show");
    setTimeout(function () {
      successMsg.classList.remove("show");
    }, 3000);
    // Clear input fields after form submission
    studentName.value = "";
    mobileNumber.value = "";
    email.value = "";
    surname.value = "";
    presentAddress.value = "";
    presentCity.value = "";
    postalCodeC.value = "";
    permanentAddress.value = "";
    cityName.value = "";
    postalCodeP.value = "";
    officeAddress.value = "";
    nid.value = "";
    occupation.value = "";
    birth.value = "";
    nationality.value = "";
    selectCourse.value = "";
    education.value = "";
    department.value = "";
    studentId.value = "";
    altName.value = "";
    altNumber.value = "";
    relation.value = "";
    hobby.value = "";
    intention.value = "";
  }
});

const errorMessage = (element, message) => {
  const inputParent = element.parentElement;
  const displayError = inputParent.querySelector(".error");

  displayError.innerText = message;
  inputParent.classList.add("error");
};

const successMessage = (element) => {
  const inputParent = element.parentElement;
  const displayError = inputParent.querySelector(".error");

  displayError.innerText = "";
  inputParent.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const inputsValidate = () => {
  const studentNameValue = studentName.value.trim();
  const mobileNumberValue = mobileNumber.value.trim();
  const emailValue = email.value.trim();
  const surnameValue = surname.value.trim();
  const presentAddressValue = presentAddress.value.trim();
  const presentCityValue = presentCity.value.trim();
  const postalCodeCValue = postalCodeC.value.trim();
  const permanentAddressValue = permanentAddress.value.trim();
  const cityNameValue = cityName.value.trim();
  const postalCodePValue = postalCodeP.value.trim();
  const officeAddressValue = officeAddress.value.trim();
  const nidValue = nid.value.trim();
  const occupationValue = occupation.value.trim();
  const birthValue = birth.value.trim();
  const nationalityValue = nationality.value.trim();
  const selectCourseValue = selectCourse.value.trim();
  const educationValue = education.value.trim();
  const departmentValue = department.value.trim();
  const studentIdValue = studentId.value.trim();
  const altNameValue = altName.value.trim();
  const altNumberValue = altNumber.value.trim();
  const relationValue = relation.value.trim();
  const hobbyValue = hobby.value.trim();
  const intentionValue = intention.value.trim();
  let isValid = true;

  if (studentNameValue === "") {
    errorMessage(studentName, "Student name is required");
    isValid = false;
  } else if (studentNameValue.length < 3) {
    errorMessage(studentName, "Username should be 3 characters long");
    isValid = false;
  } else {
    successMessage(studentName);
  }

  if (mobileNumberValue === "") {
    errorMessage(mobileNumber, "Mobile number is required");
    isValid = false;
  } else if (mobileNumberValue.length < 5) {
    errorMessage(mobileNumber, "Mobile number should be 5 characters long");
    isValid = false;
  } else {
    successMessage(mobileNumber);
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

  if (surnameValue === "") {
    errorMessage(surname, "Facebook name is required");
    isValid = false;
  } else if (surnameValue.length < 3) {
    errorMessage(surname, "Facebook name should be 3 characters long");
    isValid = false;
  } else {
    successMessage(surname);
  }

  if (presentAddressValue === "") {
    errorMessage(presentAddress, "Present address is required");
    isValid = false;
  } else if (presentAddressValue.length < 3) {
    errorMessage(presentAddress, "Present address should be 3 characters long");
    isValid = false;
  } else {
    successMessage(presentAddress);
  }

  if (presentCityValue === "") {
    errorMessage(presentCity, "Present city is required");
    isValid = false;
  } else if (presentCityValue.length < 3) {
    errorMessage(presentCity, "Present city should be 2 characters long");
    isValid = false;
  } else {
    successMessage(presentCity);
  }

  if (permanentAddressValue === "") {
    errorMessage(permanentAddress, "Permanent address is required");
    isValid = false;
  } else if (permanentAddressValue.length < 3) {
    errorMessage(
      permanentAddress,
      "Permanent address should be 3 characters long"
    );
    isValid = false;
  } else {
    successMessage(permanentAddress);
  }

  if (cityNameValue === "") {
    errorMessage(cityName, "City name is required");
    isValid = false;
  } else if (cityNameValue.length < 3) {
    errorMessage(cityName, "City name should be 2 characters long");
    isValid = false;
  } else {
    successMessage(cityName);
  }

  if (occupationValue === "") {
    errorMessage(occupation, "Occupation is required");
    isValid = false;
  } else {
    successMessage(occupation);
  }

  if (birthValue === "") {
    errorMessage(birth, "Date of Birth is required");
    isValid = false;
  } else {
    successMessage(birth);
  }

  if (nationalityValue === "") {
    errorMessage(nationality, "Nationality is required");
    isValid = false;
  } else {
    successMessage(nationality);
  }

  if (selectCourseValue === "") {
    errorMessage(selectCourse, "Select course is required");
    isValid = false;
  } else {
    successMessage(selectCourse);
  }

  if (educationValue === "") {
    errorMessage(education, "Education background is required");
    isValid = false;
  } else {
    successMessage(education);
  }

  if (departmentValue === "") {
    errorMessage(department, "Department is required");
    isValid = false;
  } else {
    successMessage(department);
  }

  if (studentIdValue === "") {
    errorMessage(studentId, "Student ID/Roll is required");
    isValid = false;
  } else {
    successMessage(studentId);
  }

  if (altNameValue === "") {
    errorMessage(altName, "Alternative name is required");
    isValid = false;
  } else if (altNameValue.length < 3) {
    errorMessage(altName, "Alternative name should be 3 characters long");
    isValid = false;
  } else {
    successMessage(altName);
  }

  if (altNumberValue === "") {
    errorMessage(altNumber, "Mobile number is required");
    isValid = false;
  } else if (altNumberValue.length < 5) {
    errorMessage(altNumber, "Mobile number should be 5 characters long");
    isValid = false;
  } else {
    successMessage(altNumber);
  }

  if (relationValue === "") {
    errorMessage(relation, "This field is required");
    isValid = false;
  } else {
    successMessage(relation);
  }

  if (intentionValue === "") {
    errorMessage(intention, "This field is required");
    isValid = false;
  } else {
    successMessage(relation);
  }

  return isValid;
};
