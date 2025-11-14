fetch('https://dummyjson.com/products')
    .then(function(respone){
    return Response.json();
    })
    
    .then(function(data){
        console.log(data);
    })

    .catch(function(error){
        console.log("El error es: " + error);
    })

let formulario = document.querySelector(".barra2")
let campoBusqueda = document.querySelector(".barrainput")

campoBusqueda.addEventListener("submit", function(){
    if (campoBusqueda == ""){
        alert("Debes rellenar el campo");
    }
    if (length.campoBusqueda < 4){
        alert("El campo debe contener al menos 3 caracteres");
    }
});

