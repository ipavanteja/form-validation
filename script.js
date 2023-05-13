const form = document.getElementById("form");
const passwordEl1 = document.getElementById("password1");
const passwordEl2 = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
const star = document.getElementById("star");
const reset = document.getElementById("reset");

let isValid = false;
let passwordsMatch = false;
let checkRegister = true;
const database = [];

function validateForm() {
  checkRegister = true;

  /* --- HTML constraint API to check form validity --- */
  isValid = form.checkValidity();
  /* --- If form is not valid --- */
  if (!isValid) {
    /* --- Style main message error --- */
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return 1;
  }

  /* --- Passwords match setup --- */
  if (passwordEl1.value === passwordEl2.value) {
    /* --- If passwords match --- */
    passwordsMatch = true;
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  } else {
    /* --- If password not match --- */
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    passwordEl1.style.borderColor = "red";
    passwordEl2.style.borderColor = "red";
    return 1;
  }

  /* --- Already Registered setup ---*/
  if (database.includes(form.mail.value)) {
    checkRegister = false;
  }

  /* --- If already registered ---*/
  if (!checkRegister) {
    message.textContent = "Already Registered.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return 1;
  }

  /* --- If form is valid, password match and not registered --- */
  if (isValid && passwordsMatch && checkRegister) {
    message.textContent = "Registered Successfully!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
    passwordEl1.style.borderColor = "green";
    passwordEl2.style.borderColor = "green";
  }
}

/* --- Show Password --- */
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    passwordEl1.getAttribute("type") === "password" ? "text" : "password";
  passwordEl1.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});

/* --- Storing the Data ---*/
function storeData() {
  database.push(form.mail.value);
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    mail: form.mail.value,
    password: form.password2.value,
  };
  if (isValid && passwordsMatch && checkRegister) {
    console.log(user);
  }
}

function processFormData(event) {
  event.preventDefault();
  /* --- Validate Form --- */
  const validResponse = validateForm();
  /* --- Store Data ---*/
  if (validResponse != 1) {
    storeData();
  }
}

/* --- Reset Form --- */
function resetForm() {
  form.reset();
  message.textContent = "Don't Hesitate !";
  message.style.color = "black";
  messageContainer.style.borderColor = "black";
  passwordEl1.style.borderColor = "red";
  passwordEl2.style.borderColor = "red";
}

/* --- Calling All Functions --- */
form.addEventListener("submit", processFormData);
reset.addEventListener("click", resetForm);
