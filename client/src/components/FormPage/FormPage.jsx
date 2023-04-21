import style from "./FormPage.module.css";
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { createGame } from "../../redux/actions";
import validacion from "./validaciones";
import { getGenres } from "../../redux/actions";
import imageMario from "./imagen/Super-Mario-Game.png"

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

    
    //genres
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
 //console.log("e", e.target.value)
   const {value} = e.target;
   //let res = creando.platforms?.filter(a => a !== value)
    // if (res.length !== creando.platforms.length) {
    //  return setCreando({
    //      ...creando,
    //      platforms: res
    //  })
    setCreando({
        ...creando,
        platforms:[...creando.platforms, value]
    })
    setError(validacion({
        ...creando,
        platforms:[...creando.platforms, value]
    }))
 }

//}
 //console.log("stateee",creando.platforms)
}
useEffect(()=>{
    evGen()
    handlePla()
},[creando.genres,creando.platforms])

 


    const handleDelete = (value)=>{
   // e.preventDefault()
    console.log("val", value)
    setCreando({
        ...creando,
        platforms: creando.platforms.filter(el=> el !== value)
       })
        
    }

   // console.log("error",error)
   const handleSubmit = (e)=> {
    e.preventDefault()
   // console.log("err", error)
    if (!creando.name || !creando.description || !creando.background_image || creando.genres.length <= 0 || creando.platforms.length <= 0 || !creando.released || !creando.rating)  {
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
                <h1 className={style.titu}>CREATE VIDEOGAME</h1>
                {/*NAME */}
              {/*  <img className={style.imagenMario} src={imageMario} alt="mario" />*/}
                <input className={style.name} type="text" name="name" value={creando.name} onChange={handleName} />
                <label className={style.Labelname}>NAME</label>
                {error.name && <p className={style.pName}>{ error.name}</p>}

                <br />
                {/*DESCRIPTION */}
                <input className={style.description} type="text" name="description"
                value={creando.description} onChange={handleName} />
                <label className={style.Labeldescription} >DESCRIPTION</label>
                {error.description && <p className={style.pdescription}>{ error.description}</p>}
                 <br />

                 {/*RELEASED */}
                <input className={style.fecha} type="date" name="released" value={creando.released}
                onChange={handleName} 
                min="1950-01-01"
                max="2023-12-31"/>
                <label className={style.Labelfecha} >RELEASED</label>
               {error.released && <p className={style.pfecha}>{ error.released}</p>}
               <br />

                {/*BACKGROUND_IMAGEN */}
                <input className={style.imagen} type="text" name="background_image" value={creando.background_image} onChange={handleName} />
                <label className={style.Labelimagen} >Introduce Una Imagen</label>
               {error.background_image && <p className={style.pimagen}>{ error.background_image}</p>}
                <br />

                {/*RATING */}
                <input className={style.rating} type="number" name="rating" value={creando.rating} onChange={handleName} />
                <label className={style.Labelrating}>RATING</label>
                {error.rating && <p className={style.prating}>{ error.rating}</p>}
                <br />

                {/*PLATFOMS */}
                <label className={style.LabelPlatforms} >PLATFORMS</label>
                <select className={style.platform} onChange={handlePla}>
                {Plataformas.map((e, i)=>{
                    return(
                       <option key={i} value={e}>{e}</option>
                    )
                })}
                </select>

               {error.platforms && <p className={style.pplatform}>{ error.platforms}</p>}


             {/*<label className={style.genre}>GENRES</label>
                {allGenres?.map((e,i)=>{
                  return ( <label className={style.divPlatform} key={i}>{e.name}
                             <input  type="checkbox" value={e.name} onChange={evGen}/>
                            </label>)
                })}*/}
                <label className={style.genre}>GENRES</label>
                <select className={style.divPlatform}>
                {allGenres?.map((e,i)=>{
                  return <option  key={i} value={e.name}>{e.name}</option>
                })}
                </select>
               {error.genres && <p className={style.pgenre}>{error.genres}</p>}
        
           

                <button className={style.boton} type="submit">Crear Juego</button>
            </form>
        {/*PLATFORMS */}
     
        {creando.platforms?.map((e,i)=>{
            return <button key={i} className={style.botonPlatform} onClick={()=>handleDelete(e)}>{e}</button>
        })}
       

             
        </div>
    )
}