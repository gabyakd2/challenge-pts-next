import React from "react";
import CharList from "./components/CharList";
import ButtonLoad from "./components/ButtonLoad";
import styles from "./homepage.module.css";

function HomePage() {
  return (
    <div>
      <h1 className={styles.titleHome}>Characters</h1>
      <CharList />
      <ButtonLoad />
    </div>
  )
}

export default HomePage