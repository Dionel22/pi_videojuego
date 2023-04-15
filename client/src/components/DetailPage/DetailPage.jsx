import style from "./Detail.module.css";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { detalle } from "../../redux/actions"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function DetailPage() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const details = useSelector(state=> state.detail)
  
    useEffect(()=>{
        dispatch(detalle(id))
    }, [dispatch])

   // console.log("detail")
    return(
        <div className={style.content}>
       
            <h1 className={style.id} >{id}</h1>
            <h1 className={style.name}>{details[0]?.name}</h1>
            {details[0]?.genres.map((e, i)=> typeof e === "string"? <h3 key={i} className={style.genre}>{e}</h3>: <h3 key={i} className={style.genre}>{e.name}</h3>)}{details[0]?.platforms.map((e, i)=> <h3 key={i} className={style.plata}>{e}</h3>)}
            <p className={style.decription}>{details[0]?.description}</p>
            <img className={style.imag} src={details[0]?.background_image} alt={details[0]?.name}/>
           <h3 className={style.fecha}>{details[0]?.released}</h3>
           <h3 className={style.ratings}>{details[0]?.rating}</h3>
         
            <Link to="/home"> 
            <button className={style.boton}>Volver</button>
            </Link>
        </div>
    )
}