
/* 
4) Faça um programa que receba três notas, calcule e mostre
a média aritmética entre elas.
*/

let nota1 = parseFloat(prompt('Digite a sua nota'))
let nota2 = parseFloat(prompt('Digite uma nova nota'))
let nota3 = parseFloat(prompt('Digite a sua nota novamente'))

let media = (nota1 + nota2 + nota3) / 3
alert('A média das suas notas é ' + media)