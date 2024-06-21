/*script para aparecer uma div de cada vez.*/

function toggleDisplay(divId) {
    const div = document.getElementById(divId);
    const divs = document.querySelectorAll('.pg-display-none');

    // Esconde todas as divs
    divs.forEach(div => {
        div.classList.remove('mostrar');
    });

    // Exibe apenas a div clicada
    div.classList.add('mostrar');
}

/*script para rolar a pagina ao topo assim que apertar algum botão no menu inferior.*/

function scrollToTop() {
    // Rola a página para o topo
    if ('scrollBehavior' in document.documentElement.style) {
        // Se suporta, use a rolagem suave
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Caso contrário, use a rolagem padrão
        window.scrollTo(0, 0);
    }
}

// A função toggleMenu adiciona ou remove a classe show no elemento nav, alternando a visibilidade do menu.
// A função toggleDisplay oculta todos os elementos com a classe content e exibe apenas o div correspondente ao link clicado.

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

function toggleDisplay(divId) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
        content.style.display = 'none';
    });

    var div = document.getElementById(divId);
    div.style.display = 'block';
}


function selecionarLink(link) {
    var links = document.querySelectorAll('.boxMenu li a');
    // Remover a classe 'ativo' de todos os links
    links.forEach(function (item) {
        item.classList.remove('ativo');
    });
    // Adicionar a classe 'ativo' ao link clicado
    link.classList.add('ativo');
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('menuIcon');

    menu.classList.toggle('show');
    menuIcon.classList.toggle('clicked'); // Adiciona ou remove a classe 'clicked' ao menu-icon
}





