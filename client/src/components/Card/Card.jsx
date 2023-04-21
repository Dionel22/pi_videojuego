import style from "./Card.module.css";

export default function Card (props) {
  return(
            < div key={props.id} className={style.content}>
              <div className={style.front}>
              <img className={style.image} src={props.background_image} alt={props.name} /></div>
              <div className={style.back}>
              <h3 className={style.color}>{props.name}</h3>
              {props.genres?.map((j,i)=>{
                return <h3 className={style.genre} key={i}>{j.name}</h3> 
              })} 
              </div>
            </div>

  )
}


