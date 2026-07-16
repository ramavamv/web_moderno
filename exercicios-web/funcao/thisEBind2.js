function Pessoa() {
    this.idade = 0


    // usando desta forma evita o this variar
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)



    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // assim amarro o this do objeto na chamada desta função, neste caso de fato o this aponta para this da pessoa


    // neste caso, passei esta função para o setInterval, dentro do setInterval tenho um temporizador, e este temporizador quer disparará a função, então o this neste caso apontará para outro lugar e não para o objeto pessoa
                        // função anônima
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

// solução 1 usando bind
// solução 2, armazena o this numa constante, no momento que o this aponta para o objeto que quer referenciar, então usa esta constante para usar o this

// setInterval dispara outra função a partir de um determinado intervalo