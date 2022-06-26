import styles from "../header.module.css";

function Nav({ arr }) {
  const navList = arr.map((el) => (
    <li key={el} className="listEl">
      <a className={styles.navLink} href="./">
        {el}
      </a>
    </li>
  ));
  return (
    <nav className="nav">
      <ul className={styles.navList}>{navList}</ul>
    </nav>
  );
}

export default Nav;
