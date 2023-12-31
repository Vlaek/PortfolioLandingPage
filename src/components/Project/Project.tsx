import { FC, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { IProjectProps } from './project.interface'
import styles from './Project.module.scss'

const Project: FC<IProjectProps> = ({ project, openModal }) => {
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
			onClick={() => openModal(project)}
		>
			<div className={styles.title}>
				<p>
					<span className={styles.code}>{'< '}</span>
					{project.title}
					<span className={styles.code}>{' />'}</span>
				</p>
			</div>
			<div className={styles.img}>
				<img src={`./img/${project.img}`} alt={project.title} />
			</div>
		</div>
	)
}

export default Project
