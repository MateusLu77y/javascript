function iniciar() {
    let msg = document.getElementById('conteudo')
    let button = document.getElementById('button')
    let nomes = []
    for (let i = 0; i <= 4; i++) {
        nomes.push(prompt("Digite um nome:"))
    }
    //Mostrar os nomes na tela
    msg.innerHTML += `<p>Os nomes são: ${nomes}.</p>`
    msg.innerHTML += `<p>São um total de: ${nomes.length} nomes</p>`

    if (nomes.indexOf('ana') != -1 || nomes.indexOf('Ana') != -1) {
        msg.innerHTML += `O nome <strong>Ana</strong> está na lista!`
    } else {
        msg.innerHTML += `O nome <strong>Ana</strong> não está na lista!`
    }
    button.style.display = 'none'
}