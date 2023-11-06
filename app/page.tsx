import Navbar from "./components/Navbar";
import HomePage from "./Home/Home";
import styles from "./page.module.css"

export default function App() {
  return (
    <div className={styles.containercharlist}>
      <Navbar />
      <HomePage />
    </div>
  );
}
