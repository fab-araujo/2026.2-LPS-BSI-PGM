const abrir = document.querySelector('#abrir');
const aviso = document.querySelector('#aviso');

abrir.addEventListener('click', () => {
  aviso.showModal();
});
