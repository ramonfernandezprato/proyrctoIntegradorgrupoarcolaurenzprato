const params = new URLSearchParams(window.location.search);
const categoriaId = params.get("id"); // viene desde index

// 2. Seleccionar elementos del HTML
const titulo = document.getElementById("tituloCategoria");
const lista = document.querySelector(".listaProductos");

// 3. Si por algún motivo no mandaron categoría
if (!categoriaId) {
    titulo.innerText = "CATEGORÍA NO ENCONTRADA";
    lista.innerHTML = "<p>No se seleccionó ninguna categoría.</p>";
}

// 4. Mostrar la categoría arriba (en mayúsculas)
titulo.innerText = categoriaId.toUpperCase();

// 5. Llamar a la API
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