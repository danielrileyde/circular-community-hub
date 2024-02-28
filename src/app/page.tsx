import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Footer />
    </main>
  );
}
