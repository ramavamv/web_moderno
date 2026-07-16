const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()  // imprime Global por conta do contexto Léxico, ela foi declarada no contexto Léxico contextoLexico.js (module.exports) módulo contextoLexico.js
// a função carrega consigo o local onde ela foi declarada, então ela vai procurar dentro do cotexto que ela foi definida