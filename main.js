const progreso = document.getElementById('progreso')


const reproducirAudio = document.querySelector('.play')

reproducirAudio.addEventListener('click', reproducir);
function reproducir(){
    reproducirCancion()

}

function reproducirCancion(){
    cancion.play()
}

const pausarAudio = document.querySelector('.pause')

pausarAudio.addEventListener('click', pausar);
function pausar(){
    pausarCancion()

}

function pausarCancion(){
    cancion.pause()
}

cancion.addEventListener('timeupdate', function(){
    if(!cancion.paused){
        progreso.value = cancion.currentTime
    }
})

progreso.addEventListener('input', function(){
    cancion.currentTime = progreso.value
}
)

cancion.addEventListener('loadedmetadata', function(){
    progreso.max = cancion.duration
    progreso.value = cancion.currentTime
})


document.addEventListener('DOMContentLoaded', () => {
    const cancion = document.getElementById('cancion');
    const controlVolumen = document.getElementById('control-volumen');

    // Configurar el volumen inicial al valor del control
    cancion.volume = controlVolumen.value;

    // Cambiar el volumen al mover el slider
    controlVolumen.addEventListener('input', function () {
        cancion.volume = this.value; // Actualiza el volumen del audio
        console.log(`Volumen actual: ${cancion.volume}`);
    });
});