import { JUEGOS_POR_NOMBRE, TODOS_LOS_JUEGOS } from "./type";

const inicialState = {
    allGames: [],
    games: []
}

const reducer = (state = inicialState, action) => {
    switch (action.type) {
        case TODOS_LOS_JUEGOS:          
        return{
            ...state,
            allgames: action.payload,
            games: action.payload
        }
        case JUEGOS_POR_NOMBRE:   
        console.log(action.payload)       
        return{
            ...state,
            allgames: action.payload
        }
        default:
         return{...state};
    }
}

export default reducer;