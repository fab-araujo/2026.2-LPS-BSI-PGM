const abrir = document.querySelector('#abrir');
const aviso = document.querySelector('#aviso');
const fechar = document.querySelector('#fechar');

abrir.addEventListener('click', () => {
  aviso.showModal();
});

fechar.addEventListener('click', () => {
  aviso.close();
});
