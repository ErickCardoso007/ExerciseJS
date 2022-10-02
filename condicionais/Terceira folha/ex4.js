/* 
4. Escreva um algoritmo para determinar se um dado número N, recebido através do teclado, é
POSITIVO, NEGATIVO ou NULO. 
*/

let num = parseFloat(prompt('Digite um número'))

if (num > 0) {
    console.log('POSITIVO')
}
if (num < 0) {
    console.log('NEGATIVO')
}
if (num == 0) {
    console.log('NULO')
}

