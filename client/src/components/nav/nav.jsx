import style from "./nav.module.css";
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"

export default function Nav (props){
    return(
        <nav className={style.div}>
            <Link to="/create" className={style.link}>
                <button className={style.boton}>CREAR JUEGO</button>
            </Link>
            <Link to="/home" className={style.link}>
                <button className={style.boton}>HOME</button>
            </Link>
            <Link to="/about" className={style.link}>
                <button className={style.boton}>ABOUT</button>
            </Link>
            <SearchBar/>
        </nav>
    )
}