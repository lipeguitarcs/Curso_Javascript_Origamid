var idade = 30;
var simbolo = Symbol()
console.log(typeof simbolo);

var nome = 'Felipe';
var sobrenome = "Carvalho"
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(typeof frase);

var ano = 2018;
var mes = 8;
console.log(ano + mes);

var melhor = 'teste';
// var frase1 = 'Esse é o ' + melhor +'jogo!';
var frase1 = 'Esse é o \'melhor\' jogo!';
console.log(frase1)

console.log('Isso mesmo')

// Template string 

var gols = 1000;
var frase2 = 'Romário fez ' + gols + ' gols';
var frase3 = `Romário fez ${gols * 2} gols`; // Utilizando Template String
console.log(frase2)
console.log(frase3)