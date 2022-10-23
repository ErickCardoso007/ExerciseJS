/* 
7. Escreva um algoritmo que receba um número e imprima uma das mensagens: “é múltiplo 
de 3” ou “não é múltiplo de 3”.
*/

const num = parseFloat(prompt('Digite um número'))

let condicao = num & 1 ? "é múltiplo de 3" : "é múltiplo de 3"
console.log(condicao)
