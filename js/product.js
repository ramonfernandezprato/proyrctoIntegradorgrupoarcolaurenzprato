let query = location.search;
let queryObj = new URLSearchParams(query);
let productoElegido = queryObj.get("id");

let productUrl = "https://dummyjson.com/products/" + productoElegido;

let producto = document.querySelector(".thermodetalle");
let texto = document.querySelector(".textodetalle");
let descripcion = document.querySelector(".textodetalle1");
let reviews = document.getElementById("resenasApi");

fetch(productUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        producto.innerHTML = `
            <img class="thermodetalle1" src="${data.images[0]}" alt="${data.title}">
        `;

        texto.innerHTML = `
            <h2>${data.title}</h2>
            <h3>$${data.price}</h3>
            <p>${data.discountPercentage}% OFF</p>
            <div class="stockproductobox">
                <p class="stockproducto">Stock disponible: ${data.stock}</p>
            </div>
            <p class="envioproducto">Categoría: ${data.category}</p>
            <div class="buttonbox1">
                <button class="buttoncarrito" type="submit">AGREGAR AL CARRITO</button>
            </div>
        `;

        descripcion.innerHTML = `
            <div class="ptextodetalle1">
                <p><b>Descripción:</b></p>
            </div>
            <div class="ptextodetalle1">
                <p>${data.description}</p>
            </div>
        `;

        reviews.innerHTML = "<h2>Comentarios:</h2>";

        if (!data.reviews || data.reviews.length === 0) {
            reviews.innerHTML += "<p>No hay reseñas disponibles.</p>";
        }

        for (let i = 0; i < data.reviews.length; i++) {
            let review = data.reviews[i];
            let emojiRating = "";

            for (let r = 0; r < review.rating; r++) {
                emojiRating += "★";
            }

            reviews.innerHTML += `
                <div class="comentarios-caja">
                    <h3 class = "estrellas"> ${emojiRating}</h3>
                    <p><strong>${review.reviewerName}:</strong> "${review.comment}"</p>
                    <p>${review.date}</p>
                </div>
            `;
        }

    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });
