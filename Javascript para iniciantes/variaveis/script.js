// Use variáveis para armazenar valores que se repetem
var nome = "Felipe";
var idade = 30;
var possuiFaculdade = false;

console.log(nome, idade, possuiFaculdade, nome);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

// Você pode criar várias variáveis utilizando vírgula
var sobrenome = 'Carvalho', 
    cidade = "São Paulo";

console.log(sobrenome, cidade);

// Você pode criar variáveis sem definir um valor
var semDefinir;
console.log(semDefinir);

/* 
Os nomes podem iniciar com $, _, ou letras. Não pode começar com número!
São case sensitive!
Não utilize palavras reservadas!
https://www.w3schools.com/js/js_reserved.asp
Camel case: comum nomear assim "abrirModal"
*/

// console.log(aindaNaoDefine);

console.log(comida);
var comida = "Pizza";
console.log(comida);

// "var" e "let" podem mudar de valor... "const" não!

var time = 'Corinthians';
time = 'São Paulo';
console.log(time);