import { FiPlayCircle } from "react-icons/fi";
import Image from "next/dist/client/image";
import styles from "/styles/Card.module.css";
import React, { useState } from "react";
import { useAppContext } from "/context/state.js";

export default function Cad(props) {
  const [options, setOptions] = useState(true);

  const [context, setContext] = useAppContext();
  const [state, setstate] = useState(false);

  function handleClick() {
    setOptions(!options);
  }
  function handleSelectAll(evt) {
    console.log(evt);
    setstate(evt.target.checked);
    setContext({ ...context, selectAll: false });
  }
  return (
    <div
      className={`${styles.card} ${
        context.selectAll ? styles.cardBorder : null
      }`}
    >
      {context.actionStarted && (
        <div className={styles.selectArea}>
          <div className={styles.innerSelectArea}>
            <input
              type="checkbox"
              className={styles.input}
              id="select"
              checked={state || context.selectAll}
              onChange={handleSelectAll}
            />
            <label htmlFor="select" className={styles.label}>
              Select Item{context.selectAll}
            </label>
          </div>
        </div>
      )}
      {options ? (
        <div onClick={handleClick}>
          <div className={styles.cardTop}>
            <FiPlayCircle
              className={styles.fiPlayCircle}
              style={{ color: "#58CC00" }}
            />
            <div className={styles.titleTexts}>
              <div>T-SHIRT</div>
              <div>Season-1-Spring/Summer</div>
            </div>
            <div className={styles.bigCircle}></div>
          </div>
          <div className={styles.midCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/faith-yarn.jpg"
                alt="Black Shirt"
                width={99}
                height={147}
              />
              <div className={styles.imageTag}>T-Shirt-#GHG83B</div>
            </div>

            <div className={styles.midRightWrap}>
              <div className={styles.actions}>
                <div>WE:3CW/2021-01-22</div>
                <div>Action: 3</div>
              </div>

              <div>
                <div className={styles.actionsAndStats}>
                  <div>Sales rate</div>
                  <div className={styles.statsRightWrap}>
                    <div>80%</div>
                    <div className={styles.smallCircle}></div>
                  </div>
                </div>
                <div className={styles.actionsAndStats}>
                  <div>1st Sales</div>
                  <div className={styles.statsRightWrap}>
                    <div>10</div>
                    <div className={styles.smallCircle}></div>
                  </div>
                </div>
                <div className={styles.actionsAndStats}>
                  <div>Items per</div>
                  <div className={styles.statsRightWrap}>
                    <div>1,1</div>
                    <div className={styles.smallCircle}></div>
                  </div>
                </div>
                <div className={styles.actionsAndStats}>
                  <div>Return rate</div>
                  <div className={styles.statsRightWrap}>
                    <div>2%</div>
                    <div className={styles.smallCircle}></div>
                  </div>
                </div>
              </div>

              <div className={styles.salePrice}>
                <div>Sale Price</div>
                <div>69.59€</div>
              </div>
            </div>
          </div>
          <div className={styles.cardStats}>
            <div className={styles.topStats}>
              <div>
                <div className={styles.title}>Preorder</div>
                <div className={styles.digit}>32</div>
              </div>
              <div>
                <div className={styles.title}>Reorder</div>
                <div className={styles.digit}>25</div>
              </div>
              <div>
                <div className={styles.title}>Rearrangmt.</div>
                <div className={styles.digit}>2</div>
              </div>
              <div>
                <div className={styles.title}>Delivered</div>
                <div className={styles.digit}>61</div>
              </div>
            </div>
            <div className={styles.bottomStats}>
              <div>
                <div className={styles.title}>Returned</div>
                <div className={styles.digit}>1</div>
              </div>
              <div>
                <div className={styles.title}>Sold</div>
                <div className={styles.digit}>26</div>
              </div>
              <div>
                <div className={styles.title}>Correction</div>
                <div className={styles.digit}>1</div>
              </div>
              <div>
                <div className={styles.title}>Stock</div>
                <div className={styles.digit}>56</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.cardTop}>
            <FiPlayCircle
              className={styles.fiPlayCircle}
              style={{ color: "#58CC00" }}
            />
            <div className={styles.titleTexts}>
              <div>T-SHIRT</div>
              <div>Season-1-Spring/Summer</div>
            </div>
            <div className={styles.bigCircle}></div>
          </div>
          <div className={styles.buttonsArea}>
            <div className={styles.buttonGroup}>
              <div color="red">{props.select}</div>
              <button type="button">Show</button>
              <button type="button">Select</button>
              <button type="button">Define a target</button>
              <button type="button" onClick={handleClick}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
