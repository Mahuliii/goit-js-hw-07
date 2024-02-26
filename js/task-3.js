const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", () => {
  const inputText = nameInput.value.trim();
  if (inputText === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputText;
  }
});
