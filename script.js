const ApiKey = '95f7c93536c7e386c6c5a0b04247e7dd';

function insertData(data) {
    document.querySelector('.city').innerText = "Tempo em: " + data.name;
    document.querySelector('.temp').innerText = data.main.temp + " °C";
    document.querySelector('.text-prev').innerText = data.weather[0].description;
    document.querySelector('.humidity').innerText = 'Umidade: ' + data.main.humidity + ' %';

}

async function getCity(input) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${ApiKey}&lang=pt_br&units=metric`)
        .then(response => response.json())

    if (data.cod == 404) {
        return alert('Cidade não encontrada')
    }

    insertData(data)
    console.log(data)
}

function getWeather() {
    const input = document.querySelector('.input-city').value;
    getCity(input)
}