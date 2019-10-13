const axios = require('axios');

const getPlace = async(location) => {
    const encodeUrl = encodeURI(location);
    const instance = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key': 'e8c5750b43msha7ed56d3ebd9520p173f88jsn562fca3360ed'}
      });


      const  resp = await instance.get();
      if(resp.data.Results.length === 0) throw new Error(`No hay resultados para ${location}`)
      
      const data = resp.data.Results[0];
      const direccion = data.name;
      const latitud = data.lat;
      const longitud = data.lon;
       return {
        direccion,
        latitud,
        longitud
       }

}

module.exports = {
    getPlace
}