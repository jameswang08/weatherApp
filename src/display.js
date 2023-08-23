const currentUnit = 'c';

async function getWeather(unit) {
    const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=bdbddb896e8c4f5e89704849232208&q=london&unit=${unit}`,
    );
    const processed = await data.json();
    return processed;
}

async function displayData() {
    try {
        const data = await getWeather(currentUnit);

        const location = data.location.name;
        const time = data.location.localtime;

        const condition = data.current.condition.text;

        const temperatureUnit = currentUnit === 'f' ? 'Fahrenheit' : 'Celsius';

        const currentTemp = data.current[`temp_${currentUnit}`];
        const feelsLike = data.current[`feelslike_${currentUnit}`];
        const {humidity} = data.current;

        const weatherData = document.createElement('div');
        weatherData.innerHTML = `
            <h1>Location: ${location}</h1>
            <h1>Last Updated: ${time}</h1>
            <h1>Condition: ${condition}</h1>
            <h1>Temperature Unit: ${temperatureUnit}</h1>
            <h1>Current Temperature: ${currentTemp}</h1>
            <h1>Feels Like: ${feelsLike}</h1>
            <h1>Humidity: ${humidity}%</h1>
        `;
        document.querySelector('.bottomHalf').appendChild(weatherData);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

export default displayData;

