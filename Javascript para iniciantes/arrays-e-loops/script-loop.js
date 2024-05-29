for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i < 10) {
  console.log('i', i);
  i = i + 5;
}

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);

  if (videoGames[item] === 'PS4') {
    break;
  }
}

videoGames.forEach(function (item) {
  console.log(item);
});

var frutas = ['Pera', 'Maçã', 'Banana', 'Abacaxi'];

frutas.forEach(function (fruta, index, array) {
  frutas.pop();
  console.log(fruta, index, array);
});

var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}
