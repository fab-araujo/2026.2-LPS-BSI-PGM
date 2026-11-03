const nomes = ['Açaí médio', "Farinha d'água", 'Banana-prata', 'Pimenta-do-reino',
  'Cacau em amêndoa', 'Polpa de cupuaçu', 'Jambu'];
const comO = [];
for (const nome of nomes) {
  if (nome.toLowerCase().includes('o')) {
    comO.push(nome);
  }
}
console.log(comO);
