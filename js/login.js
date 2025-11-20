let form = document.querySelector(".formbox1 form")

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email= document.querySelector("#email")
  let password= document.querySelector("#contraseña")
 
  if  (email.value== ""){
   let invalidEmail= document.querySelector(".obligatorio_1")
   invalidEmail.innerHTML= "<p>Debe llenar el campo</p>";
   invalidEmail.style.display = "block";
   invalidEmail.style.color= "red";
  }
 
  else if (password.value== ""){
   let invalidPassword= document.querySelector(".obligatorio_2")
   invalidPassword.innerHTML= "<p>Debe llenar el campo</p>";
   invalidPassword.style.display = "block";
   invalidPassword.style.color= "red";
  }
  else if (password.value.length < 6) {
   let invalidPassword = document.querySelector(".obligatorio_2");
   invalidPassword.innerHTML = "<p>La contraseña debe tener al menos 6 caracteres</p>";
   invalidPassword.style.display = "block";
   invalidPassword.style.color= "red";
  }
  else{
    let usuario = email.value;
    let usuarioToString = JSON.stringify(usuario);
    localStorage.setItem("userName", usuarioToString);
    this.submit()
  }
});