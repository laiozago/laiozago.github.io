// Seleciona todos os itens da lista com a classe menu_lista
const listItems = document.querySelectorAll('.menu_lista');
//Seleciona o h1
const titulo = document.querySelector('#titulo-texto');
//Seleciona o display
const display = document.querySelector('.display');

// Adiciona um evento de click a cada um dos itens da lista
listItems.forEach(item => {
    item.addEventListener('click', event => {
    // Obtém o elemento clicado
    const clickedItem = event.target;

    // Seleciona os outros elementos do HTML que devem receber a classe
    const otherElements = document.querySelectorAll('.other-element');

    // Adiciona a classe "selected" ao elemento clicado
    clickedItem.classList.add('selected');

    // Remove a classe "selected" dos outros elementos
    otherElements.forEach(element => {
        element.classList.remove('selected');
    });
    });
});
