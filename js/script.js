"use strict";

// Capturando o botão Menu pelo ID
const botaoMenu = document.getElementById("botao-menu");

// Capturando a navegação pelo ID
const menuPrincipal = document.getElementById("menu-principal");

// Detectando o clique no botão Menu
botaoMenu.addEventListener("click", function() {
    menuPrincipal.classList.toggle("menu-aberto");

    const menuAberto = menuPrincipal.classList.contains("menu-aberto");

    botaoMenu.setAttribute("aria-expanded", String(menuAberto));
});

// Atualiza o ano do rodapé automaticamente
const anoAtual = document.querySelector("[data-ano-atual]");

if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}

// Selecionando o formulário de contato
const formulario = document.querySelector("#formulario-contato");

if (formulario) {
    const nome = document.querySelector("#nome");
    const erroNome = document.querySelector("#erro-nome");

    // Capturando o campo E-mail e sua mensagem de erro
    const email = document.querySelector("#email");
    const erroEmail = document.querySelector("#erro-email");

    // Capturando o campo Assunto e sua mensagem de erro
    const assunto = document.querySelector("#assunto");
    const erroAssunto = document.querySelector("#erro-assunto");

    // Capturando o campo Mensagem e sua mensagem de erro
    const mensagem = document.querySelector("#mensagem");
    const erroMensagem = document.querySelector("#erro-mensagem");
    const mensagemStatus = document.querySelector("#mensagem-status");
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        let formularioValido = true;

        if (nome.value.trim().length < 3) {
    erroNome.textContent = "Digite um nome com pelo menos 3 caracteres.";
    nome.classList.add("campo-invalido");
    formularioValido = false;
} else {
    erroNome.textContent = "";
    nome.classList.remove("campo-invalido");

}

const emailDigitado = email.value.trim();

if (!emailDigitado.includes("@") || !emailDigitado.includes(".")) {
    erroEmail.textContent = "Digite um e-mail válido.";
    formularioValido = false;
} else {
    erroEmail.textContent = "";
    email.classList.remove("campo-invalido");
}

if (assunto.value === "") {
    erroAssunto.textContent = "Selecione um assunto.";
    assunto.classList.add("campo-invalido");
    formularioValido = false;
} else {
    erroAssunto.textContent = "";
    assunto.classList.remove("campo-invalido");
}

if (mensagem.value.trim().length < 10) {
    erroMensagem.textContent = "Digite uma mensagem com pelo menos 10 caracteres.";
    mensagem.classList.add("campo-invalido");
    formularioValido = false;
} else {
    erroMensagem.textContent = "";
    mensagem.classList.remove("campo-invalido");
}

if (formularioValido) {
    mensagemStatus.textContent = "Dados validados. A sugestão está pronta para envio.";
    mensagemStatus.className = "mensagem-status sucesso";
    formulario.reset();
    nome.focus();
} else {
    mensagemStatus.textContent = "Revise os campos indicados antes de continuar.";
    mensagemStatus.className = "mensagem-status erro";
}

        console.log("Botão Enviar clicado!");
    });
}
