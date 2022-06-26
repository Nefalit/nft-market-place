import { ReactSVG } from "react-svg";

import moon from "../../../img/moon_theme.svg";

import styles from "../header.module.css"



function Theme(params) {
  return (
    <div className="input_wrapper">
      <ReactSVG src={moon} />
      <input type="checkbox" className="input" />
    </div>
  );
}
export default Theme;
