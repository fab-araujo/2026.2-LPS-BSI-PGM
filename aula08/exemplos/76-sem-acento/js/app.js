import { semAcento } from './texto.js';

console.log(semAcento('Açaí médio'));
console.log(semAcento('Açaí médio').includes('acai'));
console.log('Açaí médio'.toLowerCase().includes('acai'));
console.log(semAcento('Açaí médio').includes(semAcento('AÇAÍ')));
