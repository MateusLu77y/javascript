
function gerarTabuada() {
    //Seleciona:
    let num = Number(document.getElementById('numero').value)
    let opcoes = document.getElementsByClassName('opcao')
    opcoes.innerHTML = ''

    if (num === 0 || num == '') {
        alert('Insira um número!')
        return
    } else {
        //Processamento:
        //O atributo .lenght, pega a quantidade de elementos dentro de uma lista, 
        for (let i = 0; i < opcoes.length; i++) {
            opcoes[i].innerHTML = `${num} x ${i + 1} = ${num * (i + 1)}`
        }
    }
}