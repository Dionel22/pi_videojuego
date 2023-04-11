//import style from "./HomePage.module.css";
//import { useState } from "react";
//import { useDispatch } from "react-redux"
import SearchBar from "../SearchBar/SearchBar"
import Card from "../Card/Card"
//import { allGames, allGamesByName } from "../../redux/actions"

export default function HomePage (props) {
   

    return(
        <div>
          <h1>hola mundo</h1>
           <SearchBar />
           <Card />
        </div>
    )
}