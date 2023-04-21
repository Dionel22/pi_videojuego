import style from "./SearchBar.module.css";
import { useState } from "react";
import { allGamesByName } from "../../redux/actions"
import { useDispatch } from 'react-redux';

export default function SearchBar(props) {
//----------hoost--------------
    const [name, setName] = useState("")
    const dispatch = useDispatch();
//---------funciones--flechas-------
    const handleInput = (event)=>{
        const { value } = event.target;
        setName(value)
    }

    const submit = ()=>{
      dispatch(allGamesByName(name));
      setName("")
    }

    return(
        <div >
            <input
            className={style.div}
            placeholder="nombre" 
            value={name}
            type="text" 
            onChange={handleInput} />
            <button type="text" className={style.input} onClick={submit} >buscar</button>
        </div>
    )
}