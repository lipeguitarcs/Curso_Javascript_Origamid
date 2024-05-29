// Retorne no console todas as imagens do site

const images = document.querySelectorAll('img');

console.log(images);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const comecaComImagem = document.querySelectorAll('img[src^="img/imagem"]');

console.log(comecaComImagem);

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const animais = document.querySelector('.animais-descricao');
const h2Animais = animais.querySelector('h2');

console.log(h2Animais);

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[--paragrafos.length]);
