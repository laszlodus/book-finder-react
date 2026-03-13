import { useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.menu}>
      <button className={styles.button} onClick={toggleMenu}>
        {!isOpen ? "Menu" : "Close"}
      </button>
      {isOpen && (
        <ul>
          <li>
            <Link to="/">Hompage</Link>
          </li>
          <li>
            <Link to="/results">Search Results</Link>
          </li>
          <li>
            <Link to="/savedBooks">Saved Books</Link>
          </li>
          <li>
            <Link to="/about">About Book Finder</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
