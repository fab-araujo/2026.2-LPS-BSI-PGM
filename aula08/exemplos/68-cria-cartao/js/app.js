import { produtos } from './dados/produtos.js';
import { formataPreco } from './formato.js';

const lista = document.querySelector('#lista');

function criaCartao(produto) {
  const item = document.createElement('li');
  item.classList.add('cartao-produto');
  if (produto.destaque) {
    item.classList.add('destaque');
  }
  item.dataset.id = produto.id;
  item.dataset.categoria = produto.categoria;
  const cartao = document.createElement('article');
  const foto = document.createElement('img');
  foto.setAttribute('src', produto.imagem);
  foto.setAttribute('width', '640');
  foto.setAttribute('height', '480');
  foto.setAttribute('alt', produto.alt);
  const titulo = document.createElement('h3');
  titulo.textContent = produto.nome;
  const produtor = document.createElement('p');
  produtor.classList.add('produtor');
  produtor.textContent = produto.produtor;
  const preco = document.createElement('p');
  preco.classList.add('preco');
  preco.textContent = `${formataPreco(produto.preco)} ${produto.unidade}`;
  const botao = document.createElement('button');
  botao.setAttribute('type', 'button');
  botao.textContent = 'Adicionar';

  cartao.append(foto, titulo, produtor, preco, botao);
  item.append(cartao);
  return item;
}

for (const produto of produtos) {
  lista.append(criaCartao(produto));
}
