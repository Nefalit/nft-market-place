import { ReactSVG } from "react-svg";
import search from "../../../img/input_search.svg";

import styles from "../header.module.css"



function Input(params) {
    return(
        <div>
            <ReactSVG src={search} />
            <input/>
        </div>
    )
}
export default Input