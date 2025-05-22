//Lista de números:
let listNum = []

function adicionar() {
    //Selecionando:
    let numStr = document.getElementById('numero').value
    document.getElementById('numero').value = ''
    let num = Number(numStr)
    let tab = document.getElementById('tabela')

    //Validação:
    if (num == 0) {
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
    res.innerHTML = ''
    let result = document.createElement('p')

    //Validação:
    if (listNum.length == 0) {
        alert('Porfavor escreva os valores antes de finalizar!')
        return
    }

    let qntNum = listNum.length
    let maiorNum = Math.max(...listNum)
    let menorNum = Math.min(...listNum)
    let soma = listNum.reduce(function (accumulator, value) {
        return accumulator + value
    })
    let media = soma / qntNum

    //Mensagem:
    result.innerHTML += `Ao todo temos <strong>${qntNum}</strong>  números cadastrados. <br><br>`
    result.innerHTML += `O maior valor informado foi <strong>${maiorNum}</strong>.<br><br>`
    result.innerHTML += `O menor valor informado foi <strong>${menorNum}</strong> .<br><br>`
    result.innerHTML += `Somando todos os valores, temos <strong>${soma}</strong> .<br><br>`
    result.innerHTML += `A média dos valores digitados é <strong>${media}</strong>.<br><br>`
    res.appendChild(result)
}


