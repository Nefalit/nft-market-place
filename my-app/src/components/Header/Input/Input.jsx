import { ReactSVG } from "react-svg";
import Theme from "../Theme/Theme";
import search from "../../../img/input_search.svg";

import styles from "../header.module.css";

function Input() {
  return (
    <div className={styles.inputWrapper}>
      <button className={styles.searchBtn} type="button">
        <ReactSVG src={search} />
      </button>
      <input className={styles.headerInput} type="text" />
      <Theme />
    </div>
  );
}
export default Input;
