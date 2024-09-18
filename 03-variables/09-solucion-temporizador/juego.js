let totalTime = 30;
let tiempoText = document.getElementById("tiempo");
const audioAlarm = document.getElementById("audioPlayer");

/**
 * Initializes the counters and sets up the timeout and interval functions.
 */

function retry() {
    location.reload();
}

function sendResponse() {
    // Get the respuesta elements
    let respuesta_1 = document.getElementById("pregunta 1");
    let respuesta_2 = document.getElementById("pregunta 2");
    let respuesta_3 = document.getElementById("pregunta 3");
    let respuesta_4 = document.getElementById("pregunta 4");
    let respuesta_5 = document.getElementById("pregunta 5");
    let dateNow = new Date();

    alert("Sus respuestas son:\n" + 
            respuesta_1.value + "\n" + 
            respuesta_2.value + "\n" + 
            respuesta_3.value + "\n" +
            respuesta_4.value + "\n" +
            respuesta_5.value + "\n" +
            dateNow.toLocaleString("es-ES"));
    
}

function initCounters() {
    // Set up the timeout function
    setTimeout(() => {
        
        // Play audio alarm
        audioAlarm.play();
        
        // Show alert with the values of respuesta elements
        alert("se acabó el tiempo:\n" + "GAME OVER!");
    }, totalTime * 1000);

    // Set up the interval function
    setInterval(() => {
        // Decrease totalTime by 1
        totalTime--;
        
        // Update the tiempoText element with the new value of totalTime
        tiempoText.innerHTML = totalTime.toString().padStart(2, 0);
    }, 1000);
}
