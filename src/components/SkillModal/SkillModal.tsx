import { FC, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import Modal from 'react-modal'
import { ISkill } from '../Skill/skill.interface'
import styles from './SkillModal.module.scss'

interface SkillModalProps {
  skill: ISkill | null
  modalIsOpen: boolean
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

Modal.setAppElement('#root')

const SkillModal: FC<SkillModalProps> = ({ skill, modalIsOpen, setModalIsOpen }) => {
  const closeModal = () => setModalIsOpen(false)

  useEffect(() => {
    document.body.style.overflow = modalIsOpen ? 'hidden' : 'visible'
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [modalIsOpen])

  if (!skill) return null

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={240}
      contentLabel={`${skill.title} related tools`}
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      <div className={styles.header}>
        <div>
          <span>&lt;{skill.title} /&gt;</span>
        </div>
        <button type='button' onClick={closeModal} aria-label='Close skill details'>
          <FiX aria-hidden='true' />
        </button>
      </div>
      <div className={styles.list}>
        {skill.extra?.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </Modal>
  )
}

export default SkillModal
