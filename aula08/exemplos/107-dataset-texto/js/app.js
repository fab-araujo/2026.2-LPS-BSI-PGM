import { produtos } from './dados/produtos.js';
import { mostra } from './catalogo.js';

const lista = document.querySelector('#lista');

mostra(lista, produtos);

lista.addEventListener('click', (evento) => {
  const botao = evento.target.closest('[data-acao="detalhes"]');
  if (botao !== null) {
    const id = botao.closest('li').dataset.id;
    console.log(id, typeof id);
    console.log(id === produtos[0].id);
    console.log(Number(id) === produtos[0].id);
  }
});
