import { FC, useMemo, useState } from 'react'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import { IProject, ProjectCategory } from './components/Project/project.interface'
import ProjectModal from './components/ProjectModal/ProjectModal'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import { ISkill } from './components/Skill/skill.interface'
import SkillModal from './components/SkillModal/SkillModal'
import SkillsSection from './components/SkillsSection/SkillsSection'
import { projects } from './data/data'

const App: FC = () => {
  const [projectModalIsOpen, setProjectModalIsOpen] = useState(false)
  const [skillModalIsOpen, setSkillModalIsOpen] = useState(false)
  const [project, setProject] = useState<IProject | null>(null)
  const [skill, setSkill] = useState<ISkill | null>(null)
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  function openProjectModal(newProject: IProject) {
    setProjectModalIsOpen(true)
    setProject(newProject)
  }

  function openSkillModal(newSkill: ISkill) {
    if (!newSkill.extra) return
    setSkillModalIsOpen(true)
    setSkill(newSkill)
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SkillsSection openModal={openSkillModal} />
        <ProjectsSection
          projects={filteredProjects}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          openModal={openProjectModal}
        />
        <ExperienceSection />
      </main>
      <Footer />
      <ProjectModal
        project={project}
        modalIsOpen={projectModalIsOpen}
        setModalIsOpen={setProjectModalIsOpen}
      />
      <SkillModal skill={skill} modalIsOpen={skillModalIsOpen} setModalIsOpen={setSkillModalIsOpen} />
    </>
  )
}

export default App
