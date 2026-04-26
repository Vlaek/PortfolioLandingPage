import { CSSProperties, FC } from 'react'
import { FiArrowUpRight, FiGithub, FiMaximize2 } from 'react-icons/fi'
import { IProjectProps } from './project.interface'
import styles from './Project.module.scss'

const Project: FC<IProjectProps> = ({ project, openModal }) => {
  const visibleTechs = project.techs.slice(0, 4)

  return (
    <article
      className={styles.card}
      style={{ '--project-accent': project.accent } as CSSProperties}
    >
      <button className={styles.mediaButton} type='button' onClick={() => openModal(project)}>
        <img src={`./img/${project.img}`} alt={`${project.title} preview`} draggable={false} />
        {project.featured && <span className={styles.featured}>Featured</span>}
        <span className={styles.expand}>
          <FiMaximize2 aria-hidden='true' />
          Details
        </span>
      </button>
      <div className={styles.body}>
        <div className={styles.topline}>
          <span>{project.category}</span>
          <span>{project.mobile ? 'Responsive' : 'Desktop-focused'}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.subtitle}</p>
        <div className={styles.techs}>
          {visibleTechs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className={styles.actions}>
          <button type='button' onClick={() => openModal(project)}>
            Details
          </button>
          <a href={project.github} target='_blank' rel='noreferrer' aria-label={`${project.title} GitHub`}>
            <FiGithub aria-hidden='true' />
          </a>
          {project.href.length > 0 && (
            <a
              href={project.href}
              target='_blank'
              rel='noreferrer'
              aria-label={`${project.title} website`}
            >
              <FiArrowUpRight aria-hidden='true' />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default Project
