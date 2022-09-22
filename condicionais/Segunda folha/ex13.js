/*
13)Faça um programa que calcule e mostre a área de um
triângulo. Sabe-se que: Área = (base * altura)/2.
*/

let base = parseFloat(prompt('Digite o valor da base'))
let altura = parseFloat(prompt('Digite o valor da altura'))

let area = (base * altura) / 2
console.log('A área do triângulo é ' + area)