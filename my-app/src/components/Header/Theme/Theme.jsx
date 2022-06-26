import { ReactSVG } from "react-svg";
import { Component } from "react";

import moon from "../../../img/moon_theme.svg";
import sun from "../../../img/sun.svg";

import styles from "../header.module.css";

class Theme extends Component {
  state = {
    checked: true,
  };

  toggle = () => {
    this.setState({ checked: !this.state.checked });
    if (this.state.checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  render() {
    const { checked } = this.state;
    return (
      <div className={styles.themeWrapper}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={this.toggle}
        />
        {checked ? (
          <ReactSVG src={moon} className={styles.moon} />
        ) : (
          <ReactSVG src={sun} className={styles.sun} />
        )}
      </div>
    );
  }
}
export default Theme;
