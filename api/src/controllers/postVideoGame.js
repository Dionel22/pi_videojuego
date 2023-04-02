const { Videogame } = require("../db")

const createVideogame = async (name, description,platforms,background_image,released, rating) =>{
  const newVideogame = await Videogame.create({name, description, platforms, background_image, released, rating})
  return newVideogame;
}

module.exports= {createVideogame};
