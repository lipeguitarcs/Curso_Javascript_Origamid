const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

// console.log(menu.classList);

const animais = document.querySelector('.animais');

console.log(animais.attributes[0]);

const img = document.querySelector('img');

const srcImg = img.getAttribute('src');

console.log(srcImg);

img.setAttribute('alt', 'É uma raposa');

const possuiAlt = img.hasAttribute('title');
console.log(possuiAlt);

const carro = {
  portas: 4,
  andar: function (km) {
    console.log(`Andou ${km}`);
  },
};
