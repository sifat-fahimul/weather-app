const API_KEY = `ee0cba643a62387483d3ee0dcd8c9420`;
cityName = '';
const temperatureButton = () => {
    const cityName = document.getElementById('city-name').value;
    document.getElementById('city-name').value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    console.log(temperature)
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    console.log(url)
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}
