//import style from "./Paginado.module.css";
export default function Paginado(props) {
    //  const handlePrev = (event) => {}
    // console.log(props)

    let array = [];
    for (let i = 0; i <= Math.ceil(props.videoGames/ props.currentPagina -1); i++) {
        array.push(i+1);
        //console.log(i)
    }
   
    const handlePag = (event) => {
        //el numero del boton
        const {value} =event.target;
        props.paginas(value)
       
    }

    return(
        <div>
            <button >Prev</button>
            {array && array.map((e, i)=> <button key={i} onClick={handlePag} value={e}>{e}</button>)}
            <button >Next</button>
        </div>
    )
}