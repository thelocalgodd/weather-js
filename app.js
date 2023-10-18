function loadSite() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            getWeather();
        });
    }
}

function getWeather() {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=68fcafa37caddb2e4976e6b33e18b55b`

    fetch(url)
    .then(response => response.json())
    .then(json => {
        switch(json.weather[0].main) {
            case 'Rain':
                document.getElementById('weather').innerHTML = `☔: Rainy`
                break;
            case 'Clouds': 
                document.getElementById('weather').innerHTML = `☁️: Cloudy`
                break;
            case 'Clear':
                document.getElementById('weather').innerHTML = `🌤️: Clear`
                break;
            default:
                document.getElementById('weather').innerHTML = `🌤️`
        }

        document.getElementById('location').innerHTML = `📍: ${json.name}`;
    })
}