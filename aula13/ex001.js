//Programa comedor de pizza:
//quantas fatias a pizza tem?
let fatias = 8
//Quantas já comi?
let fatiasComidas = 0
console.log(`Estou Comendo uma pizza!`)


//Forma testando e depois executnaod o código:
/*
// comerPizza()
function comerPizza() {

    while (fatias > 0) {
        fatias -= 1
        fatiasComidas += 1
        console.log(`Comi ${fatiasComidas} fatia(s) `)
        comerPizza()
    }
}
console.log(`Comi a pizza toda, tinha ${fatiasComidas} fatias!`)
*/

//Forma executando o código e depois testando:
do {
    fatias -= 1
    fatiasComidas += 1
    console.log(`Comi ${fatiasComidas} fatia(s) `)
} while (fatias > 0)
console.log(`Comi a pizza toda, tinha ${fatiasComidas} fatias!`)
