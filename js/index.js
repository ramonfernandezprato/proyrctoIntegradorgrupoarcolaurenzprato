fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);


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

const apiGroceries = "https://dummyjson.com/products/category/groceries";

function cargarGroceries() {
    const titulo = document.querySelector(".me.h1h1")
    titulo.innerText = "GROCERIES";
    fetch(apiGroceries)
        .then(function(respuesta) {
            return respuesta.json(); 
        })
        .then(function(data) {
            const productos = data.products;
            const lista = document.querySelector(".productos");
            let html = "";

            for (let i = 0; i < productos.length; i++) {
                const p = productos[i];

                html += `
                <article class="prodmejleidos">
                    <img src="${p.thumbnail}" alt="${p.title}">
                    <h1>${p.title}</h1>
                    <p>${p.description}</p>
                    <h2>$${p.price}</h2>
                    <a href="./product.html?id=${p.id}">VER MÁS</a>
                    </article>
                `;
            }

            lista.innerHTML = html;
        })
        .catch(function(error){
            console.log("Error: " + error);
        });
}

window.addEventListener("load", cargarGroceries);


const apiAccesoriosCocina = "https://dummyjson.com/products/category/kitchen-accessories";

function cargarAccesoriosCocina() {
    const titulo = document.querySelector(".mp.h1h1")
    titulo.innerText = "ACCESORIOS DE COCINA";
    fetch(apiAccesoriosCocina)
        .then(function(respuesta) {
            return respuesta.json(); 
        })
        .then(function(data) {
            const productos = data.products;
            const lista = document.querySelector(".productos1");
            let html = "";

            for (let i = 0; i < productos.length; i++) {
                const p = productos[i];

                html += `
                <article class="prodmejleidos">
                    <img src="${p.thumbnail}" alt="${p.title}">
                    <h1>${p.title}</h1>
                    <p>${p.description}</p>
                    <h2>$${p.price}</h2>
                    <a href="./product.html?id=${p.id}">VER MÁS</a>
                    </article>
                `;
            }

            lista.innerHTML = html;
        })
        .catch(function(error){
            console.log("Error: " + error);
        });
}

window.addEventListener("load", cargarAccesoriosCocina);
