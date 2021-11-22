import styles from "/styles/Sidebar.module.css";
import { HiMenu } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuWrapper}>
        <HiMenu className={styles.hiMenu}/>
      </div>
    </div>
  );
}
