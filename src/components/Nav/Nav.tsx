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
