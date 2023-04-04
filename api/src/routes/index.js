const { Router } = require('express');
//const { Videogame, Genre } = require("../db")
const routerVideogame = require("./allVideogame")
const routerGenre = require("./allGenres")



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//--------GET------------
router.use("/videogames", routerVideogame)
router.use("/genres", routerGenre)

module.exports = router;
