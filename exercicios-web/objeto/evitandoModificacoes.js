// Object.preventExtensions  impede que este objeto seja estendido, impedindo aumentar a quantidade de atributos neste objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // Extensível: false

produto.nome = 'Borracha'  // permite alterar o valor pois o atributo não está congelado
produto.descricao = 'Borracha escolar branca' // não pode ser acrescentado atributos
delete produto.tag // pode ser excluído
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // quando sela um obj não é possível adicionar novos atributos nem excluir, mas consegue modificar os valores dos atributos
console.log('Selado:', Object.isSealed(pessoa)) // Selado: true

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // { nome: 'Juliana', idade: 29 }

// Object.freeze = selado + valores constantes