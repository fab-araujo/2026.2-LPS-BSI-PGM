const produtos = [
  { nome: 'Açaí médio', preco: 12, unidade: 'o litro' },
  { nome: 'Jambu', preco: 4, unidade: 'o maço' },
  { nome: 'Cacau em amêndoa', preco: 25, unidade: 'o quilo' },
];
console.log(produtos.length);
console.log(produtos[1].nome);
for (const produto of produtos) {
  console.log(produto.nome, produto.preco);
}
