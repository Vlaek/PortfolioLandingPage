import { FC, useEffect } from 'react'
import Modal from 'react-modal'
import { RxCross1 } from 'react-icons/rx'
import { CSSTransition } from 'react-transition-group'
import { IProject } from '../Project/project.interface'
import styles from './ProjectModal.module.scss'

interface ProjectModalProps {
	project: IProject | null
	modalIsOpen: boolean
	setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

Modal.setAppElement('#root')

const ProjectModal: FC<ProjectModalProps> = ({
	project,
	modalIsOpen,
	setModalIsOpen,
}) => {
	const closeModal = () => {
		setTimeout(() => setModalIsOpen(false), 500)
		const overlay = document.querySelector(
			'.ReactModal__Overlay',
		) as HTMLElement
		overlay.style.opacity = '0'
	}

	useEffect(() => {
		if (!modalIsOpen) document.body.style.overflow = 'visible'
		else document.body.style.overflow = 'hidden'
	}, [modalIsOpen])

	if (!project) {
		return null
	}

	return (
		<CSSTransition timeout={500} in={modalIsOpen} unmountOnExit>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel='Example Modal'
				overlayClassName={styles.overlay}
				className={styles.modal}
			>
				<div className={styles.container}>
					<div className={styles.header}>
						<div className={styles.img}>
							<img
								src={`./img/${project.img}`}
								alt={project.title}
								draggable={false}
							/>
						</div>
						<div className={styles.info}>
							<div className={styles.top}>
								<div className={styles.title}>{project.title}</div>
								<div className={styles.subtitle}>{project.subtitle}</div>
								<div className={styles.text}>{project.text}</div>
							</div>
							<div className={styles.bottom}>
								<a href={project.github} target='_blank'>
									GitHub
								</a>
								<a href={project.href} target='_blank'>
									Website
								</a>
							</div>
						</div>
					</div>
					<div className={styles.separator}></div>
					<div className={styles.main}>
						{project.techs.length > 0 && (
							<div className={styles.block}>
								<div className={styles.title}>Technologies</div>
								<ul>
									{project.techs.map(item => (
										<li key={item}>{item}</li>
									))}
								</ul>
								<div className={styles.separator}></div>
							</div>
						)}
						{project.screens.length > 0 && (
							<div className={styles.block}>
								<div className={styles.title}>Illustrations</div>
								<ul>
									{project.screens.map(item => (
										<img key={item} src={item} draggable={false} />
									))}
								</ul>
								<div className={styles.separator}></div>
							</div>
						)}
					</div>
					<RxCross1 className={styles.cross} onClick={closeModal} />
				</div>
			</Modal>
		</CSSTransition>
	)
}

export default ProjectModal
