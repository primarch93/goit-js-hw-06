const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {};
  const inputEmailValue = refs.form.elements.email.value;
  const inputPasswordValue = refs.form.elements.password.value;

  if (inputEmailValue === '' || inputPasswordValue === '') {
    alert('All fields must be filled!!!');
  } else {
    formData.email = inputEmailValue;
    formData.password = inputEmailValue;
    console.log(formData);
    refs.form.reset();
  }
}




// const registerForm = document.querySelector(".login-form");

// registerForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return alert("Всі поля повинні бути заповнені");
//   }

//   console.log({ email: email.value, password: password.value });

//   event.currentTarget.reset();
// });
