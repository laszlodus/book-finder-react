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
          <Link>
            <li>Saved Books</li>
          </Link>
          <Link>
            <li>About Book Finder</li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Menu;
