const div = (num, num2) => {

    if (num2 === 0) {
        return "Não existe divisão por 0"
    } else {
        let divide = num / num2
        return divide
    }

}
console.log(div(12, 2))