/* 
19) O custo ao consumidor de um carro novo é a soma do
preço de fábrica com o percentual de lucro do distribuidor
e dos impostos aplicados ao preço de fábrica. Faça um
programa que recebe o preço de fábrica de um veículo, o
percentual de lucro do distribuidor e o percentual de
impostos, calcule e mostre:

a) o valor correspondente ao lucro do distribuidor;

b) o valor correspondente aos impostos;

c) o preço final do veículo.
*/

let precoFabrica = parseFloat(prompt('Qual é o preço de fabrica do veiculo?'))
let percentualLucro = parseFloat(prompt('Qual é o percentual de lucro'))
let percentualImposto = parseFloat(prompt('Qual é o de imposto?'))

let calcPercentualLucro = (precoFabrica * percentualLucro) / 100
let calcpercentualImposto = (precoFabrica * percentualImposto) / 100

let custoConsumidor = precoFabrica + calcPercentualLucro + percentualImposto

console.log('lucro distribuidora: ' + calcPercentualLucro);
console.log('imposto: ' + calcpercentualImposto);
console.log('total: ' + custoConsumidor);