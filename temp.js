const celcius = document.querySelector("#celcius > input");
const fahrenheit = document.querySelector("#fahrenheit > input");
const kelvin = document.querySelector("#kelvin > input");

function roundNum(num){
    return Math.round(num * 100) / 100;
}

function celcConvert(){
    const ctemp = parseFloat(celcius.value);
    const ftemp = (ctemp * (9/5)) + 32;
    const ktemp = (ctemp + 273.15);

    fahrenheit.value = roundNum(ftemp);
    kelvin.value = roundNum(ktemp);
}

function fahrConvert(){
    const ftemp = parseFloat(fahrenheit.value);
    const ctemp = (ftemp - 32) * (5/9);
    const ktemp = (ftemp + 459.67) * 5/9;

    celcius.value = roundNum(ctemp);
    kelvin.value = roundNum(ktemp);
}

function kelvConvert(){
    const ktemp = parseFloat(kelvin.value);
    const ctemp = ktemp - 273.15;
    const ftemp = (ctemp - 273.15) * 9/5 + 32;

    fahrenheit.value = roundNum(ftemp);
    celcius.value = roundNum(ctemp);
}

function main(){
    celcius.addEventListener("input", celcConvert);
    fahrenheit.addEventListener("input", fahrConvert);
    kelvin.addEventListener("input", kelvConvert);
};

main();