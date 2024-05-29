var pessoa = {
  nome: 'Felipe',
  idade: 30,
}

var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  }
}

// Abreviação:
var quadradoAbreviado = {
  lados: 4,
  area(lado){
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.table(quadrado);

var height = 120; // Variável fora do escopo da função
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  }
}

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function() {
  console.log('Escondi');
}

var bg = menu.backgroundColor;
