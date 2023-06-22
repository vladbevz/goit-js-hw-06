const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", formSubmit);
function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value == "" || password.value == "") {
    return alert("Всі поля повинні бути заповнені");
  }
  event.currentTarget.reset();
}
