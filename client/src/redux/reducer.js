import { JUEGOS_POR_NOMBRE, TODOS_LOS_JUEGOS, GENERO, ORDENAR, ORDENAR_POR_NOMBRE, ORDENAR_POR_RATING, DETALLE } from "./type";

const inicialState = {
    allGames: [],
    games: [],
    detail: []
}

const reducer = (state = inicialState, action) => {
    switch (action.type) {
        case TODOS_LOS_JUEGOS:          
        return{
            ...state,
            allGames: action.payload,
            games: action.payload
        }
        case JUEGOS_POR_NOMBRE:      
        return{
            ...state,
            games: action.payload
        }
        case GENERO:
            //console.log(action.payload)
            let filGenres = action.payload === "All" ? state.allGames : state.allGames.filter(game => game.genres?.some(genre => genre.name === action.payload))
            return{
                ...state,
                games: filGenres
            }
        case ORDENAR:
            //console.log(action.payload)
            let filOrigen = action.payload === "Creado"? state.allGames.filter((e)=> e.description): state.allGames.filter((e)=> !e.description)
            return{
                ...state,
                games: action.payload === "All"? state.allGames : filOrigen
            }
        case ORDENAR_POR_NOMBRE:
            console.log(action.payload)
            /*{id: 3328, name: 'The Witcher 3: Wild Hunt', platforms: Array(6), background_image: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg', released: '2015-05-18', …} */
            let filName = state.allGames.sort((a, b) =>{
                if (a.name < b.name) {
                    return action.payload === "ascendentemente" ? -1: 1
                  } 
                   if (a.name > b.name) {
                     if(action.payload === "descendentemente" ) return -1
                    return 1
                  }})
                  console.log(filName)
            return{
                ...state,
                games: filName
            }
        case ORDENAR_POR_RATING:
           // console.log(action.payload)
            const filRatings = state.games.sort((a, b)=> {
                if (a.rating < b.rating) {
                    return action.payload === "Mejor" ? 1: -1
                  }
                  if (a.rating > b.rating) {
                    if (action.payload === "Peor") {
                      return 1
                    }
                    return -1 
                  }
                }
            )
            return{
                ...state,
                games: filRatings
            }
        case DETALLE:
           // console.log( action.payload)
            let fildetalle = action.payload.length >= 6 ? state.allGames.filter((e)=> e.id ===  action.payload): [action.payload]
           //  console.log(defi)
            return{
                ...state,
              detail: fildetalle
            }
        default:
         return{...state};
    }
}

export default reducer;