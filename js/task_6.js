const validationRef = document.querySelector("#validation-input");
validationRef.addEventListener("blur", checkValidation);

function checkValidation() {
  if (validationRef.value.length === Number(validationRef.dataset.length)) {
    validationRef.classList.add("valid");
    validationRef.classList.remove("invalid");
  } else {
    validationRef.classList.add("invalid");
    validationRef.classList.remove("valid");
  }
}
