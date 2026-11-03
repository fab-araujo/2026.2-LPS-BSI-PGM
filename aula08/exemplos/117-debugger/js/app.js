import { produtos } from './dados/produtos.js';
import { mostra } from './catalogo.js';
import { semAcento } from './texto.js';

const lista = document.querySelector('#lista');
const campo = document.querySelector('#busca');
const contador = document.querySelector('#contador');

const busca = () => {
  debugger;
  const termo = semAcento(campo.value);
  const achados = [];
  for (const produto of produtos) {
    if (semAcento(produto.nome).includes(termo)) {
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

campo.addEventListener('input', busca);
busca();
