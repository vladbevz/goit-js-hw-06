function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const background = document.querySelector("body");
const textColor = document.querySelector(".color");
const changeButton = document.querySelector(".change-color");

changeButton.addEventListener("click", getColor);
function getColor() {
  let color = getRandomHexColor();
  background.style.backgroundColor = color;
  textColor.textContent = color;
}
