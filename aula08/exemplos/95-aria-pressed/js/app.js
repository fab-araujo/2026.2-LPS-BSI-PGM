import { produtos } from './dados/produtos.js';
import { mostra } from './catalogo.js';
import { semAcento } from './texto.js';

const lista = document.querySelector('#lista');
const campo = document.querySelector('#busca');
const contador = document.querySelector('#contador');
const carrinho = document.querySelector('#carrinho');
const botoes = document.querySelectorAll('.barra-categorias button');

let categoria = 'todas';
let total = 0;

const atualiza = () => {
  const termo = semAcento(campo.value);
  const achados = [];
  for (const produto of produtos) {
    const daCategoria = categoria === 'todas' || produto.categoria === categoria;
    const doTexto = semAcento(produto.nome).includes(termo);
    if (daCategoria && doTexto) {
      achados.push(produto);
    }
  }
  mostra(lista, achados);
  if (achados.length === 0) {
    contador.textContent = `Nenhum produto encontrado para “${campo.value}”.`;
  } else {
    contador.textContent = `Mostrando ${achados.length} de ${produtos.length} produtos.`;
  }
};

const marca = (ativo) => {
  for (const botao of botoes) {
    botao.setAttribute('aria-pressed', 'false');
  }
  ativo.setAttribute('aria-pressed', 'true');
};

campo.addEventListener('input', atualiza);

for (const botao of botoes) {
  botao.addEventListener('click', () => {
    categoria = botao.dataset.categoria;
    marca(botao);
    atualiza();
  });
}

lista.addEventListener('click', (evento) => {
  const botao = evento.target.closest('[data-acao]');
  if (botao !== null && botao.dataset.acao === 'adicionar') {
    total = total + 1;
    carrinho.textContent = `Itens no carrinho: ${total}`;
  }
});

atualiza();
