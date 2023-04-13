import { JUEGOS_POR_NOMBRE, TODOS_LOS_JUEGOS, GENERO } from "./type";

const inicialState = {
    allGames: [],
    games: [],
    genres: [],
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
        return{
            ...state,
            allGames: action.payload
        }
        case GENERO:
            let filGenres = state.allGames?.filter((e )=> e.genres.includes(action.payload))
            return{
                ...state,
                games: filGenres
            }
        default:
         return{...state};
    }
}

export default reducer;