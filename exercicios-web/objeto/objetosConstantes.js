// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro' // já aqui atribuo valor para o atributo
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }  // gera erro pois não posso atribuir outro valor para uma constante pessoa

Object.freeze(pessoa) // não consegue mais mexer no objeto a partir desta linha

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)