import { FC, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ISkill } from './skill.interface'
import cn from 'classnames'
import styles from './Skill.module.scss'

interface SkillProps {
	data: ISkill
	openModal(newSkill: ISkill): void
}

const Skill: FC<SkillProps> = ({ data, openModal }) => {
	const [isAnimated, setIsAnimated] = useState(false)
	const [ref, inView] = useInView({ threshold: 0.5 })

	useEffect(() => {
		if (inView) {
			setTimeout(() => setIsAnimated(true))
		}
	}, [inView])

	return (
		<div
			className={`${styles.item} ${isAnimated ? styles.anim : ''}`}
			ref={ref}
		>
			<div
				className={cn(styles.content, data.extra && styles.extra)}
				onClick={() => data.extra && openModal(data)}
			>
				<p>
					<span className={styles.code}>{'< '}</span>
					{data.title}
					<span className={styles.code}>{' />'}</span>
				</p>
			</div>
		</div>
	)
}

export default Skill
