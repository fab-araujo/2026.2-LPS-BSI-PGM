import { produtos } from './dados/produtos.js';
import { criaCartao } from './catalogo.js';

const lista = document.querySelector('#lista');

for (const produto of produtos) {
  lista.append(criaCartao(produto));
}
