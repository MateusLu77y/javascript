//Lista de números:
let listNum = []

function adicionar() {
    //Selecionando:
    let numStr = document.getElementById('numero').value
    let num = Number(numStr)

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
        } else {
            alert(`O número ${num} já foi adicionado!`)
        }
    }
}