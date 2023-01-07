const menuLista = document.querySelector('.menu_lista'); // Seleciona a lista de menu
const tituloTexto = document.querySelector('#titulo-texto'); // Seleciona o título da página
const display = document.querySelector('.display'); // Seleciona a div de display

const conteudo = {
    'Perfil': '<p>Conteúdo do perfil aqui</p><img height=200px src="assets/img/perfil.webp" alt="Foto">',
    'Curriculo': '<iframe style="width:100%; height:100%" src="/media/laiozago/BACKUP-LAIO/backup 31.12.2022/laiozago.com.br/Equacao_do_segundo_grau/index.html"></iframe>',
    'Projetos': 'Conteúdo dos projetos aqui',
    'Contato': 'Conteúdo do contato aqui',
};

display.innerHTML = conteudo['Perfil']; // Carrega o conteúdo do perfil para a div de display

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
