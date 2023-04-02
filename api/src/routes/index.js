const { Router } = require('express');
const { createVideogame } = require("../controllers/postVideoGame")
const {Videogame} = require("../db")



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//--------GET------------
router.get("/videogames/all", async (req, res) => {
  try {
    const allVideogames = await Videogame.findAll()
    res.status(200).json(allVideogames)
  } catch (error) {
    res.status(400).json({msg : error.message})
  }
})



//---------POST----------
router.post("/videogames", async (req, res) => {
  //console.log(req.body)
  try {
      const {name, description, platforms, image, release_date, rating} = req.body;
      let newVideoGame = await createVideogame(name, description, platforms, image, release_date, rating);
      res.status(200).json(newVideoGame)
  } catch (error) {
    res.status(400).json(error.message)
  }
});


module.exports = router;
