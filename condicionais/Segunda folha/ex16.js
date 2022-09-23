/* 
16)Faça um programa que receba dois números, calcule e
mostre o primeiro número elevado ao segundo.
*/

let num1 = parseFloat(prompt('Digite o primeiro número '))
let num2 = parseFloat(prompt('Digite o segundo número '))

let resultado = Math.pow(num1, num2)

alert(num1 + ' elevado a ' + num2 + ' é ' + resultado)