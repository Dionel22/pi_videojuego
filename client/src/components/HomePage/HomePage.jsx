import style from "./HomePage.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar"
import Card from "../Card/Card"
import { allGames, genre, order, ordenaPorNombre, orderByRating} from "../../redux/actions"

export default function HomePage () {
    const dispatch = useDispatch()
    const videoGames = useSelector((state)=>state.games)
    const [pagina, setPagina] = useState(1);
    const [currentPagina, setCurrentPagina] = useState(15);
    const nextPagina = pagina * currentPagina;
    const lastPagina = nextPagina - currentPagina;
    const currentGames = videoGames.slice(lastPagina,nextPagina)

    const paginas = (num) => {
      setPagina(num)
    }
    
  //aqui trae todas las cartas
   useEffect(() => {
    dispatch(allGames())
  }, [dispatch]);
  
  
  const handleOptionGenres = (event) => {
    const {value} = event.target;
    dispatch(genre(value))
   }

   const handleOptionOrigin = (event) => {
    event.preventDefault()
     const {value} = event.target;
     dispatch(order(value))
   }
   const handleOptionName = (event) => {
    event.preventDefault()
     const {value} = event.target;
     dispatch(ordenaPorNombre(value))
     setPagina(1)
    }
    const handleOptionRating = (event) => {
     event.preventDefault()
     const {value} = event.target;
     dispatch(orderByRating(value))
     setPagina(1)
   }
    return(
        <div>
           <SearchBar />
          { /*Botones/Opciones/Generos*/}
          <select name="genero" onChange={handleOptionGenres} >
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Indie">Indie</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            <option value="Shooter">Shooter</option>
            <option value="Casual">Casual</option>
            <option value="Simulation">Simulation</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Arcade">Arcade</option>
            <option value="Platformer">Platformer</option>
            <option value="Racing">Racing</option>
            <option value="Massively MultiplayerRacing">Massively Multiplayer</option>
            <option value="Sports">Sports</option>
            <option value="Fighting">Fighting</option>
            <option value="Family">Family</option>
            <option value="Board Games">Board Games</option>
            <option value="Educational">Educational</option>
            <option value="Card">Card</option>
          </select>
          { /*Botones/Opciones/Api o Bd*/}
           <select name="Origen" onChange={handleOptionOrigin}>
            <option value="All">All</option>
            <option value="Origen">origin</option>
            <option value="Creado">creado</option>
           </select>
           
           { /*Botones/Opciones/ A-Z/Z-A*/}
           <select name="OrdenarPorNombre" onChange={handleOptionName}>
            <option value="ascendentemente">A-Z</option>
            <option value="descendentemente">Z-A</option>
           </select>
           { /*Botones/Opciones/ Rating*/}
           <select name="Rating" onChange={handleOptionRating}>
            <option value="Mejor">mejor calificación</option>
            <option value="Peor">peor calificación</option>
           </select>
           <Paginado currentPagina={currentPagina} videoGames={videoGames.length} paginas={paginas}/>
           <Link to="/detail" className={style.link}>
           <Card  currentGames={currentGames}/>
           </Link>

        </div>
    )
}
