import axios from "axios";
import { JUEGOS_POR_NOMBRE, TODOS_LOS_JUEGOS, GENERO, ORDENAR, ORDENAR_POR_NOMBRE, ORDENAR_POR_RATING, DETALLE } from "./type";

//trae todo los juego
export const allGames = () => {
  return async function(dispatch){
    try {
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
//ordena
export const order = (value) =>{
  if (value === "Origin") { 
      return{
        type: ORDENAR,
        payload: value,
      }
  }
    return{
      type: ORDENAR,
      payload: value,
    }
  
}

//asedente
export const ordenaPorNombre = (value) => {
  if (value === "ascendentemente") {
    return{
      type: ORDENAR_POR_NOMBRE,
      payload: value,
    }
  }
  return{
    type: ORDENAR_POR_NOMBRE,
    payload: value,
  }
}

//ordenar por rating
export const orderByRating = (value)=>{
  if (value === "Mejor") {
    return{
      type: ORDENAR_POR_RATING,
      payload: value,
    }
  }
  return{
    type: ORDENAR_POR_RATING,
    payload: value,
  }
}

//detalle

export const detalle = (id)=> {
  if (id.length <= 5) {
    
    return async function(dispatch){
      let result = await axios.get(`http://localhost:3001/videogames/${id}`)
      return dispatch({
        type: DETALLE,
        payload: result.data,
      })
    }
  }
  return {
    type: DETALLE,
    payload: id,
  }
  
}