function areaQuadrado(lado) {
  return lado * lado;
}

console.log('Área ao Quadrado:')
console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log('Valor de PI:')
console.log(pi());

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log('IMC:')
console.log(imc(54, 1.68));

function corFavorita(cor) {
  if(cor === 'Azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'Verde') {
    return 'Eu gosto do mato';
  } else {
    return 'Eu não gosto de cores';
  }
}

function mostraConsole(){ 
  console.log('Oi') 
}

addEventListener('click', mostraConsole);

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

console.log('IMC2:')
imc2(54, 1.68)

function terceiraIdade(idade) {
  console.log(typeof idade);
  if(typeof idade !== 'number') {
    return 'Por favor, utilize números!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade('oi'))
// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`
}

// console.log(totalPaises); // Como está dentro do escopo da função "faltaVisitar", essa variável não aparecerá no escopo geral. Chama-se escopo lexo

var profissao = 'Designer';

function dados() {
  var nome = 'Felipe';
  var idade = 30;
  function outrosDados() {
    var endereco = 'São Paulo';
    var idade = 31;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro