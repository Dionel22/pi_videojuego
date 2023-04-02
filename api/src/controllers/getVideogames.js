require("dotenv").config();
const axios = require("axios");
const { Videogame, Genre } = require("../db")
const { API_KEY } = process.env;

const getVideogames = async () => {
    //si todo sale bien entra en try
   try {
    //creo una variable que cntenga un array
    let allVideoGames = [];
    //el bucle for para que avance la la siguiente pagina de la api de videogame
    for (let i = 1; i < 6; i++) {
   //hacemos la peticion con axios que traigan los datos 
   let respuest = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
   //cremos una variable que guarde el objeto con los datos de la respuesta de la api
    const pageVideogames = respuest.data.results.map(char => {
        //retornamos un objeto con los datos de la api
           return{
               name: char.name,
               platforms: char.platforms.map(e => e.platform.name),
               background_image: char.background_image,
               description: char.tags.map(e => e.name),
               released: char.released,
               rating: char.rating
           }
        });
        //guardamos en el array los datos del api, para eso usamos el destructuring 
        allVideoGames= [...allVideoGames, ...pageVideogames];
   }
   //retornamos el array con objeto
    return allVideoGames;
   } catch (error) {
    //si ahi error muestra un mensaje 
    return {mgs: error.message};
   }
}

const saveDataApi = async () => {
//aqui ejecutamos la function getVideogame
  const allVideoGames = await getVideogames();
//con los modelos creamos 
  await Videogame.bulkCreate(allVideoGames);
//retornamos la ejecucion 
  return allVideoGames;
}

module.exports = saveDataApi;