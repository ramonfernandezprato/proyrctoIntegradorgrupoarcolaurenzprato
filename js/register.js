let form= document.querySelector(".formbox form")

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email= document.querySelector("#Email")
  let password= document.querySelector("#Contraseña")
  let password2= document.querySelector("#Contraseña2")
 
  if  (email.value== ""){
   let invalidEmail= document.querySelector(".obligatorio_3")
   invalidEmail.innerHTML= "<p>Debe llenar el campo</p>";
   invalidEmail.style.display = "block";
   invalidEmail.style.color= "red";
  }
 
  else if (password.value== ""){
   let invalidPassword= document.querySelector(".obligatorio_4")
   invalidPassword.innerHTML= "<p>Debe llenar el campo</p>";
   invalidPassword.style.display = "block";
   invalidPassword.style.color= "red";
  }
  else if (password.value.length < 6) {
  let invalidPassword = document.querySelector(".obligatorio_4");
  invalidPassword.innerHTML = "<p>La contraseña debe tener al menos 6 caracteres </p>";
  invalidPassword.style.display = "block";
  invalidPassword.style.color= "red";
  }
  else if (password2.value== ""){
   let invalidPassword2= document.querySelector(".obligatorio_5")
   invalidPassword2.innerHTML= "<p>Debe llenar el campo</p>";
   invalidPassword2.style.display = "block";
   invalidPassword2.style.color= "red";
  }
  else if (password2.value!=password.value) {
  let invalidPassword2 = document.querySelector(".obligatorio_5");
  invalidPassword2.innerHTML = "<p>Las contraseñas no coinciden</p>";
  invalidPassword2.style.display = "block";
  invalidPassword2.style.color= "red";
  }
  else{
    this.submit()
  }
});