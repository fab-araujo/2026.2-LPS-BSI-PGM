import { produtos } from './dados/produtos.js';

console.log('total de produtos:', produtos.length);
console.log(produtos[0]);
console.table(produtos);
console.error('Sem estoque:', produtos[6].nome);
