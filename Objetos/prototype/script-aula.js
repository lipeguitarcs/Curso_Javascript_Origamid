function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return 'Abraçou';
  };
}

var obj = {
  nome: 'Felipe',
  idade: 30,
};

Pessoa.prototype.andar = function () {
  return this.nome + ' Pessoa andou';
};
Pessoa.prototype.nadar = function () {
  return this.nome + ' Pessoa nadou';
};

const felipe = new Pessoa('Felipe', 30);

// console.log(Pessoa.prototype);
// console.log(felipe.prototype);

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true;
  },
};
