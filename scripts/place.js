// *--FOOTER--*
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`; 
// --WEATHER DATA --
const temperature = 8;
const windspeed = 12;
// --DISPLAY VALUES--
document.getElementById("temperature").textContent = temperature;
document.getElementById("windspeed").textContent = windspeed;
// --WIND-CHILL--
function calculateWindchill(temp,speed){
    return (
        13.12 + (0.6215*temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed , 0.16))
    );
}

let windchill;
if ( temperature <= 10 && windspeed > 4.8){
    windchill = calculateWindchill(temperature, windspeed).toFixed(1);
}
else{
    windchill = "N/A";

}
document.getElementById("windchill").textContent = windchill;