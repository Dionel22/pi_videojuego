import style from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import Xbox from "./pngwing.com (2).png"
import Nintendo from "./pngwing.com (3).png"
import Sony from "./pngwing.com (4).png"
import Play from "./pngwing.com (5).png"
import Pc from "./pngwing.com (6).png"

export default function LandingPage(props) {
    return(
        <div>
         <img className={style.xbox} src={Xbox} alt="xbox" />
         <img className={style.nintendo} src={Nintendo} alt="nintendo" />
         <img className={style.sony} src={Sony} alt="sony" />
         <img className={style.play} src={Play} alt="play" />
         <img className={style.pc} src={Pc} alt="pc" />
         <Link to="/home">
         <button>Home</button>
         </Link>
        </div>
    )
}