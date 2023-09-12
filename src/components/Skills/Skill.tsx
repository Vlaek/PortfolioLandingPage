import { FC, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ISkill } from './skill.interface'
import styles from './Skill.module.scss'

const Skill: FC<ISkill> = ({ title }) => {
	const [isAnimated, setIsAnimated] = useState(false)
	const [ref, inView] = useInView({ threshold: 0.5 })

	useEffect(() => {
		if (inView) {
			setTimeout(() => setIsAnimated(true))
		}
	}, [inView])

	return (
		<div className={`${styles.item} ${isAnimated ? styles.anim : ''}`} ref={ref}>
			<div className={styles.content}>
				<p>
					<span className={styles.code}>{'< '}</span>
					{title}
					<span className={styles.code}>{' />'}</span>
				</p>
			</div>
		</div>
	)
}

export default Skill
