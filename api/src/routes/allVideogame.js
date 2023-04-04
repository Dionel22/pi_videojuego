const { Router } = require("express")
const { Videogame, Genre } = require("../db")
const {getAllVideogames, gameByIdApi, gameByIdDb, nameVideogameApi,createVideogame} = require("../controllers/getAllVideogames")

const routerVideogame = Router();
/*
 GET | /videogames/name?="..."
Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el videojuego, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos.
 */

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

/*
 GET | /videogames/:idVideogame
Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
El videojuego es recibido por parámetro (ID).
Tiene que incluir los datos del género del videojuego al que está asociado.
Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.
 */
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
       res.status(400).json({msg: error.message}) 
    }
});





/*
 POST | /videogames
Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
Toda la información debe ser recibida por body.
Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
*/

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