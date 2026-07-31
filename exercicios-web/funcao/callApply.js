function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //neste contexto ele acesso do global, então se não houver global ele não conseguira calcular e apresentará NaN
console.log(produto.getPreco()) //a partir do objeto ele consegue acessar o getPreco



const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // contexto, e os parâmetros que está passando para funçao getPreco
console.log(getPreco.apply(global, [0.17, '$'])) // apply espera os parâmetros da função getPreco dentro de um array