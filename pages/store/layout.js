import Navigation from "../components/navigation";
import Sidebar from "../components/sidebar";
import Dashboard from "../components/dashboard";
import Card from "../components/card";
import styles from "/styles/Layout.module.css";
import { useState } from "react";

export default function Layout() {
  let data = [false, false, false, false, false, false, false, false];

  const [input, useInput] = useState(data);

  return (
    <div className={styles.topContainer}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.container}>
        <main>
          <div className={styles.components}>
            <div className={styles.tops}>
              <Navigation />
              <Dashboard />
            </div>
            <div className={styles.cards}>
              {input.map((v, i) => {
                return <Card key={i} select={v} />;
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
