/* 
10)Faça um programa que leia o nome e a data de nascimento
de uma pessoa (dia, mês e ano), e após informe, junto ao
nome da pessoa, quantos dias esta pessoa já viveu. Para
simplificar o cálculo considere que todos os meses
possuem 30 dias, e todos os anos 365 dias. 
*/

let dias = 0

let anoA = 2022
let mesA = 09
let diaA = 20

let anoN = parseInt(prompt("Digite seu ano de nascimento"));
let mesN = parseInt(prompt("Digite seu mês de nascimento"));
let diaN = parseInt(prompt("Digite seu dia de nascimento"));


while (diaN < diaA || mesN < mesA || anoN < anoA) {
    dias++
    diaN++
    if (diaN > 30) {
        diaN = 1
        mesN++
        if (mesN > 12) {
            anoN++
            mesN = 1
        }
    }
}







