import styles from "./page.module.css";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Intro />
      </main>
    </>
  );
}
