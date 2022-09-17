let salarioAtual = parseFloat(prompt('Digite seu salário atual'))

if (salarioAtual < 2500) {
    let menorSalario = (salarioAtual * 20) / 100
    let novoSalario = menorSalario + salarioAtual
    alert("Seu salário sofreu um reajuste e elevou em 20%" + "\n" + "Seu novo salário é: " + novoSalario)
}

else if (salarioAtual >= 2500) {
    let maiorSalario = (salarioAtual * 10) / 100
    let novoSalario = maiorSalario + salarioAtual
    alert("Seu salário sofreu um reajuste e elevou em 10%" + "\n" + "Seu novo salário é: " + novoSalario)
}

else {
    alert('Apenas números')
    location.reload
}