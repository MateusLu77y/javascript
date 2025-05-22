//Objeto:

let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 87.5,
    engordar(p = 0) {
        console.log('Engordou!')
        this.peso += p
    }
}
console.log(amigo.peso)
amigo.engordar(2)
console.log(amigo.peso)