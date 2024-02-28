import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className="header">
      Circular Community Hub
      <nav>
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
