const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  invalidtion();

  email.value = "";
  password.value = "";
});

const setErr = (e, massage) => {
  const inControl = e.parentElement;
  const errorMassage = inControl.querySelector(".error");

  errorMassage.innerText = massage;
  inControl.classList.add("error");
  inControl.classList.remove("success");
};
const setSucc = (e) => {
  const inControl = e.parentElement;
  const errorMassage = inControl.querySelector(".error");

  errorMassage.innerText = "";
  inControl.classList.add("success");
  inControl.classList.remove("error");
};

const invalidtion = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setErr(email, "Enter your email");
  } else {
    setSucc(email);
  }

  if (passwordValue === "") {
    setErr(password, "Enter your password");
  } else {
    setSucc(password);
  }
};
