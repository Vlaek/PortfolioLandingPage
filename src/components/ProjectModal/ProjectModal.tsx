import { CSSProperties, FC, useEffect } from 'react'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'
import Modal from 'react-modal'
import { IProject } from '../Project/project.interface'
import styles from './ProjectModal.module.scss'

interface ProjectModalProps {
  project: IProject | null
  modalIsOpen: boolean
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

Modal.setAppElement('#root')

const ProjectModal: FC<ProjectModalProps> = ({ project, modalIsOpen, setModalIsOpen }) => {
  const closeModal = () => setModalIsOpen(false)

  useEffect(() => {
    document.body.style.overflow = modalIsOpen ? 'hidden' : 'visible'
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [modalIsOpen])

  if (!project) return null

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={240}
      contentLabel={`${project.title} project details`}
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      <div className={styles.hero} style={{ '--project-accent': project.accent } as CSSProperties}>
        <img src={`./img/${project.img}`} alt={`${project.title} preview`} draggable={false} />
        <button
          className={styles.close}
          type='button'
          onClick={closeModal}
          aria-label='Close project details'
        >
          <FiX aria-hidden='true' />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.summary}>
          <span>{project.category}</span>
          <h2>{project.title}</h2>
          <p>{project.text}</p>
          <div className={styles.actions}>
            <a href={project.github} target='_blank' rel='noreferrer'>
              <FiGithub aria-hidden='true' />
              GitHub
            </a>
            {project.href.length > 0 && (
              <a href={project.href} target='_blank' rel='noreferrer'>
                <FiExternalLink aria-hidden='true' />
                Website
              </a>
            )}
          </div>
        </div>
        <div className={styles.details}>
          <h3>Technologies</h3>
          <div className={styles.techs}>
            {project.techs.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          {!project.mobile && <p className={styles.note}>Desktop-focused project.</p>}
        </div>
        {project.screens.length > 0 && (
          <div className={styles.gallery}>
            <h3>Media</h3>
            <div>
              {project.screens.map((item) => (
                <img key={item} src={item} alt={`${project.title} screen`} draggable={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default ProjectModal
