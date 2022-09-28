/*
 18)Faça um programa que receba o ano de nascimento de uma
pessoa e o ano atual, calcule e mostre:

a) a idade desta pessoa;

b) quantos anos ela terá em 2050.
*/

let anoN = parseFloat(prompt('Digite o ano que você nasceu? '))
let anoA = parseFloat(prompt('Digite o ano atual? '))

const calculaIdade = anoA - anoN
const calculaFuturo = 2050 - anoA
const idadeFuturo = calculaIdade + calculaFuturo
console.log('Você tem ' + calculaIdade + ' anos de vida')
console.log('Em 2050 você terá ' + idadeFuturo)