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

            for (let i = 0; i < 12; i++) {
                const p = productos[i];

                html += `
                <article class="prod melegidos">
                    <img src="${p.thumbnail}" alt="${p.title}">
                    <h1>${p.title}</h1>
                    <p class="homep">${p.description}</p>
                    <h2>$${p.price}</h2>
                    <p class="vermas"><a href="./product.html?id=${p.id}">VER MÁS</a><p>
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

            for (let i = 0; i < 12; i++) {
                const p = productos[i];

                html += `
                <article class="prod melegidos">
                    <img src="${p.thumbnail}" alt="${p.title}">
                    <h1>${p.title}</h1>
                    <p class="homep">${p.description}</p>
                    <h2>$${p.price}</h2>
                    <p class="vermas"><a href="./product.html?id=${p.id}">VER MÁS</a><p>
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
