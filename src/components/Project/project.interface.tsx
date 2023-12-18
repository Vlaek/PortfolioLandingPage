export interface IProjectProps {
	project: IProject
	openModal(newProject: IProject): void
}

export interface IProject {
	title: string
	img: string
	href: string
	subtitle: string
	text: string
	github: string
	techs: string[]
	screens: string[]
	mobile: boolean
}
