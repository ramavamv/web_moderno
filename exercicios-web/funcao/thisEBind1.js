const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// associado a função falar, vou chamar a função bind passando o objeto associado definido no this,
// quem é o this dentro da função falar?
// é a constanteo pessoa definida na linha 1
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


/**
 * no browser
 *
 * function f1 () { console.log(this === window) }
 * f1()
 * true // retorno true
 *
 * document é o documento da página, representa a página
 * document.getElementsByTagName('body')[0].onclick = f1 // quando clicar na página chamará a função f1
 * false // retornou false
 *
 * function f2 () { console.log(this === document) }
 * false
 * document.getElementsByTagName('body')[0].onclick = f2
 * false
 *
 * const body = document.getElementsByTagName('body')[0]
 * function f2 () { console.log(this === body) }
 * document.getElementsByTagName('body')[0].onclick = f2
 * true
 *
 * f2() // mas se chamar a função diretamente aqui será false, pois ela aponta para o objeto window
 * false
 *
 * // função arrow
 * const f3 = () => console.log(this === window)
 * f3()
 * true
 *
 * document.getElementsByTagName('body')[0].onclick = f3
 * true // ao clicar
 * f3()
 * true
 *
 * quando tem função tradicional do js definida com function o this pode variar
 * this representa o window?
 * this representa o elemento que cliquei?
 * this representa o objeto?
 * tudo isso depende de como acessará a função
 *
 * mas se estiver usando uma função arrow, o this não varia nunca
 * //o this é definido no momento que a função for definida, pegará o this associado ao contexto que a função foi definida, this lexico
 */