let params = new URLSearchParams(window.location.search);
let categoriaId = params.get("id"); 
let titulo = document.getElementById("tituloCategoria");
let lista = document.querySelector(".listaProductos");

if (!categoriaId) {
    titulo.innerText = "CATEGORÍA NO ENCONTRADA";
    lista.innerHTML = "<p>No se seleccionó ninguna categoría.</p>";
}

titulo.innerText = categoriaId.toUpperCase();

fetch("https://dummyjson.com/products/category/" + categoriaId)
    .then(function(respuesta) { 
        return respuesta.json(); 
    })
    .then(function(data) { 

        const productos = data.products;
        let html = "";

        for (let i = 0; i < productos.length; i++) {
            const p = productos[i];

            html += `
                <article class="prod melegidos">
                    <img src="${p.thumbnail}" alt="${p.title}">
                    <h1>${p.title}</h1>
                    <p class="homep">${p.description}</p>
                    <h2>$${p.price}</h2>
                    <p class="vermas">
                        <a href="./product.html?id=${p.id}">VER MÁS</a>
                    </p>
                </article>
            `;
        }

        lista.innerHTML = html;
    })
    .catch(function(error){
        console.log("Error: " + error);
        lista.innerHTML = "<p>No se pudieron cargar productos.</p>";
    });
