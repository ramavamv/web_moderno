// função normal
let dobro = function (a) {
    return 2 * a
}

// sobrescrita com função arrow(arrow sempre é uma função anônima)
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))



let ola = function () {
    return 'Olá'
}

// refatorando a função acima para uma função arrow
ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())