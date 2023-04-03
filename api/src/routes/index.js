const { Router } = require('express');
//const { Videogame, Genre } = require("../db")
const routerVideogame = require("./allVideogame")



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//--------GET------------
router.use("/videogames", routerVideogame)

module.exports = router;
