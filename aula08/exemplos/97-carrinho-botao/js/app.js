const botao = document.querySelector('#adicionar');
const carrinho = document.querySelector('#carrinho');
let total = 0;

botao.addEventListener('click', () => {
  total = total + 1;
  carrinho.textContent = `Itens no carrinho: ${total}`;
});
