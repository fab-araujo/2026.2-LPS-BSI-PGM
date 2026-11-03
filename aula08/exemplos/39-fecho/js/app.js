const produtos = [
  { id: 1, nome: 'Açaí médio', produtor: 'Sítio Boa Vista, Colônia do Uraim', categoria: 'Frutos da floresta', preco: 12, unidade: 'o litro', imagem: 'acai.jpg', alt: 'Tigela de açaí batido, com duas colheres de plástico', destaque: true },
  { id: 2, nome: "Farinha d'água", produtor: 'Casa de Farinha São José, Comunidade Nova Vida', categoria: 'Derivados da mandioca', preco: 90, unidade: 'a lata', imagem: 'farinha.jpg', alt: 'Pote de farinha de mandioca sobre a mesa', destaque: false },
  { id: 3, nome: 'Banana-prata', produtor: 'Sítio Três Irmãos, Colônia do Uraim', categoria: 'Frutos da floresta', preco: 8, unidade: 'a dúzia', imagem: 'banana.jpg', alt: 'Cachos de banana empilhados numa banca de feira', destaque: false },
  { id: 4, nome: 'Pimenta-do-reino', produtor: 'Sítio Santa Luzia, beira do rio Capim', categoria: 'Especiarias', preco: 30, unidade: 'o quilo', imagem: 'pimenta.jpg', alt: 'Grãos de pimenta-do-reino espalhados num prato branco', destaque: false },
  { id: 5, nome: 'Cacau em amêndoa', produtor: 'Sítio Cacau do Capim, beira do rio Capim', categoria: 'Cacau e chocolate', preco: 25, unidade: 'o quilo', imagem: 'cacau.jpg', alt: 'Mãos abrindo um fruto de cacau vermelho, com a polpa branca à mostra', destaque: false },
  { id: 6, nome: 'Polpa de cupuaçu', produtor: 'Sítio Boa Vista, Colônia do Uraim', categoria: 'Frutos da floresta', preco: 22, unidade: 'o quilo', imagem: 'cupuacu-640.jpg', alt: 'Cupuaçu aberto ao meio, com a polpa branca', destaque: false },
  { id: 7, nome: 'Jambu', produtor: 'Horta da Dona Rosa, Colônia do Uraim', categoria: 'Hortaliças e temperos', preco: 4, unidade: 'o maço', imagem: 'jambu.jpg', alt: 'Flor de jambu, amarela com o centro vermelho', destaque: false },
];

function formataPreco(valor) {
  return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

console.log(produtos);
for (const produto of produtos) {
  console.log(`${produto.nome} — ${formataPreco(produto.preco)} ${produto.unidade}`);
}
