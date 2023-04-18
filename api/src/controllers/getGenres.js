require("dotenv").config
const { API_KEY } = process.env
const axios = require("axios")
const { Genre } = require("../db")

const allGenre = async () => {
    let genres = [];
    let respuest = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    let allGenres = await respuest.data.results.map(genre => {
      return {name: genre.name}  
    });
    //  await Genre.bulkCreate(allGenres);
    //aqui buscar con el forEach los elemento en la bd si no esta lo crea con el metodo findOrCreate y si lo encuentra lo devuelve
    allGenres.forEach(element => {
      Genre.findOrCreate({where:{name: `${element.name}`}});
    });
      return genres = [...genres, ...allGenres]
    
}

module.exports = allGenre;