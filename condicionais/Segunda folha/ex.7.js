/*
7) Faça um programa que receba o salário de um funcionário,
calcule e mostre o novo salário, sabendo-se que este sofreu
um aumento de 25%. 
*/

let salario = parseFloat(prompt('Digite o seu salário'))

let calcPorcentagem = (salario * 25) / 100
let novoSalario = salario + calcPorcentagem

alert('Seu salário sofreu um aumento de 25%, no momento o seu salário é ' + novoSalario)