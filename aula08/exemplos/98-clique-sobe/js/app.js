const lista = document.querySelector('#lista');
const cartao = document.querySelector('#cartao');
const botao = document.querySelector('#botao');

botao.addEventListener('click', () => {
  console.log('botão');
});

cartao.addEventListener('click', () => {
  console.log('cartão');
});

lista.addEventListener('click', (evento) => {
  console.log('lista', evento.target.id);
});
