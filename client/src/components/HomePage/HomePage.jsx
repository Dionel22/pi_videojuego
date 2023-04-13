import style from "./HomePage.module.css";
//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import Card from "../Card/Card"
import { allGames, genre} from "../../redux/actions"

export default function HomePage (props) {
    const dispatch = useDispatch()
    const videoGames = useSelector((state)=>state)
  
   const handle = () => {
    dispatch(allGames())
   }

   const handleOption = (event) => {
     const {value} = event.target;
     dispatch(genre(value))
   }

    return(
        <div>
           <SearchBar />
          { /*Botones/Opciones/Generos*/}
          <select name="genero" onChange={handleOption} >
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
           <select name="" id="">
            <option value="Origin">origin</option>
            <option value="creado">creado</option>
           </select>
           
           { /*Botones/Opciones/ A-Z/Z-A*/}
           <select name="" id="">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
           </select>
    
           <Link to="/detail" className={style.link}>
           <Card  videoGames={videoGames}/>
           </Link>
           <button onClick={handle} >bienvenido</button>
        </div>
    )
}

/*
Botones/Opciones para filtrar por género, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
 */