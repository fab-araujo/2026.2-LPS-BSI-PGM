// js/formato.js — como o preço aparece na tela
export function formataPreco(valor) {
  return 'R$ ' + valor.toFixed(2).replace('.', ',');
}
