/* 6) Faça um programa que recebe o preço de etiqueta de um
produto e em seguida informe o preço deste produto se o
pagamento for à vista (10% de desconto), em duas parcelas
(valor de etiqueta) ou em quatro parcelas (5% de
acréscimo) */

let etiqueta = parseFloat(prompt('Digite o preço da etiqueta '))

let opcao = parseFloat(prompt('Escolha: ' + '\n' +
    '1 - Pagar á vista (10% de desconto)' + '\n' +
    '2 - em 2 vezes' + '\n' +
    '3 - em 4 vezes (5% de acréscimo)'))

if (opcao == 1) {
    let calcPorcentagem = (etiqueta * 10) / 100
    let comDesconto = etiqueta - calcPorcentagem
    alert('Sua compra com 10% de desconto ficou ' + comDesconto)
}
else if (opcao == 2) {
    let divide = etiqueta / 2
    alert('Sua compra foi em 2x de ' + divide)
}
else if (opcao == 3) {
    let calcAcresimo = (etiqueta * 5) / 100
    let comAcresimo = etiqueta + calcAcresimo
    alert('Sua compra foi em 4x com 5% de acresimo e totalizou em ' + comAcresimo)
}