function validar() {
    let agora = new Date() //pegando a data atual
    let anoAtual = agora.getFullYear() //pegando o ano, fullyear 4 dígitos!

    //Selecionando:
    let anoNas = document.getElementById('textano') //Ano de nascimento
    let msg = document.getElementById('msg') //Mensagem da idade
    let img = document.getElementById('img') //Imagem da pessoa

    //Válidando o ano de nascimento:
    if (anoNas.value.length == 0 || Number(anoNas.value) > anoAtual) {
        window.alert("[ERRO] - Ano inválido, digite outro ano!")

    } else {
        let sexo = document.getElementsByName('gsex')
        let idade = anoAtual - anoNas.value
        let genero = ''

        if (sexo[0].checked) {
            genero = 'Homem'

            //Válidação da imagem do individuo
            if (idade >= 0 && idade <= 10) {
                img.src = 'imagens/bebe-m.png'
                //Criança
            } else if (idade <= 21) {
                img.src = 'imagens/adolescente-m.png'
                //jovem
            } else if (idade <= 50) {
                img.src = 'imagens/adulto-m.png'
                //Adulto
            } else if (idade >= 51)
                img.src = 'imagens/idoso-m.png'
            //Idoso

        } else if (sexo[1].checked) {
            genero = 'Mulher'

            //Válidação da imagem do individuo
            if (idade >= 0 && idade <= 10) {
                img.src = 'imagens/bebe-f.png'
                //Criança
            } else if (idade <= 21) {
                img.src = 'imagens/adolescente-f.png'
                //jovem
            } else if (idade <= 50) {
                img.src = 'imagens/adulto-f.png'
                //Adulto
            } else if (idade >= 51)
                img.src = 'imagens/idoso-f.png'
            //Idoso

        }
        msg.style.textAlign = 'center'
        msg.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
    }
}