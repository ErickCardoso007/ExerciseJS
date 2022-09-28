/* 
17) Sabe-se que:
1 pé = 12 polegadas;
1 jarda = 3 pés;
1 milha = 1760 jardas.
Faça um programa que receba uma medida em pés, faça as
conversões a seguir e mostre os resultados.
a) Polegadas;
b) Jardas;
c) Milhas.
*/

let tamanho = parseFloat(prompt('Digite sua medida'))


let pole = tamanho * 12
let jarda = tamanho / 3
let milha = 1760 * 3

console.log(pole + jarda + milha);



