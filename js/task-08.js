const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const userEmail = e.currentTarget.elements.email.value;
  const userPassword = e.currentTarget.elements.password.value;
  if (userEmail === "" || userPassword === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    const resultObj = {
      userEmail,
      userPassword,
    };
    e.currentTarget.reset();
    return resultObj;
  }
}
