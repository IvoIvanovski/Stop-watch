

// stavam varijabli pocetni
let seconds = 0;
let minutes = 0;
let hours = 0;
//sega treba da stavam uste varijabli za da raboti start, stop i reset//
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
//sega stavam varijabli za da mi pomognat vo start i stop button. Bez ova koga kje se poseti sajtot, saatot sam zapocnuva.

let interval = null;
let status = "stopped";


//naredeno mi e funkcija za da moze da rabotat sekundite,minutite, saatite

function stopWatch(){
    seconds++;
//stavam sekundi da se podeleni so 60 (60 sekundi vo minuta) i toa da ni e ednakvo na 1. 
//Sekundite na nula i increment na minuti++
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
    }
//potoa gi stavam minutite so increment na saat
    if(minutes /60 === 1){
        minutes = 0;
        hours++;
    };

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    } 
    else{
        displaySeconds = seconds;
    }

    if (minutes < 10){
        displayMinutes = "0" + minutes.toString();
    } 
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    } 
    else{
        displayHours = hours;
    }




    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}



function startStop(){
    if(status === "stopped"){
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML="Stop";
        status = "started";
    } 
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML="Start";
        status = "stopped";
    }
}


//sega treba da stavam funcija za reset button

function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00.00.00";
    document.getElementById("startStop").innerHTML="Start";
}