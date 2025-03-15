const ApiKey = '95f7c93536c7e386c6c5a0b04247e7dd';



function insertData(data) {
    document.querySelector('.city').innerText = "Tempo em: " + data.name;
    document.querySelector('.temp').innerText = Math.floor(data.main.temp) + " °C";
    document.querySelector('.text-prev').innerText = data.weather[0].description;
    document.querySelector('.humidity').innerText = 'Umidade: ' + data.main.humidity + ' %';
    document.querySelector('.img-prev').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

}

async function getCity(input) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${ApiKey}&lang=pt_br&units=metric`)
        .then(response => response.json())

    if (data.cod == 404) {
        return toggleDiv(), setTimeout(() => {
            hideDiv()
        }, 3000);
    }

    insertData(data)
    console.log(data)
}

function getWeather() {
    const input = document.querySelector('.input-city').value.trim();
    getCity(input);
}

function toggleDiv() {
    var show = document.getElementById("alert");
    show.style.display = "block";

}

function hideDiv() {
    var hide = document.getElementById("alert");
    hide.style.display = "none";

}

