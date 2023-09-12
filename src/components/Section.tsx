import { FC } from 'react'
import styles from './Section.module.scss'

interface SectionProps {
	id: string
	title: string
	color: string
	children: React.ReactNode
}

const Section: FC<SectionProps> = ({ id, title, color, children }) => {
	return (
		<div className={styles.wrapper} id={id} style={{ backgroundColor: color }}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.title}>{title}</h2>
					<div className={styles.grid}>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Section
