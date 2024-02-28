import Link from "next/link";
import styles from "../components/Header.module.css";

export default function Header() {
  return (
    <header className="header">
      <h2>Circular Community Hub</h2>
      <nav className="nav">
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
