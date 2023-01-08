const menuLista = document.querySelector('.menu_lista'); // Seleciona a lista de menu
const tituloTexto = document.querySelector('#titulo-texto'); // Seleciona o título da página
const display = document.querySelector('.display'); // Seleciona a div de display

const conteudo = {
    'Perfil': `
    <h1 class="apresentacao-info--nome">Laio Zago</h1>
    <p class="apresentacao-info--texto">Sou professor de matemática com turmas de ensino fundamental e médio. Nessa jornada em sala de aula aprendo diariamente, sobre mim mesmo, sobre liderança, organização, como lidar com pessoas e muito mais.</p>
    <p class="apresentacao-info--texto">Atualmente faço curso de Desenvolcedor FullStack na GrowDev e busco oportunidade para contribuir e aplicar os novos conhecimentos.</p>
    `,
    'Curriculo': `
    <object class="object_curriculo" data="./assets/Currículo.pdf" type="application/pdf">
      <p>Seu navegador não suporta o elemento <code>object</code>. Clique aqui para <a download href="./assets/Currículo.pdf">baixar o arquivo PDF</a>.</p>
    </object>
    `,
    'Projetos': 'Conteúdo dos projetos aqui',
    'Contato': `
    <div class="rodape-info">
    <div class="info-contatos">
        <h2 class="info-contato--titulo">Contato</h2>
        <div class="info-contato--links">
            <a href="https://api.whatsapp.com/send?phone=5521999036284" aria-label="Link para o whatsapp" target="_blank"><i class="fa-brands fa-2xl fa-square-whatsapp"></i></a>
            <a href="mailto:laiozago@gmail.com?subject=Portifólio" aria-label="Link para me mandar email" target="_blank"><i class="fa-solid fa-2xl fa-envelope"></i></a>
            <a href="https://discord.com/users/laiozago#3369" aria-label="link para meu discord" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-2xl fa-discord"></i></a>
        </div>
    </div>
    <div class="info-redes">
        <h2 class="info-redes--titulo">Redes Sociais</h2>
        <div class="info-redes--links">
            <a href="https://github.com/laiozago" aria-label="Link para o meu github" target="_blank"><i class="fa-brands fa-2xl fa-github"></i></a>
            <a href="https://twitter.com/laiozago" aria-label="Link para o meu twitter" target="_blank"><i class="fa-brands fa-2xl fa-square-twitter"></i></a>
            <a href="https://www.linkedin.com/in/laiozago/" aria-label="Link para o meu linkedin" target="_blank"><i class="fa-brands fa-2xl fa-linkedin"></i></a>
        </div>
    </div>
</div>
    `,
};

display.innerHTML = conteudo['Perfil']; // Carrega o conteúdo do perfil para a div de display
// alert("Esta página ainda está em desenvolvimento"); // Exibe um alerta com a mensagem "Esta página ainda está em desenvolvimento"
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
