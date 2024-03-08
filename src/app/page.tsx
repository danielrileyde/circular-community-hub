import styles from "./page.module.css";
import Header from "./components/header/header";
import Section from "./components/section/section";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Section />
      <Footer />
    </main>
  );
}
