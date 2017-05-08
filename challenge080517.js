// Get tha data of a paticular weather from OpenWaeatherMap
// Show the weather of the parts of the cities I want to see (number of cities etc)
//Get user to be prompted for which cityname


const axios = require('axios');
const prompt = require('prompt');

function OpenWeatherMap(city){
axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8597cbd9a2b6d734add8a2bebe2eb01e`)
  .then(function (response) {
  console.log('weather', response["data"]["weather"]);
  })
  .catch(function (error) {
    console.log(error);
  });
}

    prompt.start();

    prompt.get(['city'], function (err, result) {
      OpenWeatherMap(result.city);
      });
