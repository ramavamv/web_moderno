const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
// neste caso imprimirá 2, 6 e 8 pois o array terá em memória o valor do let em cada posição
funcs[2]()
funcs[6]()
funcs[8]()