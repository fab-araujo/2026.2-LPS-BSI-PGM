import { produtos } from './dados/produtos.js';
import { criaCartao } from './catalogo.js';

const lista = document.querySelector('#lista');

function mostra() {
  for (const produto of produtos) {
    lista.append(criaCartao(produto));
  }
}

mostra();
mostra();
console.log(document.querySelectorAll('.cartao-produto').length);
