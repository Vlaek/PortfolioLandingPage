import { FC, useState } from 'react'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Section from './components/Section'
import Skill from './components/Skill/Skill'
import Project from './components/Project/Project'
import Card from './components/About/About'
import Footer from './components/Footer/Footer'
import { skills, projects, about } from './data'
import ProjectModal from './components/ProjectModal/ProjectModal'
import { IProject } from './components/Project/project.interface'
import SkillModal from './components/SkillModal/SkillModal'
import { ISkill } from './components/Skill/skill.interface'

const App: FC = () => {
	const [projectModalIsOpen, setProjectModalIsOpen] = useState<boolean>(false)
	const [skillModalIsOpen, setSkillModalIsOpen] = useState<boolean>(false)
	const [project, setProject] = useState<IProject | null>(null)
	const [skill, setSkill] = useState<ISkill | null>(null)

	function openProjectModal(newProject: IProject) {
		setProjectModalIsOpen(true)
		setProject(newProject)
	}

	function openSkillModal(newSkill: ISkill) {
		setSkillModalIsOpen(true)
		setSkill(newSkill)
	}

	return (
		<>
			<Nav />
			<Header />
			<Section id={'skills'} title={'These Are My Skills'} color={'#818ba4'}>
				{skills.map((item, index) => (
					<Skill key={index} data={item} openModal={openSkillModal} />
				))}
			</Section>
			<Section id={'works'} title={'These Are My Projects'} color={'#333'}>
				{projects.map((item, index) => (
					<Project key={index} project={item} openModal={openProjectModal} />
				))}
			</Section>
			<Section id={'about'} title={'About Me'} color={'#818ba4'}>
				{about.map((item, index) => (
					<Card key={index} data={item} />
				))}
			</Section>
			<Footer />
			<ProjectModal
				project={project}
				modalIsOpen={projectModalIsOpen}
				setModalIsOpen={setProjectModalIsOpen}
			/>
			<SkillModal
				skill={skill}
				modalIsOpen={skillModalIsOpen}
				setModalIsOpen={setSkillModalIsOpen}
			/>
		</>
	)
}

export default App
