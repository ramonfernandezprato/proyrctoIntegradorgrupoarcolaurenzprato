fetch('https://dummyjson.com/products')
    .then(function(response){
        return response.json(); 
    })
    .then(function(data){
        console.log(data); 
    })
    .catch(function(error){
        console.log("El error es: " + error);
    });
let formulario = document.querySelector(".barra2")
let campoBusqueda = document.querySelector(".barrainput")

formulario.addEventListener("submit", function(event){
    if (campoBusqueda.value == ""){
        event.preventDefault()
        alert("Debes rellenar el campo");
    }
    if (campoBusqueda.value.length < 3){
         event.preventDefault()
        alert("El campo debe contener al menos 3 caracteres");

    }
});

