//Lista de números:
let listNum = []

function adicionar() {
    //Selecionando:
    let numStr = document.getElementById('numero').value
    let num = Number(numStr)
    let tab = document.getElementById('tabela')

    //Validação:
    if (num == '') {
        alert('Digite um número!')
        return
    } else if (num < 1 || num > 100) {
        alert('Número inválido!')
        return
    } else {
        if (listNum.indexOf(num) == -1) {
            listNum.push(num)
            console.log(`O número ${num} foi adicionado a lista`)
            console.log(`Lista atualizada ${listNum}`)

            //Criação de Elemento:
            let opcao = document.createElement('option')
            opcao.innerHTML = `O valor ${num} foi adicionado.`
            tab.appendChild(opcao)

        } else {
            alert(`O número ${num} já foi adicionado!`)
        }
    }

}

function dados() {
    //Criação de Elemento:
    let res = document.getElementById('resd')
    let result = document.createElement('p')

    result.innerHTML += `Ao todo temos ${listNum.length}  números cadastrados. <br><br>`
    result.innerHTML += `O maior valor informado foi.<br><br>`
    result.innerHTML += `O menor valor informado foi .<br><br>`
    result.innerHTML += `A média dos valores digítados é .<br><br>`
    res.appendChild(result)

}

