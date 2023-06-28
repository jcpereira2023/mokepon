let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

    

function iniciarJuego(){
    

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener ('click', ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener ('click', ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener ('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener ('click', reiniciarJuego )
}

alert("Selecciona una mascota")

function seleccionarMascotaJugador() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
        
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    


        if (inputHipodoge.checked){
            alert ("has seleccionado a Hipodoge")
            spanMascotaJugador.innerHTML = "Hipodoge"
            sectionSeleccionarAtaque.style.display = 'block'
            sectionSeleccionarMascota.style.display = 'none'

        }   else if (inputCapipepo.checked){
            alert ("has seleccionado a Capipepo")
            spanMascotaJugador.innerHTML = "Capipepo"
            sectionSeleccionarAtaque.style.display = 'block'
            sectionSeleccionarMascota.style.display = 'none'
        }   else if (inputRatigueya.checked){
            alert ("has seleccionado a Ratigueya")
            spanMascotaJugador.innerHTML = "Ratigueya"
            sectionSeleccionarAtaque.style.display = 'block'
            sectionSeleccionarMascota.style.display = 'none'
        }else {
             alert ("Seleccione Una...  ")
            }           
            seleccionarEnemigo() 
                      
    }

function seleccionarEnemigo() {
        let mascotaaleatoria = aleatorio(1,3)
        let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

            if (mascotaaleatoria == 1 ) {
            alert ("El enemigo ha  seleccionado a Hipodoge")
            spanMascotaEnemigo.innerHTML = "Hipodoge"
                
        }   else if (mascotaaleatoria == 2){
                alert ("El enemigo ha  seleccionado a Capipepo")
            spanMascotaEnemigo.innerHTML = "Capipepo"
            } else {
                alert ("El enemigo ha  seleccionado a Ratigueya")
            spanMascotaEnemigo.innerHTML = "Ratigueya"
            }
            
        }

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    alert ("Has atacado con... " + ataqueJugador)
    ataqueAleatorioEnemigo()
} 
     
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    alert ("Has atacado con... " + ataqueJugador)
    ataqueAleatorioEnemigo()
    
}        
function ataqueTierra(){
       ataqueJugador = 'TIERRA'
    alert ("Has atacado con... " + ataqueJugador)
    ataqueAleatorioEnemigo()
   
}        
function ataqueAleatorioEnemigo(){
    ataquealeatorio = aleatorio(1,3)
    if (ataquealeatorio == 1){
        ataqueEnemigo = "FUEGO"
        alert ("Enemigo ha atacado con... " + ataqueEnemigo)
    }else if (ataquealeatorio == 2){
        ataqueEnemigo = "AGUA"
        alert ("Enemigo ha atacado con... " + ataqueEnemigo)
    } else {
        ataqueEnemigo = "TIERRA"
        alert ("Enemigo ha atacado con... " + ataqueEnemigo)
    }
    combate()    
}

function combate(){
let spanVidasJugador = document.getElementById('vidas-jugador')
let spanVidasEnemigo = document.getElementById('vidas-enemigo')
        if (ataqueEnemigo == ataqueJugador){
        crearMensaje( "EMPATE")
        alert ('EMPATE')
        }   else if ( ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje( "GANASTE")
        alert ('Enemigo perdió una vida le quedan ahora... ' + (vidasEnemigo - 1) + ':  vidas')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo        
        } else if ( ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje( "GANASTE")
        alert ('Enemigo perdió una vida le quedan ahora... ' + (vidasEnemigo - 1) +  ':  vidas')
        vidasEnemigo -- 
        spanVidasEnemigo.innerHTML = vidasEnemigo        
        } else if ( ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje( "GANASTE")
        alert ('Enemigo perdió una vida le quedan ahora... ' + (vidasEnemigo - 1) + ':  vidas')
        vidasEnemigo -- 
        spanVidasEnemigo.innerHTML = vidasEnemigo        
        } else {
        crearMensaje( "PERDISTE")
        alert ('Has perdido una vida Te quedan ahora... ' + (vidasJugador - 1) + ':  vidas')
        vidasJugador -- 
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarvidas()    
}

function revisarvidas (){
    
    if (vidasEnemigo == 0 ){
    crearMensajeFinal (' FELICIDADES HAS GANADO ... 😀')
    } else if (vidasJugador == 0){
    crearMensajeFinal (' Lo Siento has Perdido ... 😪')
    }
  
    
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML  = 'Tu mascota atacó con:  '  + ataqueJugador +  '... La mascota del enemigo atacó con:  '  +  ataqueEnemigo +  ' --- ' + resultado
    sectionMensajes.appendChild(parrafo)   
} 

function reiniciarJuego(){
    location.reload()
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML  = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

} 

function aleatorio (min,max) {
        return Math.floor(Math.random() * (max - min + 1 ) + min)
    }



window.addEventListener("load", iniciarJuego) 

