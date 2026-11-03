import { produtos } from './dados/produtos.js';
import { mostra } from './catalogo.js';

const lista = document.querySelector('#lista');
const contador = document.querySelector('#contador');
const botoes = document.querySelectorAll('.barra-categorias button');

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

atualiza('todas');
