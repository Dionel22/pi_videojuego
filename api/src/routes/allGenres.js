const allGenre = require("../controllers/getGenres");
const { Router } = require("express");

const routerGenre = Router();

/*
GET | /genres
Obtiene un arreglo con todos los géneros existentes de la API.
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
*/
routerGenre.get("/", async (req, res) => {
    try {
        let result = await allGenre();
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
});

module.exports = routerGenre;