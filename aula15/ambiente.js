//O que são vetores? vetores são variáveis capazes de armazenar mais de um valor dentro da mesma variável.

//Como declarar: let nome = [item1, item2, item3...]
let numeros = [4, 5, 7, 8, 1, 2, 6]
console.log(`Lista inicial ${numeros}`)

//Como adicionar mais elementos: nome[índice] = valor ou nome.push(valor)
numeros[7] = 9
numeros.push(15)
console.log(`Foi adicionado o valor ${numeros[7]} e o valor ${numeros[8]}`)

//Como saber o comprimento do array: nome.length
console.log(`O comprimento do array é ${numeros.length}`)

//Como ordenar a lista em ordem crescente: nome.sort() ou nome.sort((a,b)=> a - b)
console.log(`A lista ordenada em ordem crescente é ${numeros.sort((a, b) => a - b)}`)

//Como buscar valores dentro do array: nome.indexOf(valor)
console.log(`O valor 15 está dentro do índice: ${numeros.indexOf(15)}`)

