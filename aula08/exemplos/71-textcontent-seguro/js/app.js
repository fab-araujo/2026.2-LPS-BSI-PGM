const lista = document.querySelector('#lista');
const produto = { nome: `<img src=x onerror="console.log('executou')">` };

const item = document.createElement('li');
const titulo = document.createElement('h3');
titulo.textContent = produto.nome;
item.append(titulo);
lista.append(item);
