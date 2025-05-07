//Bom dia?, Boa tarde?, ou Boa noite?
let agora = new Date() //recebe horário do sistema!
let horas = agora.getHours() //mostra as horas atuais do sistema!
console.log(`Agora são ${horas} horas`)

if (horas < 12) {
    console.log(`Bom dia!`)
}
else if (horas < 18) {
    console.log(`Boa tarde!`)

}
else if (horas >= 18) {
    console.log(`Boa noite!`)
}