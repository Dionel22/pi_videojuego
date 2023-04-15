import style from "./Card.module.css";

export default function Card (props) {
  return(
            < div key={props.id} className={style.content}>
              <h3 className={style.color}>{props.name}</h3>
              <img className={style.image} src={props.background_image} alt={props.name} />
              {props.genres?.map((j,i)=>{
                return <h3 className={style.color} key={i}>{j.name}</h3>
              })}
            </div>

  )
}


