const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
// por "var" nao ter escopo de função, imprimirá 10 para todas as posições do array
funcs[2]()
funcs[8]()