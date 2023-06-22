const inputValue = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

inputValue.addEventListener("input", () => {
  textSize.style.fontSize = `${inputValue.value}px`;
});
