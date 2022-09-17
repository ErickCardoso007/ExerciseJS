let numerador = prompt('Digite o seu numerador')
let denominador = prompt('Digite o seu denominador')

for (i = 0; denominador == 0; i++) {
    denominador = prompt('Digite o seu denominador')
}

let divisao = (numerador / denominador).toFixed(1)
alert("O resultado da sua divisão" + divisao)
