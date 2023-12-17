import { FC, useEffect } from 'react'
import { RxCross1 } from 'react-icons/rx'
import Modal from 'react-modal'
import { ISkill } from '../Skill/skill.interface'
import styles from './SkillModal.module.scss'

interface SkillModalProps {
	skill: ISkill | null
	modalIsOpen: boolean
	setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

Modal.setAppElement('#root')

const SkillModal: FC<SkillModalProps> = ({
	skill,
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

	if (!skill) {
		return null
	}

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel='Example Modal'
			overlayClassName={styles.overlay}
			className={styles.modal}
		>
			<div className={styles.container}>
				<div className={styles.header}>{skill.title}</div>
				<div className={styles.main}>
					<ul>
						{skill.extra?.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
					<div className={styles.separator}></div>
				</div>
				<RxCross1 className={styles.cross} onClick={closeModal} />
			</div>
		</Modal>
	)
}

export default SkillModal
