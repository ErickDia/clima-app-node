const axios = require('axios');



const getInstance = async (direccion) => {
    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(direccion)}&appid=5a760d2eef3397f25a5842f9de011639`
      });
    const respuesta = await instance.get().catch(err => {return {err,status:404}});
    if (respuesta.status === 404){
        throw new Error(`no se encontro la direccion ${direccion}`)
    }else{
        let clima = respuesta.data.weather.map(clima => clima.main)
        if (clima===[]) {
            clima = 'no se pudo obtener el clima de este lugar'
        }
        return {
            data:respuesta.data,
            lon:respuesta.data.coord.lon,
            lat:respuesta.data.coord.lat,
            direccion:respuesta.data.name,
            clima: clima 
        }
    }
    
}
  
module.exports = {
    getInstance
}