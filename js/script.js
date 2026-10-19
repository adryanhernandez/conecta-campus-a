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
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        console.log("Botão Enviar clicado!");
    });
}