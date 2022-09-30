/* 
2. Escreva um algoritmo que leia o valor unitário e a quantidade vendida de um produto e
apresente o valor total da venda. Caso o valor total da venda seja superior a R$ 100,00 mostrar a
mensagem “Bonificação de 10% para o vendedor!”.
*/

let valorUnitario = parseFloat(prompt('Digite o valor ubitário'))
let quantidadeVendida = parseFloat(prompt('Digite a quantidade vendida'))

let valorTotal = valorUnitario * quantidadeVendida
if (valorTotal > 100) {
    console.log('Bonificação de 10% para o vendedor!');
}
console.log(valorTotal)