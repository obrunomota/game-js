alert('Boas-vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto eh menor que ${chute}`);
        }
        else{
            alert(`O numero secreto eh maior que ${chute}`);
        }

        tentativas++;
    }    
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Acertou! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
