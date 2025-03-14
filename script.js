const ApiKey = '95f7c93536c7e386c6c5a0b04247e7dd';

async function getCity(input) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${ApiKey}`)
        .then(response => response.json())

    console.log(data)
}

function getWeather() {
    const input = document.querySelector('.input-city').value;
    getCity(input)
}