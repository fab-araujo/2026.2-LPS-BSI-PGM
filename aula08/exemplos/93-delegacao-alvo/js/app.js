import { produtos } from './dados/produtos.js';
import { mostra } from './catalogo.js';

const lista = document.querySelector('#lista');

mostra(lista, produtos);

lista.addEventListener('click', (evento) => {
  const botao = evento.target.closest('[data-acao]');
  console.log(evento.target, botao);
});
