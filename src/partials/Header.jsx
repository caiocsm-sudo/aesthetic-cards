import Link from "next/link";
import styles from './Header.module.css';

export default function Header() {
  return(
    <header className={styles.header}>
      <h1 className={styles.title}>Aesthetic cards</h1>
      <nav>
        <ul className={styles.ulist}>
          <li className={styles.list}>
            <Link href='/'>
              Home
            </Link>
          </li>
          <li className={styles.list}>
            <Link href='/create-card'>
              Create Card
            </Link>
          </li>
          <li className={styles.list}>
            <Link href='/login'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}