const idadeUser = (ano) => {
    const anoAtual = 2022
    const idade = anoAtual - ano

    if (idade >= 18) {
        return 'Você é maior de idade! Sua idade é '
    } else {
        return 'Você é menor de idade!'
    }

}
console.log(idadeUser(2005))