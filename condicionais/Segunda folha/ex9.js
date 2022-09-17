/* 
9) Faça um programa que receba o salário base de um
funcionário, calcule e mostre o salário a receber sabendo-
se que o funcionário tem gratificação de 5% sobre o salário
base e paga imposto de 7% sobre o salário com a
gratificação.
*/

let salarioBase = parseFloat(prompt('Digite o seu salário'))

let calcImposto = (salarioBase * 7) / 100
let imposto = salarioBase - calcImposto

let calcGratificacao = (salarioBase * 5) / 100
let gratificação = salarioBase + calcGratificacao

let salario = (salarioBase + calcGratificacao) - calcImposto

alert('Seu salario teve um desconto de R$' + calcImposto + ' de imposto, porém você ganhou uma gratificação de R$' + calcGratificacao + '. O total do seu salário ficou R$' + salario)
