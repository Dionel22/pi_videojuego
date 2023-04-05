const { Router } = require("express")
const {getAllVideogames, gameByIdApi, gameByIdDb, nameVideogameApi,createVideogame} = require("../controllers/getAllVideogames")

const routerVideogame = Router();

//---------------get allVideogame-----------------
routerVideogame.get("/", async (req, res) => {
    console.log(req.query.name)
    try {
        const { name } =req.query;
        if(name){
        let resultName = await nameVideogameApi(name)
        console.log(resultName)
        res.status(200).json(resultName);
        return
        }
        let result = await getAllVideogames();
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
});

 //--------------get--id-----------------
routerVideogame.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (id.length <= 4) {
          let result = await gameByIdApi(id);
          return res.status(200).json(result)
        }
          let resultDb = await gameByIdDb(id);
          res.status(200).json(resultDb)
    } catch (error) {
       res.status(400).send(`No Se Encontró juego con ese id ${id}`) 
    }
});

//-----------post----------------
routerVideogame.post("/", async (req, res) => {
    try {    
     const { name, description, platforms, background_image, genre, released, rating } = req.body;
     let result = await createVideogame(name, description, platforms, background_image, genre, released, rating)
     res.status(200).json(result)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }

})

module.exports = routerVideogame;