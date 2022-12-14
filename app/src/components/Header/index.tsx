import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/img/header/logo.svg';
import Item from './Item';
export default function Header() {
  const list = [
    { name: 'About us', link: '#' },
    { name: 'What we do', link: '#' },
    { name: 'Platforms', link: '#' },
    { name: 'Our work', link: '#' },
    { name: 'Careers', link: '#' },
    { name: 'About us', link: '#' },
    { name: 'Let\'s talk', link: '#' },
    { name: 'EN', link: '#' }
  ];
  return (
    <nav className={styles.header}>
        <div className={styles.header__div}>
            <Logo />
            <ul className={styles.header__nav}>
                {list.map((item, index) => (
                  <Item 
                    key={index}
                    {...item}
                  />
                ))}
            </ul>
        </div>
    </nav>
  );
}