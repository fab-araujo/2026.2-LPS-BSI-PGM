import { produtos } from './dados/produtos.js';
import { mostra } from './catalogo.js';

const lista = document.querySelector('#lista');
const contador = document.querySelector('#contador');
const carrinho = document.querySelector('#carrinho');
const botoes = document.querySelectorAll('.barra-categorias button');
let total = 0;

const atualiza = (categoria) => {
  const achados = [];
  for (const produto of produtos) {
    if (categoria === 'todas' || produto.categoria === categoria) {
      achados.push(produto);
    }
  }
  mostra(lista, achados);
  contador.textContent = `Mostrando ${achados.length} de ${produtos.length} produtos.`;
};

for (const botao of botoes) {
  botao.addEventListener('click', () => {
    atualiza(botao.dataset.categoria);
  });
}

lista.addEventListener('click', (evento) => {
  const botao = evento.target.closest('[data-acao]');
  if (botao !== null && botao.dataset.acao === 'adicionar') {
    total = total + 1;
    carrinho.textContent = `Itens no carrinho: ${total}`;
  }
});

atualiza('todas');
