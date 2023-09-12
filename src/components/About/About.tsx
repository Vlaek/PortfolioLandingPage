import { FC, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { CardProps } from './about.interface'
import styles from './About.module.scss'

const Card: FC<CardProps> = ({ data }) => {
	const [isAnimated, setIsAnimated] = useState(false)
	const [ref, inView] = useInView({ threshold: 0.5 })

	useEffect(() => {
		if (inView) {
			setTimeout(() => setIsAnimated(true))
		}
	}, [inView])

	return (
		<div className={`${styles.item} ${isAnimated ? styles.anim : ''}`} ref={ref}>
			<div className={styles.title}>
				<p>
					<span className={styles.code}>{'< '}</span>
					{data.title}
					<span className={styles.code}>{' />'}</span>
				</p>
			</div>
			<div className={styles.text}>
				{data.text.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</div>
		</div>
	)
}

export default Card
