/* 
12)Faça um programa que receba o valor dos catetos de um
triângulo, calcule e mostre o valor da hipotenusa.
(bi=c Ho).
*/

let valorCatetos = parseFloat(prompt("Digite o valor do cateto do triângulo "))
let catetoOposto = parseFloat(prompt("Digite o valor do cateto oposto do triângulo "))

let x = valorCatetos + catetoOposto
let y = Math.sqrt(x)

if (y == NaN) {
    alert('O número da raiz é negativa. Tente novamente!')
    location.reload()
} else {
    alert('O valor da hipotenusa é ' + y)
}




