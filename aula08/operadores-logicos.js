/* Operadores logicos? São símbolos que são usados para combinar ou modificar valores lógicos (verdadeiro ou falso). Eles são fundamentais para criar condições complexas e controlar o fluxo do programa.
*/

// Principais tipos:

/*
Negação (!) (NÃO)

Conjunção (&&) (È lógico), quero uma caneta azul E uma caneta preta, só fico satisfeito com as duas

Disjunção (||) (Ou lógico)´, quero uma caneta azul OU uma caneta preta, me contento com qualquer uma das duas, ou as duas
*/

/* 
Ordem de resolução:

    1.Operadores aritméticos: (), *, /...
    2.Operadores relacionais: >,<,>= ...
    3.Negação: !
    4.È lógico: &&
    5.Ou lógico: ||
    6.Operadores ternários: ?,:

*/

// Exemplos:

let a = 9
let b = 15

// a <= b && b / 2 == 5   -->   false && false  --> False

// a >= 9 || b != 15  --> true || false  --> True

let idade = 16
let estado = 'SP'
let salário = 1400
let = sexo = 'F'

console.log(`A idade está entre 15 é 17 anos? ${idade >= 15 && idade <= 17}`) // A idade é menor ou igual a 15 e menor ou igual a 17?
console.log(`O estado que você mora é RJ ou SP? ${estado == 'RJ' || estado == 'SP'}`) // o estado é igual a RJ, ou SP?
console.log(`Seu salário é 1500 ou acima é você é uma mulher? ${salário >= 1500 && sexo != 'M'}`) // O salário é maior ou igual a 1500 é o sexo é diferente de M?