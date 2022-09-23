/* 
15)Faça um programa que solicite um número positivo e
maior que zero, calcule e mostre:

a) o número digitado ao quadrado;

b) o número digitado ao cubo;

c) a raiz quadrada do número digitado;

d) a raiz cúbica do número digitado.
*/

let num = parseFloat(prompt('Digite um número positivo'))

let quadrado = Math.pow(num, 2)
let cubo = Math.pow(num, 3)
const raiz = Math.sqrt(num).toFixed(2)
const raizCubica = Math.cbrt(num).toFixed(2)

if (num <= 0) {
    alert('O número digitado tem que ser maior que zero')
    location.reload()
} else {
    console.log(num + ' ao quadrado é ' + quadrado);
    console.log(num + ' ao cubo é ' + cubo);
    console.log('A raiz quadrada de ' + num + ' é ' + raiz)
    console.log('A raiz cúbica de ' + num + ' é ' + raizCubica);
}


