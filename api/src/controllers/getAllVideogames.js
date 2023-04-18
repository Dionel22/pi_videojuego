require("dotenv").config();
const axios = require("axios");
const { Videogame, Genre } = require("../db")
const { API_KEY } = process.env;


//--------todos--los-VideoGames--------
const getAllVideogamesApi = async () =>{
  let allVideogames = [];
  for (let i = 1; i < 6; i++) {
  const respuest = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
    let allPage = respuest.data.results.map(char => {
        return{
          id: char.id,
          name: char.name,
          platforms: char.platforms.map(e => e.platform.name),
          background_image: char.background_image,
          released: char.released,
          genres: char.genres.map(e => e),
          rating: char.rating
        }
    });
       allVideogames = [...allVideogames, ...allPage]
  }
 
   return allVideogames;
}


const getAllVideogamesByBd = async ()=>{
  let respuesta = await Videogame.findAll({include: Genre})
  return respuesta
}

const getAllGames = async ()=>{
  let resApi = await getAllVideogamesApi();
  let resBd = await getAllVideogamesByBd();
  return resApi.concat(resBd)
}
//------------------------

//-----get--Id--api-----
const gameByIdApi = async (id) => {
 let respuestApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
  return{
      id: respuestApi.data.id,
      name: respuestApi.data.name,
      description: respuestApi.data.description,
      platforms: respuestApi.data.platforms.map(e => e.platform.name),
      background_image: respuestApi.data.background_image,
      released: respuestApi.data.released,
      genres: respuestApi.data.genres.map(e => e.name),
      rating: respuestApi.data.rating
  };
}

//-----get--Id--Bd-----
const gameByIdDb = async (id) => {
 let respuest = await Videogame.findByPk(id,{include: Genre});
 return respuest;
}
//-----------------


//------post-------
const createVideogame = async ( name, description, platforms, background_image, genre, released, rating) =>{
  let result = await Videogame.create({name, description, platforms, background_image, released, rating});
  let genreDb = await Genre.findAll({
      where: {
          name: genre
        }
    });
 await result.addGenre(genreDb);
 return result;
}

module.exports = {getAllGames , gameByIdApi, gameByIdDb, createVideogame};