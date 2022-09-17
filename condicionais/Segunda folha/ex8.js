/* 
8) Faça um programa que recebe o salário de um funcionário
e o percentual de aumento, calcule e mostre o valor do
aumento e o novo salário.
*/

let salario = parseFloat(prompt('Digite o seu salário'))
let porcentagemAumento = parseFloat(prompt('Digite a porcentagem do seu aumento'))

let calc = (salario * porcentagemAumento) / 100
let novoSalario = salario + calc

alert('Após o aumento o seu salário passou a ser R$' + novoSalario)