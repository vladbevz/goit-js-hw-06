const textInput = document.querySelector("#validation-input");
const lengthInput = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
  if (textInput.value.length === Number(lengthInput)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
