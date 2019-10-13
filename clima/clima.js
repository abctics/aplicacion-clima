const axios = require('axios');

const getWeather = async(lat,lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7fff82fd3605b55a7774d6e35945b0cf&units=metric`);


    return resp.data.main.temp;
}

module.exports = {
    getWeather
}