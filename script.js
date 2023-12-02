function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    // Replace 'YOUR_API_KEY' with the actual API key you obtained from OpenWeatherMap
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');

            if (data.cod === '404') {
                weatherInfo.textContent = 'City not found';
            } else {
                const description = data.weather[0].description;
                const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius

                const output = `Current weather in ${data.name}: ${description}, ${temperature}°C`;
                weatherInfo.textContent = output;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
