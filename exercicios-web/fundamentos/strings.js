const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(2)) // pega o valor unicode do indice 2 tabela unicode https://symbl.cc/en/unicode-table/
console.log(escola.indexOf('3')) // pega o indice que o valor 3 está

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // do indice 0 pegue 3 caracteres

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // substitui o indice 3 por 2
console.log(escola.replace(/\d/, 'e')) // substitui todos os digitos pela letra e
console.log(escola.replace(/\w/g, 'e')) // substitui todos os digitos e letras pela letra e

console.log('Ana,Maria,Pedro'.split(',')) // converta a string em array, usando ',' como separador

console.log('Ana,Maria,Pedro'.split(/,/)) //poderia usar regex desta forma