const lista = document.querySelector('#lista');
const produto = { nome: `<img src=x onerror="console.log('executou')">` };

const item = document.createElement('li');
item.innerHTML = `<h3>${produto.nome}</h3>`;
lista.append(item);
