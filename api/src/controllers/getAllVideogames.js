require("dotenv").config();
const axios = require("axios");
const { Videogame, Genre } = require("../db")
const { API_KEY } = process.env;

const getAllVideogames = async () =>{
  try {
   let allVideogames = [];
   for (let i = 1; i < 6; i++) {
       const respuest = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
       let allPage = respuest.data.results.map(char => {
           return{
            name: char.name,
            platforms: char.platforms.map(e => e.platform.name),
            background_image: char.background_image,
            description: char.tags.map(e => e.name),
            released: char.released,
            rating: char.rating
            }
       });
       allVideogames = [...allVideogames, ...allPage]
   }

   return allVideogames;
  } catch (error) {
    return{mgs: error.message}
  }
}

const saveDataApi = async () => {
  const allVideogames = await getAllVideogames();
  await Videogame.bulkCreate(allVideogames);
  return allVideogames;
}

module.exports = saveDataApi;