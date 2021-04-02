var carta1 = {
    nome: "Juliete",
    imagem: "https://media.tenor.com/images/b79037da4b0e25d12663a0755b720723/tenor.gif",
    atributos: {
     Jogador: 85,
          Carisma: 100,
       Seguidores: 17711856
    }
}

var carta2 = {
    nome: "Viih Tube",
    imagem: "https://media1.tenor.com/images/fccae9403f15cc484b1a7b47ee947923/tenor.gif?itemid=20175713",
    atributos: {
     Jogador: 100,
          Carisma: 71,
       Seguidores: 18471482
    }
}

var carta3 = {
    nome: "Caio",
    imagem: "https://media.tenor.com/images/11e5e94990f6abb2d50ff842410292b1/tenor.gif",
    atributos: {
     Jogador: 98,
          Carisma: 60,
       Seguidores: 3252860
    }
}

var carta4 = {
    nome: "Arhur",
    imagem: "https://media.tenor.com/images/0713b267aea7e7f950c6e2a53501ab4a/tenor.gif",
    atributos: {
     Jogador: 60,
          Carisma: 05,
       Seguidores: 1474701
    }
}

var carta5 = {
    nome: "Camilla",
    imagem: "https://media.tenor.com/images/5057fefcc6e4bbce10d9dfcb4c0b6677/tenor.gif",
    atributos: {
     Jogador: 55,
          Carisma: 85,
       Seguidores: 8204989
    }
}

var carta6 = {
    nome: "João",
    imagem: "https://media.tenor.com/images/088aad3c0b511b88f3521954cef758b9/tenor.gif",
    atributos: {
     Jogador: 68,
          Carisma: 92,
       Seguidores: 2396860
    }
}

var carta7 = {
    nome: "Pocah",
    imagem: "https://media.tenor.com/images/7e6a50a2ab3335c21bb1bb076071193c/tenor.gif",
    atributos: {
     Jogador: 10,
          Carisma: 35,
       Seguidores: 13185161
    }
}

var carta8 = {
    nome: "Thaís",
    imagem: "https://media.tenor.com/images/933d6697ee8366395d15869bb5676838/tenor.gif",
    atributos: {
     Jogador: 27,
          Carisma: 70,
       Seguidores: 2073854
    }
}

var carta9 = {
    nome: "Gil",
    imagem: "https://i.imgur.com/VTqO7HW.gif",
    atributos: {
     Jogador: 90,
          Carisma: 98,
       Seguidores: 6617169
    }
}

var carta10 = {
    nome: "Fiuk",
    imagem: "https://media1.tenor.com/images/d7e3eeae4ff6c993dad57830b38e947c/tenor.gif?itemid=20116400",
    atributos: {
     Jogador: 50,
          Carisma: 90,
       Seguidores: 3254963
    }
}

var carta10 = {
    nome: "Rodolffo",
    imagem: "https://media.tenor.com/images/07a3416d590d0c553fd889a9fb50a680/tenor.gif",
    atributos: {
     Jogador: 88,
          Carisma: 85,
       Seguidores: 4798206
    }
}

var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas ()

function atualizaQuantidadeDeCartas(){
  var divQuantiadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantiadeCartas.innerHTML = html
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
 
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
  

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
 // Esse WHILE serva para ficar sorteando infinito não será mais utilizado pois terá cartas finitas.
// while (numeroCartaJogador == numeroCartaMaquina) {
//     numeroCartaJogador = parseInt(Math.random() * 10)}
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)


    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
if (cartas.length == 0){
  alert("Fim de Jogo")
    if (pontosJogador > pontosMaquina){
      htmlResultado = '<p class="resultado-final">Venceu</p>'
    } else if (pontosMaquina > pontosJogador) {
      htmlResultado = '<p class="resultado-final">Perdeu</p>'
    } else {
      htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  } else {
    document.getElementById("btnProximaRodada").disabled = false
  }
    
    divResultado.innerHTML = htmlResultado
    document.getElementById("btnJogar").disabled = true
    
  
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas ()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada (){
  var divCartas = document.getElementById('cartas')
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
    document.getElementById("btnSortear").disabled = false
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnProximaRodada").disabled = true
  var divResultado = document.getElementsByTagName("resultado")
  divResultado.innerHTML = ""
  
}
