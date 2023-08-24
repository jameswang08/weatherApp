const currentUnit = 'c';

async function getWeather(unit, location) {
    const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=bdbddb896e8c4f5e89704849232208&q=${location}}&unit=${unit}`,
    );
    const processed = await data.json();
    return processed;
}

async function displayData(keyWord) {
    // Clear previous location
    const cont = document.querySelector('.bottomHalf');
    while(cont.firstChild) cont.removeChild(cont.firstChild);

    try {
        const data = await getWeather(currentUnit, keyWord);

        const location = `${data.location.name}, ${data.location.region}`;
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
        cont.appendChild(weatherData);
    } catch (error) {
        const errorMsg = document.createElement('div');
        errorMsg.innerText = `Error! ${error}`;
        cont.appendChild(errorMsg);
    }
}

export default displayData;

