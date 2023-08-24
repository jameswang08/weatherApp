let currentUnit = 'c';

function getCurrentUnit(){
    return currentUnit;
}

// Fetch weather data using weather API
async function getWeather(unit, location) {
    const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=bdbddb896e8c4f5e89704849232208&q=${location}}&unit=${unit}`,
    );
    const processed = await data.json();
    return processed;
}

// Display weather information on wepage
async function displayData(keyWord, unit) {
    currentUnit = unit;
    // Clear previous location
    const cont = document.querySelector('.bottomHalf');
    while(cont.firstChild) cont.removeChild(cont.firstChild);

    try {
        const data = await getWeather(currentUnit, keyWord);

        // Select desired data and create corresponding element
        const location = `${data.location.name}, ${data.location.region}`;
        const time = data.location.localtime;
        const condition = data.current.condition.text;
        const temperatureUnit = currentUnit === 'f' ? 'Fahrenheit' : 'Celsius';
        const currentTemp = data.current[`temp_${currentUnit}`];
        const feelsLike = data.current[`feelslike_${currentUnit}`];
        const {humidity} = data.current;
        
        const weatherData = document.createElement('div');
        weatherData.style.display = 'flex';
        weatherData.style.flexDirection = 'column';
        weatherData.style.gap='8px';
        
        const locationHeading = document.createElement('h1');
        locationHeading.textContent = `Location: ${location}`;
        weatherData.appendChild(locationHeading);
        
        const timeHeading = document.createElement('h1');
        timeHeading.textContent = `Last Updated: ${time}`;
        weatherData.appendChild(timeHeading);
        
        const conditionHeading = document.createElement('h1');
        conditionHeading.textContent = `Condition: ${condition}`;
        weatherData.appendChild(conditionHeading);
        
        const tempUnitDiv = document.createElement('div');
        const tempUnitHeading = document.createElement('h1');
        tempUnitHeading.textContent = `Temperature Unit: ${temperatureUnit}`;
        tempUnitDiv.appendChild(tempUnitHeading);
        
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle Unit';
        toggleButton.addEventListener('click', () => {
            displayData(keyWord, currentUnit === 'f' ? 'c' : 'f');
        });
        toggleButton.style.height='fit-content';
        toggleButton.style.fontSize = '1.5em';

        tempUnitDiv.appendChild(toggleButton);
        tempUnitDiv.style.display = 'flex';      
        tempUnitDiv.style.gap = '4px';  
        tempUnitDiv.style.alignItems = 'center';
        tempUnitDiv.style.justifyContent='space-between';
        weatherData.appendChild(tempUnitDiv);
        
        const currentTempHeading = document.createElement('h1');
        currentTempHeading.textContent = `Current Temperature: ${currentTemp}`;
        weatherData.appendChild(currentTempHeading);
        
        const feelsLikeHeading = document.createElement('h1');
        feelsLikeHeading.textContent = `Feels Like: ${feelsLike}`;
        weatherData.appendChild(feelsLikeHeading);
        
        const humidityHeading = document.createElement('h1');
        humidityHeading.textContent = `Humidity: ${humidity}%`;
        weatherData.appendChild(humidityHeading);
        
        weatherData.classList.add("data");
        cont.appendChild(weatherData);
    } catch (error) {
        const errorMsg = document.createElement('div');
        errorMsg.innerText = `Error! ${error}`;
        cont.appendChild(errorMsg);
    }
}

export {displayData, getCurrentUnit};

