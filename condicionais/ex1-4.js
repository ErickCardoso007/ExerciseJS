const mediaNota = (nota1, nota2) => {

    const media = (nota1 + nota2) / 2

    if (media >= 6) {
        return 'APROVADO'
    } else {
        return 'REPROVADO'
    }


}
console.log(mediaNota(3, 2))