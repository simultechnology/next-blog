import Logo from '@/components/logo';
import Nav from '@/components/nav';
import styles from 'styles/header.module.css';

export function Header() {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  )
}
