const { Router } = require("express")
const { Videogame, Genre } = require("../db")

const routerVideogame = Router();

routerVideogame.get("/", async (req, res) => {
    try {
        let result = await Videogame.findAll();
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
})
module.exports = routerVideogame;