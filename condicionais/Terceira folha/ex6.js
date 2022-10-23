/* 
6. Escreva um algoritmo que leia um número e imprima a raiz quadrada do número, caso ele seja
positivo ou igual a zero; e o quadrado do número, caso ele seja negativo.
*/

const raiz = (num1) => {
    let raizNum = Math.sqrt(num1)
    console.log(raizNum);
    if (raizNum >= 0) {
        console.log('positivo');
    }
    if (raizNum = NaN) {
        console.log(raizNum);
    }

}
console.log(raiz(-12));
