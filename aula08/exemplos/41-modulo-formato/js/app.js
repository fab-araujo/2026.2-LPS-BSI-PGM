import { produtos } from './dados/produtos.js';
import { formataPreco } from './formato.js';

for (const produto of produtos) {
  console.log(`${produto.nome} — ${formataPreco(produto.preco)} ${produto.unidade}`);
}
