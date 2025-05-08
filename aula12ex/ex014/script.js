function carregar() {

    //Seleciona os elementos por Id:
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let fundo = document.getElementById('fundo')

    //Puxa hora do sistema:
    let agora = new Date()
    let hora = agora.getHours()

    //Mostra mensagem de que horas são:
    msg.innerHTML = `Agora são extamente ${hora} horas!`

    //Condições dos horários:
    if (hora < 12) {
        //Bom dia!
        img.src = "imagens/manha.png"
        fundo.style.backgroundColor = "#8A9039"
    }
    else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = "imagens/tarde.png"
        fundo.style.backgroundColor = "#F39248"
    }
    else {
        //Boa noite!
        img.src = "imagens/noite.png"
        fundo.style.backgroundColor = "#2977B0"
    }

}