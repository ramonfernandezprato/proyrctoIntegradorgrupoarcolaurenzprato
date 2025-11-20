const queryString = location.search;
const queryStringObj = new URLSearchParams(querystring);

let categoriaId = queryStringObj.get("id");

if (categoriaId === null) {
    categoriaId = "beauty";
}

const tituloCategoria = document.querySelector("#categoryTitle");
const listaProductos = document.querySelector(".")
const listaAside = document.querySelector(".listaAside");

if (tituloCategoria != null) {
    tituloCategoria.innerText = "CATEGORIAS: " + categoriaId;
}

const url = 'https://dummyjson.com/products/category/${categoriaId}';

fetch(url)
    .then(function(respuesta) {
            return respuesta.json(); 
        })
        .then(function(data) {
            const productos = data.products;

            listaAside.innerHTML = "";
            productos.forEach(p => {
                listaAside.innerHTML += `
                <li>
                    <a href="./product.html?id=${p.id}">
                        ${p.title}
                    </a>
                </li>
            `;
        });

            listaProductos.innerHTML = "";
        let contenido = "";

        productos.forEach(p => {
            contenido += `
                <article class="prod">
                    <img src="${p.thumbnail}" alt="${p.title}">
                    <h1>${p.title}</h1>
                    <p>${p.description}</p>
                    <h2>$${p.price}</h2>
                    <p class="vermas"><a href="./product.html?id=${p.id}">VER MÁS</a></p>
                </article>
            `;
        });

        listaProductos.innerHTML = contenido;
    })
    .catch(error => {
        console.log("Error: " + error);
        listaProductos.innerHTML = "No se pudieron cargar los productos de esta categoría";
    });
       