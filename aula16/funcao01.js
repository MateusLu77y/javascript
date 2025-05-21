//Programa que mostra se um número é par ou ímpar:

//Função que realiza o cálculo necessário:
function parImpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

//Chamado da função:
console.log(`O número é ${parImpar(12)}`)