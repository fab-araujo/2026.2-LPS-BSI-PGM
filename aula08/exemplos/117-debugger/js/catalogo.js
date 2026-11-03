import { formataPreco } from './formato.js';

const modelo = document.querySelector('#modelo-cartao');

export function criaCartao(produto) {
  const copia = modelo.content.cloneNode(true);
  const item = copia.querySelector('li');
  if (produto.destaque) {
    item.classList.add('destaque');
  }
  item.dataset.id = produto.id;
  item.dataset.categoria = produto.categoria;

  const foto = copia.querySelector('img');
  foto.setAttribute('src', produto.imagem);
  foto.setAttribute('alt', produto.alt);
  copia.querySelector('h3').textContent = produto.nome;
  copia.querySelector('.produtor').textContent = produto.produtor;
  copia.querySelector('.preco').textContent = `${formataPreco(produto.preco)} ${produto.unidade}`;
  return item;
}

export function mostra(lista, itens) {
  lista.replaceChildren();
  for (const produto of itens) {
    lista.append(criaCartao(produto));
  }
}
