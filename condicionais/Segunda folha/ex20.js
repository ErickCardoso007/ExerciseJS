/* 
20) Faça um programa que receba o número de horas
trabalhadas e o valor do salário mínimo, calcule e mostre o
salário a receber seguindo estas regras:

a) a hora trabalhada vale 1 10 do salário mínimo;

b) o salário bruto equivale ao número de horas trabalhadas
multiplicado pelo valor da hora trabalhada;

c) o imposto equivale a 3% do salário bruto;

d) o salário a receber equivale ao salário bruto menos o
imposto.

*/

let horasT = parseFloat(prompt('Digite quantas horas você trabalhou'))
let salarioMin = parseFloat(prompt('Digite quanto está o salário minimo'))

let valorHoraTrabalhada = (salarioMin * 1.10) - salarioMin
let salarioBruto = horasT * valorHoraTrabalhada
let imposto = (salarioBruto * 3) / 100
let salarioFinal = salarioBruto - imposto

console.log('Valor da hora trabalhada: ' + valorHoraTrabalhada + ' salário bruto' + salarioBruto + ' imposto: ' + imposto + ' salario: ' + salarioFinal);
