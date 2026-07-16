// cuidado ao atribuir valores para this neste caso, pois está no contexto global
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // true, estamos no contexto do node

const obj = {}
comparaComThis = comparaComThis.bind(obj) // obj como this
comparaComThis(global) // comparo this com global, false
comparaComThis(obj) // comparo this com obj, true por conta do bind

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true, pois a função agora foi definida dentro de um módulo do node, foi escrito no contexto léxico dentro do módulo

comparaComThisArrow = comparaComThisArrow.bind(obj) // aqui tentamos mudar o contexto do this para apontar para obj, porém não mudará pois o contexto arrow é mais forte
comparaComThisArrow(obj) // false
comparaComThisArrow(module.exports) //true