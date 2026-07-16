function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa


//neste caso o this não vai variar pois foi criado a função arrow dentro do contexto da função Pessoa