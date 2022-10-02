/* 
5. Construir um algoritmo que leia dois números e efetue a adição. Caso o valor somado seja
maior que 20, este deverá ser apresentado somando-se a ele mais 8; caso o valor somado seja menor
ou igual a 20, este deverá ser apresentado subtraindo-se 5.
*/
const num1 = parseFloat(prompt('Digite um número'))
const num2 = parseFloat(prompt('Digite outro número'))

const adicao = num1 + num2

if (adicao > 20) {
    const soma = adicao + 8
    console.log(soma)
}
if (adicao <= 20) {
    const sub = adicao - 5
    console.log(sub)
}
