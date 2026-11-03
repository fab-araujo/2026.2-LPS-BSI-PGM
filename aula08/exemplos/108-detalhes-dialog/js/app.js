import { produtos } from './dados/produtos.js';
import { mostra } from './catalogo.js';
import { semAcento } from './texto.js';
import { formataPreco } from './formato.js';

const lista = document.querySelector('#lista');
const campo = document.querySelector('#busca');
const contador = document.querySelector('#contador');
const carrinho = document.querySelector('#carrinho');
const botoes = document.querySelectorAll('.barra-categorias button');
const limpar = document.querySelector('#limpar');
const todos = document.querySelector('[data-categoria="todas"]');
const detalhes = document.querySelector('#detalhes');
const titulo = document.querySelector('#detalhes-titulo');
const foto = document.querySelector('#detalhes-foto');
const produtor = document.querySelector('#detalhes-produtor');
const preco = document.querySelector('#detalhes-preco');
const fechar = document.querySelector('#fechar');

let categoria = 'todas';
let total = 0;

const acha = (id) => {
  for (const produto of produtos) {
    if (produto.id === id) {
      return produto;
    }
  }
  return null;
};

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

limpar.addEventListener('click', () => {
  campo.value = '';
  categoria = 'todas';
  marca(todos);
  atualiza();
});

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
  if (botao !== null && botao.dataset.acao === 'detalhes') {
    const produto = acha(Number(botao.closest('li').dataset.id));
    titulo.textContent = produto.nome;
    foto.setAttribute('src', produto.imagem);
    foto.setAttribute('alt', produto.alt);
    produtor.textContent = produto.produtor;
    preco.textContent = `${formataPreco(produto.preco)} ${produto.unidade}`;
    detalhes.showModal();
  }
});

fechar.addEventListener('click', () => {
  detalhes.close();
});

atualiza();
