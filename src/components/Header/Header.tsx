import { FC, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Header.module.scss'

const Header: FC = () => {
	const [isAnimated, setIsAnimated] = useState(false)
	const [ref, inView] = useInView({ threshold: 0.5 })

	useEffect(() => {
		if (inView) {
			setTimeout(() => setIsAnimated(true))
		}
	}, [inView])

	return (
		<div className={styles.wrapper}>
			<div>
				<h1 className={styles.title}>Vladislav Eichwald</h1>
				<p className={`${styles.text} ${isAnimated ? styles.anim : ''}`} ref={ref}>
					Frontend developer
				</p>
			</div>
		</div>
	)
}

export default Header
