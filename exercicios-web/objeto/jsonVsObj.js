// o JSON serve para comunicar entre sistemas em formatos diferentes
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(obj) // { a: 1, b: 2, c: 3, soma: [Function: soma] }
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3} converto objeto em JSON formato string

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) FORMATO INVÁLIDO DE JSON
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) FORMATO INVÁLIDO DE JSON
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // transformo JSON em obj
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))