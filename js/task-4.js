const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {};
  const formElements = event.target.elements;
  for (let element of formElements) {
    if (element.tagName === "INPUT") {
      const { name, value } = element;
      const trimmedValue = value.trim();
      if (!trimmedValue) {
        alert("All form fields must be filled in");
        return;
      }
      formData[name] = trimmedValue;
    }
  }
  console.log(formData);
  loginForm.reset();
});
