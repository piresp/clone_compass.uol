import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/img/header/logo.svg';

export default function Header() {
  return (
    <nav className={styles.header}>
        <div className={styles.header__div}>
            <Logo />
            <ul className={styles.header__nav}>
                <li className={styles.header__nav__items}>
                    <a href="">About us</a>
                </li>
                <li className={styles.header__nav__items}>
                    <a href="">What we do</a>
                </li>
                <li className={styles.header__nav__items}>
                    <a href="">Platforms</a>
                </li>
                <li className={styles.header__nav__items}>
                    <a href="">Our work</a>
                </li>
                <li className={styles.header__nav__items}>
                    <a href="">Careers</a>
                </li>
                <li className={styles.header__nav__items + ' ' + 
                            styles.header__nav__items__square}>
                    <a href="">Let's talk</a>
                </li>
                <li className={styles.header__nav__items}>
                    <a href="">EN</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}