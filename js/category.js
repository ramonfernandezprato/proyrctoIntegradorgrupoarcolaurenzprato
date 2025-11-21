let params = new URLSearchParams(window.location.search);
let categoriaId = params.get("id"); 
let titulo = document.getElementById("tituloCategoria");
let lista = document.querySelector(".listaProductos");

if (!categoriaId) {
    titulo.innerText = "CATEGORÍA NO ENCONTRADA";
    lista.innerHTML = "<p>No se seleccionó ninguna categoría.</p>";
}

titulo.innerText = categoriaId.toUpperCase();

fetch(`https://dummyjson.com/products/category/${categoriaId}`)
    .then(res => res.json())
    .then(data => {

        const productos = data.products;
        let html = "";

        productos.forEach(p => {
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
        });

        lista.innerHTML = html;
    })
    .catch(err => {
        console.log(err);
        lista.innerHTML = "<p>No se pudieron cargar productos.</p>";
    });