
import styles from "../header.module.css"


function Nav({arr}) {
  const navList = arr.map((el) => (
    <li key={el} className="listEl">
      <a href="./">{el}</a>
    </li>
  ));
  return (
    <nav className="nav">
      <ul className="navList">{navList}</ul>
    </nav>
  );
}

export default Nav;
