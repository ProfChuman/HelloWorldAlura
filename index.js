window.onload = function() {
    let nomeUsuario = prompt("Qual o seu nome?");

    elemento = document.getElementById("nome-usuario");
    elemento.textContent = nomeUsuario;
};
