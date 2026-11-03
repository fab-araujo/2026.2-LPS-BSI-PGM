// js/texto.js — compara texto sem se importar com acento nem com maiúscula
export function semAcento(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
