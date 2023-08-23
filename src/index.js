import generatePage from "./form";

async function getWeather() {
  const data = await fetch(
    'http://api.weatherapi.com/v1/current.json?key=bdbddb896e8c4f5e89704849232208&q=london',
  );
  const processed = await data.json();
  console.log(processed);
}

generatePage();
getWeather();
