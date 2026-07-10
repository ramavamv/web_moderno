// var não tem escopo de bloco, por este motivo ele será impresso 'i = 10'
for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i)