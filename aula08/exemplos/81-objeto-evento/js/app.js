const botao = document.querySelector('#botao');

botao.addEventListener('click', (evento) => {
  console.log(evento.type, evento.target);
});
