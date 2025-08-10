document.addEventListener("DOMContentLoaded", function () {

    const usuario = JSON.parse(localStorage.getItem("usuarioCadastrado"));

    if (usuario && usuario.nome) {
        document.getElementById("usuarioNomeHtml").textContent = usuario.nome;
    }

});



document.addEventListener("DOMContentLoaded", function () {
    const botaoSair = document.getElementById("btnSaida");

botaoSair.addEventListener("click", function (){
     window.location.href = "index.html";
});







});