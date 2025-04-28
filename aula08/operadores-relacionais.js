/* Operadores relacionais são usados para comparar valores e retornar um valor booleano, true ou false, indicando se a comparação é verdadeira ou falsa. Eles são fundamentais para contruir condições de código, em estruturas como if e else. */

// Operadores relacionais:

/*
Maior que (>)
Menor que (<)
Maior ou igual (>=)
Igual a (==)
Diferente de (!=)
*/

// Exemplos:

let exemplo1 = 5 > 4 // 5 é maior que 4? (false)
let exemplo2 = 4 < 3 // 4 é menor que 3? (false)
let exemplo3 = 5 >= 7 // 5 é maior ou igual a 7? (true)
let exemplo4 = 9 == 9 // 9 é igual a 9? (true)
let exemplo5 = 9 != 20 // 9 é diferente de 20? (true)

// Operadores de identidade:

let exemplo6 = 5 == 5 // --> True (5 é igual a 5? Verdade)
let exemplo7 = 5 == '5' // --> True (5 é igual a '5'? Verdade, porém, eles são iguais de valores não de tipo, o 5 é tipo number e o '5' é tipo string)

let exemplo8 = 5 === '5'// --> False (5 é totalmente igual a '5' em tipo e valor? Mentira, 5 é igual a '5' em valor, porém não em tipo)

let exemplo9 = 5 === 5 // --> True (5 é totalmente igual a 5? Verdade, são iguais em valor e tipo)