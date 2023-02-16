// Add the novalidate attribute when the JS loads
const formsForValidity = document.querySelectorAll("[data-validate='true']");

for (var i = 0; i < formsForValidity.length; i++) {
  formsForValidity[i].setAttribute("novalidate", true);
}

//TODO: change cta_email_input class to new container
const ctaForm = document.querySelector("#main-cta-form");
const ctaInputWrapper = document.querySelector(".cta_email_input");
const ctaInput = document.querySelector(".cta_email_input > [type='email']");

const checkInputError = (inputEl) => {
  const validityState = inputEl.validity;

  if (validityState.valueMissing) {
    return { msg: "email-missing", isValid: false };
  }
  if (validityState.typeMismatch) {
    return { msg: "not-email", isValid: false };
  }
  return { msg: "default", isValid: true };
};

ctaForm.addEventListener(
  "blur",
  (e) => {
    e.preventDefault();

    const hasError = checkInputError(ctaInput);

    if (!hasError.isValid) {
      ctaInputWrapper.dataset.inputErrorState = hasError.msg;
      return;
    }
  },
  true
);
ctaForm.addEventListener(
  "click",
  (e) => {
    e.preventDefault();

    if (e.target.tagName !== "BUTTON") {
      console.log("not a btn");
      return;
    }

    const hasError = checkInputError(ctaInput);

    if (!hasError.isValid) {
      ctaInputWrapper.dataset.inputErrorState = hasError.msg;
      return;
    }
  },
  true
);
// ----> input states
// not email
// required
// input states
