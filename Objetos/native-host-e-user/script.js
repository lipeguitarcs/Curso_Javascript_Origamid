// Liste 5 objetos nativos
Object;
String;
Array;
Function;
Math;

// Liste 5 objetos do browser
NodeList;
HTMLCollection;
Element;
window;
history;
document;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitHidden !== 'undefined') {
  console.log('Existe');
} else {
  console.log('Não Existe');
}
