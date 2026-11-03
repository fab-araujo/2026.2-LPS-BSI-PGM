import { produtos } from './dados/produtos.js';
import { semAcento } from './texto.js';

const campo = document.querySelector('#busca');

const busca = () => {
  const termo = semAcento(campo.value);
  const achados = [];
  for (const produto of produtos) {
    if (semAcento(produto.nome).includes(termo)) {
      achados.push(produto.nome);
    }
  }
  console.log(achados);
};

campo.addEventListener('input', busca);
