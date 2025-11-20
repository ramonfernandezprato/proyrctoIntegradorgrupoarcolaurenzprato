let dataUsuario = localStorage.getItem('email');
let saludo = document.querySelector('.h1a');
let mensaje = document.querySelector('.obligatorio_1');
let lista = document.querySelector('.headhome ul');

if (dataUsuario) {
    if (saludo) {
        saludo.innerText = `Bienvenido ${dataUsuario}`;
    }
    if (mensaje) {
        mensaje.innerText = "Nos alegra que te unas a Mundo Gourmet";
    }
    if (lista) {
        lista.innerHTML = `
            <li class="head1"><a href="./index.html">HOME</a></li>
            <li class="head1"><a href="./serch-results.html">PRODUCTOS</a></li>
            <li class="head1"><a href="./category.html">CATEGORIAS</a></li>
            <li class="head1"><a href="#contacto">CONTACTO</a></li>
            <li class="head1"><span style="color:white; font-weight:bold">Bienvenido: ${dataUsuario}</span></li>
            <li class="head1"><a href="#" id="logoutBtn">Logout</a></li>
        `;
    }
} else {
    if (saludo) {
        saludo.innerText = "";
    }
    if (mensaje) {
        mensaje.innerText = "";
    }
    if (lista) {
        lista.innerHTML = `
            <li class="head1"><a href="./index.html">HOME</a></li>
            <li class="head1"><a href="./serch-results.html">PRODUCTOS</a></li>
            <li class="head1"><a href="./category.html">CATEGORIAS</a></li>
            <li class="head1"><a href="#contacto">CONTACTO</a></li>
            <li class="head1"><a class="login" href="./login.html">LOGIN</a></li>
            <li class="head1"><a class="registro" href="./register.html">REGISTER</a></li>
        `;
    }
}