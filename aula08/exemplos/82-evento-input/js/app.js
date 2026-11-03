const campo = document.querySelector('#busca');

campo.addEventListener('input', (evento) => {
  console.log(evento.target.value);
});
