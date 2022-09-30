/* 
21)Faça um programa que receba uma hora (uma variável
para hora e outra para minutos), calcule e mostre:

a) a hora digitada convertida em minutos;

b) o total dos minutos, ou seja, os minutos digitados mais a
conversão anterior;

c) o total dos minutos convertidos em segundos.
*/

let hora = parseFloat(prompt('Digite a hora'))
let minutos = parseFloat(prompt('Digite os minutos'))

let conversao = hora * 60

let somaMin = minutos + conversao

let conversaoMinParaSeg = somaMin * 60

console.log('Conversão de hora para minuto ' + conversao + 'seg ' + '\n'
    + 'total dos minutos ' + somaMin + 'min' + '\n'
    + 'o total dos minutos convertidos em segundos é ' + conversaoMinParaSeg)