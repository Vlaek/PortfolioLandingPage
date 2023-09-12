import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Section from './components/Section'
import Skill from './components/Skills/Skill'
import Project from './components/Project/Project'
import Card from './components/About/About'
import Footer from './components/Footer/Footer'
import { skills, projects, about } from './data'

function App() {
	return (
		<>
			<Nav />
			<Header />
			<Section id={'skills'} title={'These Are My Skills'} color={'#818ba4'}>
				{skills.map((item, index) => (
					<Skill key={index} title={item.title} />
				))}
			</Section>
			<Section id={'works'} title={'These Are My Projects'} color={'#333'}>
				{projects.map((item, index) => (
					<Project key={index} project={item} />
				))}
			</Section>
			<Section id={'about'} title={'About Me'} color={'#818ba4'}>
				{about.map((item, index) => (
					<Card key={index} data={item} />
				))}
			</Section>
			<Footer />
		</>
	)
}

export default App
