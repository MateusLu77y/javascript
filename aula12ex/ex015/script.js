function validar() {
    let agora = new Date()
    let anoAtual = agora.getFullYear()
    //Selecionando:
    let anoNas = document.getElementById('textano')
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')

    let sexom = document.getElementById('sexm')
    let sexf = document.getElementById('sexf')

    if (anoNas.value.length == 0 || anoNas > anoAtual) {
        window.alert("[ERRO] - Ano inválido, digite outro ano!")
    } else{alert("Tudo Ok")}



    console.log('Funcionando!')
}