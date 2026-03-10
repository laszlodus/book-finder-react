import Logo from "./Logo";
import Menu from "./Menu";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Menu />
    </div>
  );
}

export default Header;
