const signUpForm = document.forms["sign-up-form"];
const firstName = signUpForm["first-name"];
const lastName = signUpForm["last-name"];
const email = signUpForm["email-addres"];
const password = signUpForm["password"];
// console.log("dasdasd");

const fnAlert = document.getElementById("fnalert");
const lnAlert = document.getElementById("lnalert");
const emailAlert = document.getElementById("emalert");
const passwordAlert = document.getElementById("pasalert");

const imgfnAlert = document.getElementById("fnerror");
const imglnAlert = document.getElementById("lnerror");
const imgEmailAlert = document.getElementById("emerror");
const imgPasswordAlert = document.getElementById("paserror");

const symbols = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`1234567890]/;
const symbolsEmail = /[!#$%^&*()_+{}\[\]:;"'<>,?/~`]/;
const emails = "@gmail.com";
const string = ["undefined", "number", "boolean", "string", "null", "object"];

// const hidePass = document.getElementById("hide-img");
const showPass = document.getElementById("show-img");

function validation() {
  if (firstName.value.trim() === "") {
    fnAlert.innerHTML = "First name can't be empty";
    imgfnAlert.classList.remove("hidden");
  } else if (firstName.value.length < 3) {
    fnAlert.innerHTML = "First Name to Short!";
    imgfnAlert.classList.remove("hidden");
  } else {
    fnAlert.classList.add("Success");
    fnAlert.innerHTML = "Success";
    imgfnAlert.classList.add("hidden");
  }

  if (lastName.value.trim() === "") {
    lnAlert.innerHTML = "Last name can't be empty";
    imglnAlert.classList.remove("hidden");
  } else if (lastName.value.length < 3) {
    lnAlert.innerHTML = "Last Name to Short!";
    imglnAlert.classList.remove("hidden");
  } else {
    lnAlert.classList.add("Success");
    lnAlert.innerHTML = "Success";
    imglnAlert.classList.add("hidden");
  }

  if (email.value.trim() === "") {
    emailAlert.innerHTML = "Email can't be empty";
    imgEmailAlert.classList.remove("hidden");
  } else if (email.value.length < 3) {
    emailAlert.innerHTML = "Email to Short!";
    imgEmailAlert.classList.remove("hidden");
  } else {
    emailAlert.classList.add("Success");
    emailAlert.innerHTML = "Success";
    imgEmailAlert.classList.add("hidden");
  }

  if (password.value.trim() === "") {
    passwordAlert.innerHTML = " Password can't be empty";
    imgPasswordAlert.classList.remove("hidden");
  } else if (password.value.length < 3) {
    passwordAlert.innerHTML = " Password to Short!";
    imgPasswordAlert.classList.remove("hidden");
  } else {
    passwordAlert.classList.add("Success");
    passwordAlert.innerHTML = "Success";
    imgPasswordAlert.classList.add("hidden");
  }
}

function hidepasss() {
  if (password.type === "password") {
    password.type = "text";
    // hidePass.classList.remove("hidden");
    // showPass.classList.add("hidden");
    showPass.src = "./images/hide.png";
  } else {
    password.type = "password";
    showPass.src = "./images/show.png";
    // hidePass.classList.add("hidden");
    // showPass.classList.remove("hidden");
  }
}

showPass.addEventListener("click", hidepasss);
// hidePass.addEventListener("click", hidepasss);

signUpForm.onsubmit = (event) => {
  event.preventDefault();
  validation();
};
