const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)

//função anônima
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

// função anônima arrow
imprimirResultado(3, 4, (x, y) => x * y)

// criado função dentro de um objeto
const pessoa = {
    falar: function () {      // atributo função
        console.log('Opa')
    }
}

pessoa.falar()