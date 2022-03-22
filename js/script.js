function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`

    if (hora >= 6 && hora < 12) {
        img.src = './img/foto-manha.png'
        document.body.style.background = '#bfd5e0'

    } else if (hora >= 12 && hora < 18) {
        img.src = './img/foto-tarde.png'
        document.body.style.background = '#80542d'

    } else {
        img.src = './img/foto-noite.png'
        document.body.style.background = '#2e2e2e'
    }
}