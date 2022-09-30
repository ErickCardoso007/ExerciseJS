/* 
1. Construa um algoritmo que leia dois valores numéricos inteiros e efetue a adição; caso o
resultado seja maior que 50, apresentá-lo.
*/

let num1 = parseFloat(prompt('Digite um número'))
let num2 = parseFloat(prompt('Digite outro número'))

let soma = num1 + num2
if (soma > 50) {
    console.log(soma)
}