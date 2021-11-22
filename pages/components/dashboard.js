import { FiPlayCircle } from "react-icons/fi";
import { RiFlashlightLine } from "react-icons/ri";
import { FaGreaterThan, FaHome } from "react-icons/fa";
import styles from "/styles/Dashboard.module.css";
import { useAppContext } from "/context/state.js";


export default function Dashboard() {
  const dateToday = new Date().toDateString();

  const [context, setContext] = useAppContext()

  function handleStartAction() {
    // update state and display checked boxes of cards
    setContext({...context, actionStarted : !context.actionStarted})
  }

  function handleSelectAll (evt) {
    console.log(evt)
    setContext({...context, selectAll : evt.target.checked})
  }

  return (
    <div>
      <div className={styles.dashboard}>
        <div className={styles.leftWrapper}>
          <div className={styles.icon}>
            <FaHome className={styles.home} />
          </div>
          <div className={styles.dashboardText}>
            <div className={styles.firstText}>Dashboard</div>
            <div className={styles.greaterThanWrap}>
              <FaGreaterThan className={styles.greaterThan}/>
            </div>
            <div className={styles.secondText}>Articles</div>
          </div>
        </div>

        <div className={styles.rightWrapper}>
          <div className={styles.date}>{dateToday}</div>
        </div>
      </div>

      <div className={styles.dashboardWrapper}>
        <div className={styles.buttonSelectWrapper}>
          <button type="button" className={`${styles.button} ${context.actionStarted ? styles.red : null}`} onClick = {handleStartAction}>
            <RiFlashlightLine className={styles.RiFlashlightLine} />
            {context.actionStarted ? <span>Stop Action</span> : <span>Start Action</span>}
          </button>

          {context.actionStarted && (
            <div className={styles.innerArea}>
              <input
                type="checkbox"
                className={styles.input}
                id="select"
                checked={context.selectAll} onChange={handleSelectAll} 
              />
              <label htmlFor="select" className={styles.label}>
                Select All
              </label>
            </div>
          )}
        </div>
        <div className={styles.update}>{context.selectAll ? <span>8 of 8 items selected</span> : <span>0 of 8 items selected</span>}</div>

        <FiPlayCircle
          className={styles.fiPlayCircle}
          style={{ color: "#58CC00" }}
        />
      </div>
    </div>
  );
}
