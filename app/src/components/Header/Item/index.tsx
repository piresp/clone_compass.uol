import styles from '../Header.module.scss' 

export default function Item({ name, link}: { name: string, link: string}) {
  return (
    <li className={styles.header__nav__items}>
      <a href={link}>{name}</a>
    </li>
  )
}