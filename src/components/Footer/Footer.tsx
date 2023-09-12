import { FC, useEffect, useState } from 'react'
import { ImMail4, ImGithub, ImTelegram } from 'react-icons/im'
import { useInView } from 'react-intersection-observer'
import styles from './Footer.module.scss'

const Footer: FC = () => {
	const [isAnimated, setIsAnimated] = useState(false)
	const [ref, inView] = useInView({ threshold: 0.5 })

	useEffect(() => {
		if (inView) {
			setTimeout(() => setIsAnimated(true))
		}
	}, [inView])

	return (
		<footer className={styles.wrapper} id='contacts'>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.title}>Let's work together</h2>
					<div className={styles.links}>
						<a
							className={`${styles.item} ${isAnimated ? styles.anim : ''}`}
							ref={ref}
							href='https://github.com/Vlaek'
							target='_blank'
						>
							<ImGithub />
							<p className={styles.text}>GitHub</p>
						</a>
						<a
							className={`${styles.item} ${isAnimated ? styles.anim : ''}`}
							ref={ref}
							href='mailto:vlad.eichwald@gmail.com'
							target='_blank'
						>
							<ImMail4 />
							<p className={styles.text}>E-mail</p>
						</a>
						<a
							className={`${styles.item} ${isAnimated ? styles.anim : ''}`}
							ref={ref}
							href='https://t.me/Vlaeek'
							target='_blank'
						>
							<ImTelegram />
							<p className={styles.text}>Telegram</p>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
