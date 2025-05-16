
function gerarTabuada() {
    let num = Number(document.getElementById('numero').value)
    let c = 0
    let opcao = document.getElementsByClassName('opcao')
    opcao.innerHTML = ''

    for (let i = 1; i <= 9; i++) {
        opcao.innerHTML += `${num} x ${i} = ${num * i}<br>`
    }
}