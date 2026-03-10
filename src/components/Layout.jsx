import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
