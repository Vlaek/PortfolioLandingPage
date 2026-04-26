import { FC } from 'react'
import { projectFilters } from '../../data/data'
import Project from '../Project/Project'
import { IProject, ProjectCategory } from '../Project/project.interface'
import Reveal from '../Reveal/Reveal'
import styles from './ProjectsSection.module.scss'

interface ProjectsSectionProps {
  projects: IProject[]
  activeFilter: ProjectCategory
  setActiveFilter(filter: ProjectCategory): void
  openModal(project: IProject): void
}

const ProjectsSection: FC<ProjectsSectionProps> = ({
  projects,
  activeFilter,
  setActiveFilter,
  openModal,
}) => {
  return (
    <section className={styles.section} id='works' aria-labelledby='projects-title'>
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Selected work</p>
            <h2 id='projects-title'>Project console</h2>
          </div>
          <p>
            Browse live demos, pet projects, backend experiments, and UI systems through one
            focused project surface.
          </p>
        </Reveal>
        <Reveal className={styles.filters} aria-label='Project filters' delay={90}>
          {projectFilters.map((filter) => (
            <button
              key={filter}
              className={filter === activeFilter ? styles.active : ''}
              type='button'
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </Reveal>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={Math.min(index * 35, 320)}>
              <Project project={project} openModal={openModal} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
