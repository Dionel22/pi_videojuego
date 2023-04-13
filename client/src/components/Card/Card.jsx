import style from "./Card.module.css";

export default function Card (props) {
  return(
    <div >
        <div className={style.div}>
        {props.videoGames.allGames?.map((e)=> {
          return(
            <div key={e.id} className={style.content}>
              <h3 className={style.color}>{e.name}</h3>
              <img className={style.image} src={e.background_image} alt={e.name} />
              {e.genres?.map((j)=>{
                return <h3 className={style.color} key={j.id}>{j.name}</h3>
              })}
            </div>
          )
        })}
        </div>
    </div>
  )
}


