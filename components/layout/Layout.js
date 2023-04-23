import MyNav from "../MyNav";
import styles from "./Layout.module.css";

export default function Layout(props) {
  return (
    <div>
      <MyNav />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}
