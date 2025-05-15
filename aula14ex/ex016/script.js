//Contador
function contar() {

    //Captura os valores dos inputs!
    let inicioStr = document.getElementById('inicio').value
    let fimStr = document.getElementById('fim').value
    let passosStr = document.getElementById('passos').value
    let msg = document.getElementById('msg')

    //Reseta o conteúdo:
    msg.innerHTML = 'Contando:'

    // Válidações:
    if (inicioStr === '') {
        window.alert('Por favor preencha o inicio!')
        return //para a execução
    }

    if (fimStr === '') {
        window.alert('Por favor preencha o fim!')
        return //para a execução
    }

    if (passosStr === '') {
        window.alert('Por favor preencha o passos!')
        return //para a execução
    }

    //Convertendo para número:
    let inicio = Number(inicioStr)
    let passos = Number(passosStr)
    let fim = Number(fimStr)

    //Processamento:
    if (inicio < fim) {
        //Crescente:
        for (let i = inicio; i <= fim; i += passos) {
            msg.innerHTML += `👉🏼${i} `
        }
    } else {
        //Decrescente:
        for (let i = inicio; i >= fim; i -= passos)
            msg.innerHTML += `👉🏼${i}`
    }

    msg.innerHTML += `🏁`
}