import axios from "axios";
import { JUEGOS_POR_NOMBRE, TODOS_LOS_JUEGOS, GENERO } from "./type";

//trae todo los juego
export const allGames = () => {
  return async function(dispatch){
    try {
      console.log("response")
      let response = await axios.get("http://localhost:3001/videogames");
      return dispatch({
        type: TODOS_LOS_JUEGOS,
        payload: response.data,
      })
    
    } catch (error) {
      console.log(error)
    }
  }
}

//trae por nombre
export const allGamesByName = (name)=>{
    return async function (dispatch) {
        try {
            let response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            return dispatch ({
                type: JUEGOS_POR_NOMBRE,
                payload: response.data
              });
        } catch (error) {
            console.log(error)
        }
    }
}

//trae por genero
export const genre = (genres) => {
    return {
      type: GENERO,
      payload: genres
    }
}