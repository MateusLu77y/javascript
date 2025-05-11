//Contador
function contar() {
    //Captura os valores dos inputs!
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let passos = Number(document.getElementById('passos').value)
    let msg = document.getElementById('msg')

    // Válidações:

    if (passos <= 0) {
        passos = 1
        alert('Passo inválido!')

    } else if (inicio > fim) {
        alert('O inicio não pode ser maior que o fim!')
    }
    for (i = inicio; i <= fim; i += passos) {
        msg.innerText=`o valor é: ${i}`
    }
}

