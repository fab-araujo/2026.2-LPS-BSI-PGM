import { produtos } from './dados/produtos.js';
import { mostra } from './catalogo.js';
import { semAcento } from './texto.js';

const lista = document.querySelector('#lista');
const campo = document.querySelector('#busca');

const busca = () => {
  const termo = semAcento(campo.value);
  const achados = [];
  for (const produto of produtos) {
    if (semAcento(produto.nome).includes(termo)) {
      achados.push(produto);
    }
  }
  mostra(lista, achados);
};

campo.addEventListener('input', busca);
busca();
