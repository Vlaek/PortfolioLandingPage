import { FC } from 'react'
import { Link } from 'react-scroll'
import styles from './Nav.module.scss'

const Nav: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link
						activeClass={styles.active}
						offset={-15}
						to='skills'
						spy={true}
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className={styles.item}>
					<Link
						activeClass={styles.active}
						offset={-15}
						to='works'
						spy={true}
						smooth={true}
						duration={500}
					>
						Works
					</Link>
				</li>
				<li className={styles.item}>
					<Link
						activeClass={styles.active}
						offset={-15}
						to='about'
						spy={true}
						smooth={true}
						duration={500}
					>
						About Me
					</Link>
				</li>
				<li className={styles.item}>
					<Link
						activeClass={styles.active}
						offset={-15}
						to='contacts'
						spy={true}
						smooth={true}
						duration={500}
					>
						Contacts
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
