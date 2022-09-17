let nota1 = parseFloat(prompt('Digite sua primeira nota: '))
let nota2 = parseFloat(prompt('Digite sua segunda nota: '))
let nota3 = parseFloat(prompt('Digite sua terceira nota: '))
let nota4 = parseFloat(prompt('Digite sua quarta nota: '))

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7) {
    alert('Aprovado')
} else if (media < 7 && media >= 4) {
    alert('Exame')
} else {
    alert('Reprovado')
}
