
async function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }

    const apiKey = 'd55845d6aa9d5b8963892a8eb5b8d785';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=2&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Location not found');
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const resultsDiv = document.getElementById('weather-results');
    resultsDiv.innerHTML = `
        <h2>Weather for ${data.city.name}</h2>
        <div>Today: ${data.list[0].main.temp} °C, ${data.list[0].weather[0].description}</div>
        <div>Tomorrow: ${data.list[1].main.temp} °C, ${data.list[1].weather[0].description}</div>
    `;
}
