// Retorne o url da página atual utilizando o objeto window

const url = window.location.href;

console.log('url: ' + url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const primeiroAtivo = document.querySelector('.ativo');

console.log(primeiroAtivo);

// Retorne a linguagem do navegador

const language = window.navigator.language;

console.log(language);

// Retorne a largura da janela

console.log(window.innerWidth + 'px');
