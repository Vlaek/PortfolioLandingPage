import { FC } from 'react'
import { Link } from 'react-scroll'
import styles from './Nav.module.scss'

const links = [
  { to: 'skills', label: 'Skills' },
  { to: 'works', label: 'Projects' },
  { to: 'about', label: 'Experience' },
  { to: 'contacts', label: 'Contact' },
]

const Nav: FC = () => {
  return (
    <nav className={styles.nav} aria-label='Primary navigation'>
      <Link className={styles.brand} to='home' smooth duration={500}>
        VE
      </Link>
      <ul className={styles.list}>
        {links.map((item) => (
          <li className={styles.item} key={item.to}>
            <Link activeClass={styles.active} to={item.to} spy smooth duration={500}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
