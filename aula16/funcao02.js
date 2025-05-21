//Soma de dois números com função:

//No parâmetro você também pode determinar valores padrões caso o valor não seja expecificado no parametro exemplo:
/*
function exemplo (parâmetro1 = 0, parâmetro2 = 0){
parâmetro1 + parâmetro2}

Caso a função seja chamada sem um dos parâmetros ele de forma padrão será atribuido o número 0.

*/

function soma(a=0, b=0) {
    return a + b
}

console.log(soma(2))