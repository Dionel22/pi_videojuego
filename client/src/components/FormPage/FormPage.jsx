import style from "./FormPage.module.css";
import { useDispatch } from "react-redux"
import { useState } from "react"
import { createGame } from "../../redux/actions";

export default function FormPage (){
    const dispatch = useDispatch()
    const [chec , setChec] = useState(false)
    const [ creando, setCreando ] = useState({
        name: "",
        description: "",
        background_image: "",
        genres: ["aventura", "action"],
        platforms: [],
        released: 0,
        rating: 0
    });

    const handleName = (event) => {
    console.log(event.target.value)
    const { name, value} = event.target
    setCreando({
        ...creando,
        [name]: value
    })
    }
    const handleDescription = (event) => {
    console.log(event.target.value)
    const { name, value} = event.target
    setCreando({
        ...creando,
        [name]: value
    })
    }
    const handleRealease = (event) => {
        console.log(event.target.value)
        const { name, value} = event.target
        setCreando({
            ...creando,
            [name]: value
        })
    }
    const handlePlattaform = (event) => {
        console.log(event.target.value)
    }
    const handleImagen = (event) => {
        const { name, value} = event.target
        console.log(value)
        setCreando({
            ...creando,
            [name]: value
        })
    }
    const handleRating = (event) => {
        console.log(event.target.value)
        const { name, value} = event.target
        setCreando({
            ...creando,
            [name]: value
        })
    }
    const handleGenre = (event) => {
        console.log(event.target.value)
        event.preventDefault()
        setChec(!chec)
    }

    const handleClick = (e)=>{
        e.preventDefault()
        dispatch(createGame(creando))
    }

    return(
        <div className={style.div}>
            <form action="">
                <label className={style.Labelname}>Introduce El Nombre</label>
                <input className={style.name} type="text" name="name"  onChange={handleName} />

                <label className={style.Labeldescription} >Introduce El Descripcion</label>
                <input className={style.description} type="text" name="description" onChange={handleDescription} />

                <label className={style.Labelfecha} >Introduce El Fecha de Lazamiento</label>
                <input className={style.fecha} type="date" name="released" onChange={handleRealease} />

                <label className={style.Labeldescription} >Introduce  Plataformas</label>
                <input className={style.description} type="text" name="platforms" onChange={handlePlattaform} />

                <label className={style.Labeldescription}>Introduce  Genero</label>
                <input className={style.description} type="text" name="genres" onChange={handleGenre} />
                
                
            {  /*  <label >Selecciona esta opción:3</label>
   <input type="checkbox" checked={chec} name="genres" onChange={handleGenre}/> Aventure           
<br />
   <input type="checkbox" checked={chec} name="genres" onChange={handleGenre}/> Action           
    <br />*/}
                <label className={style.Labeldescription} >Introduce Una Imagen</label>
                <input className={style.description} type="file" name="background_image" onChange={handleImagen} />

                <label className={style.Labeldescription}>Introduce Rating</label>
                <input className={style.description} type="number" name="rating" onChange={handleRating} />

                <button className={style.boton} onClick={handleClick}>Guardar</button>
            </form>
        </div>
    )
}