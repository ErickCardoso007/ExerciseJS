/* 
3. Construa um algoritmo que determine (imprima) se um dado número N inteiro, recebido
através do teclado, é PAR ou IMPAR.
*/

let num = parseInt(prompt('Digite um número inteiro:'))

if (num % 2 == 0) {
    console.log('Par')
}
if (num % 2 != 0) {
    console.log('Impar')
}
