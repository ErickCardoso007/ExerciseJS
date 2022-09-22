/* 
14)Faça um programa que calcule e mostre a área de um
círculo. Sabe-se que: Área = 1 * R?.
*/

let raio = parseFloat(prompt('Digite o valor do raio'))
let pi = Math.PI.toFixed(2)

raio = Math.pow(raio, 2)
area = pi * raio

console.log('A área do circulo é ' + area)