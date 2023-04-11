import axios from "axios";
import { JUEGOS_POR_NOMBRE, TODOS_LOS_JUEGOS } from "./type";

export const allGames = () => {
    return async function(dispatch){
      let response = await axios.get("http://localhost:3001/videogames");
      console.log("response",response.data)
      return dispatch({
        type: TODOS_LOS_JUEGOS,
        payload: response.data,
      })
    }
}

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
