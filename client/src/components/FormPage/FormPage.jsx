import style from "./FormPage.module.css";
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { createGame } from "../../redux/actions";
import validacion from "./validaciones";
import { getGenres } from "../../redux/actions";

export default function FormPage (){
    const dispatch = useDispatch()
    const allGenres = useSelector((state)=> state.genres)
    const [ creando, setCreando ] = useState({
        name: "",
        description: "",
        background_image: "",
        genres: [],
        platforms: [],
        released: "",
        rating: ""
    });

    const [error , setError] = useState({
        name: "",
        description: "",
        background_image: "",
        genres: [],
        platforms: [],
        released: "",
        rating: ""
    })

    const Plataformas = ["PC", "iOS", "Android", "macOS", "PlayStation", "Xbox", "Nintendo", "Linux", "Apple", "Atari", "Genesis", "SEGA"];

    useEffect(()=>{
        dispatch(getGenres())
    },[])

  //validacion
      const handleName = (event) => {
    //console.log(event.target.value)
    const { name, value} = event.target
    setCreando({
        ...creando,
        [name]: value
    })
    setError(validacion({
        ...creando,
        [name]: value
    }))
    }

    
    
    //.----------------------
    const evGen = (e)=>{
        // console.log(e.target.value)
   if (e) {
       const {value} = e.target
       let res = creando.genres?.filter(el => el !== value)
       if (res.length !== creando.genres.length) {
        return setCreando({
            ...creando,
            genres: res
        })    
    }
          setCreando({
              ...creando,
              genres: [...creando.genres, value ]
            })
        }
        setError(validacion({
         ...creando,
         genres: [...creando.genres]
        }))
        
}

const handlePla = (e)=>{
// console.log(e.target.value)
if (e) {
 
    const {value} = e.target;
   let res = creando.platforms?.filter(a => a !== value)
    if (res.length !== creando.platforms.length) {
     return setCreando({
         ...creando,
         platforms: res
     })
    }
    setCreando({
        ...creando,
        platforms: [...creando.platforms, value]
    })
    setError(validacion({
        ...creando,
        platforms: creando.platforms
    }))
}
 //console.log("stateee",creando.platforms)
}
useEffect(()=>{
    evGen()
    handlePla()
},[creando.genres, creando.platforms])

 


    const handleValidacion = ()=>{
    //    e.preventDefault()
    console.log("val")
        
        
        
    }
   // console.log("error",error)
   const handleSubmit = (e)=> {
    e.preventDefault()
    console.log("err", error)
    if (error)  {
        return alert("te falta completar")
    }
    dispatch(createGame(creando))
   //console.log(creando)
   alert("se a creado")
   setCreando({
    name: "",
    description: "",
    background_image: "",
    genres: [],
    platforms: [],
    released: "",
    rating: ""
})
    

   }
  // console.log("err",error)

    return(
        <div className={style.div}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label className={style.Labelname}>Introduce El Nombre</label>
                <input className={style.name} type="text" name="name"  onChange={handleName} />
                {error.name && <p>{ error.name}</p>}

                <label className={style.Labeldescription} >Introduce El Descripcion</label>
                <input className={style.description} type="text" name="description" onChange={handleName} />
                <p>{error.description && error.description}</p>

                <label className={style.Labelfecha} >Introduce El Fecha de Lazamiento</label>
                <input className={style.fecha} type="date" name="released" onChange={handleName} min="1950-01-01"
                            max="2023-12-31"/>
                <p>{error.released && error.released}</p>

                <label className={style.Labeldescription} >Introduce  Plataformas</label>
                {Plataformas.map((e, i)=>{
                    return(
                        <div key={i}>
                            <input  type="checkbox" value={e} onChange={handlePla}/>
                            <label name="platforms" >{e}</label>
                        </div>
                    )
                })}
                <input className={style.description} type="text" name="platforms" onChange={handleName} />
                <p>{error.platforms && error.platforms}</p>


                <label className={style.Labeldescription}>Introduce  Genero</label>
                {allGenres?.map((e,i)=>{
                  return ( <label key={i}>{e.name}
                        <input  type="checkbox" value={e.name} onChange={evGen}/>
                    </label>)
                })}
               {error.genres && <p>{error.genres}</p>}
             
        
                <label className={style.Labeldescription} >Introduce Una Imagen</label>
                <input className={style.description} type="text" name="background_image" onChange={handleName} />
                <p>{error.background_image && error.background_image}</p>

                <label className={style.Labeldescription}>Introduce Rating</label>
                <input className={style.description} type="number" name="rating" onChange={handleName} />
                <p>{error.rating && error.rating}</p>

                <button className={style.boton} type="submit" disabled={handleValidacion}>Crear Juego</button>
            </form>
        

             
        </div>
    )
}