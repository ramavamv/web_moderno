// IIFE -> Immediately Invoked Function Expression
// Expressão de função imediatamente invocada

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()


/** se algo é compartilhado com sua aplicação, que seja variável, outros códigos podem usar e gerar bug
 * melhor criar funções auto invocadas para fugir do escopo global no browsers
 */