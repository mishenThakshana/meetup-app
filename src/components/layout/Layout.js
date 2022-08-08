import styles from "assets/css/modules/layout.module.css";
import MainNav from "./MainNav";

const Layout = (props) => {
  return (
    <div>
      <MainNav />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
