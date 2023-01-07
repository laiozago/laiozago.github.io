const menuLista = document.querySelector('.menu_lista'); // Seleciona a lista de menu
const tituloTexto = document.querySelector('#titulo-texto'); // Seleciona o título da página
const display = document.querySelector('.display'); // Seleciona a div de display

const conteudo = {
    'Perfil': '<p>Conteúdo do perfil aqui</p><img src="foto.jpg" alt="Foto">',
    'Curriculo': 'Conteúdo do currículo aqui',
    'Projetos': 'Conteúdo dos projetos aqui',
    'Contato': 'Conteúdo do contato aqui',
};

menuLista.addEventListener('click', event => { // Adiciona um evento de clique na lista de menu
  tituloTexto.textContent = event.target.textContent; // Atualiza o texto do título da página para o texto do li clicado
  display.innerHTML = conteudo[event.target.textContent]; // Atualiza o conteúdo da div de display para o conteúdo correspondente ao li clicado

  // Remove a classe "selected" de todos os li
    for (const li of menuLista.children) {
    li.classList.remove('selected');
}

  // Adiciona a classe "selected" apenas no li clicado
    event.target.classList.add('selected');
});
