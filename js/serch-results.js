let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let resultado = queryStringObj.get("buscar");
console.log(resultado);

fetch(`https://dummyjson.com/products/search?q=${resultado}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    console.log(data);

    let tituloBusqueda = document.querySelector(".h1h1");
   
    if (resultado && data.products.length > 0) {
      tituloBusqueda.innerText = `Resultados de Búsqueda: "${resultado}"`;
  } 
    else if (resultado && data.products.length === 0) {
      tituloBusqueda.innerText = `No se han encontrado resultados para: "${resultado}"`;
  } 
    else {
      tituloBusqueda.innerText = "";
  }

    let productosHTML = "";

    for (let i = 0; i < data.products.length; i++) {
      let prod = data.products[i];

      productosHTML += `
        <div class="prod">
          <img src="${prod.images[0]}" alt="${prod.title}">
          <h3>${prod.title}</h3>
          <p>${prod.description}</p>
          <a href="./category.html">VER MAS</a>
        </div>`;
    }

    let aleatorias = document.querySelector(".aleatorias");
    if (aleatorias) {
      aleatorias.innerHTML = productosHTML;
    }

  })
  .catch(function(error) {
    console.log("Error: " + error);
  });