const place = require('./lugar/lugar');
const weather = require('./clima/clima');
const argv = require('yargs').options( {
    direccion :
    {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

place.getPlace(argv.direccion).then(
    //console.log
) 



const getInfo = async(location) => {

    try {
        const response = await place.getPlace(location).then( ) ;
        const temp = await weather.getWeather(response.latitud,response.longitud);
        return `EL clima de ${location} es ${temp}`;     
    } catch (error) {
        return `No se pudo establecer el clima para  ${location}`;     
    }

}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log)

return 
weather.getWeather(-5.710000,-79.279999)
.then( console.log)
.catch( console.log)
