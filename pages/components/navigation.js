import Image from "next/image";
import { FiHome } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import styles from "/styles/Navigation.module.css";


export default function Navbar() {
  return (
      <div className={styles.navbar}>
        <div className={styles.logoWrapper}>
          <div className={styles.square}></div>
          <div className={styles.smallCircle}></div>
          <div className={styles.logoText}>LOGO</div>
        </div>

        <div className={styles.rightWrapper}>
          <div className={styles.icons}>
            <BiMoon className={styles.icon} />
          </div>
          <div className={styles.icons}>
            <AiOutlineArrowLeft className={styles.icon} />
          </div>
          <div className={styles.icons}>
            <FiHome className={styles.icon} />
          </div>
          <div className={styles.imageBox}>
            <div className={styles.imageWrap}>
              <Image
                alt="Cute Cat"
                src="/rajudin-hax.jpg"
                className={styles.image}
                width={39}
                height={39}
              />
              <div className={styles.imageSmallCircle}></div>
            </div>
          </div>
        </div>
      </div>
  );
}

