//Posso votar?
let idade = 69
console.log(`Você possui ${idade} anos!`)
if (idade < 16) {
    console.log(`Você não pode votar!`)
} else if (idade < 18 || idade >= 67) {
    console.log(`O seu voto é opcional!`)
} else if (idade > 18){
    console.log(`O seu voto é obrigatório!`)
}