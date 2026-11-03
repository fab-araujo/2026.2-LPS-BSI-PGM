const nome = 'Açaí';
const semMarcas = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

console.log(semMarcas);
console.log(semMarcas.length);
console.log(semMarcas.toLowerCase());
console.log(semMarcas === 'Acai');
