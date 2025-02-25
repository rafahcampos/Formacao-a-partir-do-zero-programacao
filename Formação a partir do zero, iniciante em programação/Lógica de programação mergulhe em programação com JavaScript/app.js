alert('Boas vindas jogador secreto');
let numeroSecreto = 5;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolhe um número entre 1 e 10');
    if (chute == numeroSecreto) {
        alert(`Você acertou, o número secreto é ${numeroSecreto} com ${tentativas} tentativas.`)
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que o ${chute}`)
        } if (chute < numeroSecreto) {
            alert(`O número secreto é maior que o ${chute}`)

        }
        tentativas++;
    }

}