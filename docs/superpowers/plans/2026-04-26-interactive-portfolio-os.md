# Interactive Portfolio OS Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio into the approved Interactive Portfolio OS experience with modern visuals, project filtering, richer cards, grouped skills, improved modals, and responsive polish.

**Architecture:** Keep the existing React/Vite/TypeScript app and SCSS Modules. Replace the current generic section composition with focused portfolio sections while preserving the existing data source, project assets, GitHub Pages deployment path, and modal dependency.

**Tech Stack:** React 18, TypeScript, Vite, SCSS Modules, react-icons, react-modal, react-scroll.

---

## File Structure

- Modify `src/App.tsx`: own selected project and active project filter state; render the redesigned section order.
- Modify `src/index.scss`: global theme tokens, reset, body background, scrollbar, focus, modal overlay animation.
- Modify `src/data/data.ts`: add typed skill groups and project filters/categories; replace placeholder project copy.
- Modify `src/components/Project/project.interface.tsx`: add `category`, `featured`, and optional `accent` fields.
- Create `src/components/Hero/Hero.tsx`: first-viewport identity, CTA links, quick stats, stack chips.
- Create `src/components/Hero/Hero.module.scss`: responsive hero layout and visual treatment.
- Modify `src/components/Nav/Nav.tsx`: brand mark and modern navigation labels.
- Modify `src/components/Nav/Nav.module.scss`: glassy sticky nav with mobile wrapping.
- Create `src/components/ProjectsSection/ProjectsSection.tsx`: filter controls and project grid.
- Create `src/components/ProjectsSection/ProjectsSection.module.scss`: section layout, filter buttons, responsive grid.
- Modify `src/components/Project/Project.tsx`: modern project card with image, chips, actions, and modal trigger.
- Modify `src/components/Project/Project.module.scss`: stable card dimensions, media treatment, hover/focus states.
- Create `src/components/SkillsSection/SkillsSection.tsx`: grouped skill matrix.
- Create `src/components/SkillsSection/SkillsSection.module.scss`: compact grouped skill layout.
- Modify `src/components/ExperienceSection/ExperienceSection.tsx`: replace third-party vertical timeline rendering with local feed markup.
- Modify `src/components/ExperienceSection/ExperienceSection.module.scss`: modern feed styling.
- Modify `src/components/ProjectModal/ProjectModal.tsx`: accessible richer modal with media gallery and safe links.
- Modify `src/components/ProjectModal/ProjectModal.module.scss`: responsive detail modal.
- Modify `src/components/Footer/Footer.tsx`: contact strip with safe links.
- Modify `src/components/Footer/Footer.module.scss`: redesigned final section.
- Optional cleanup: leave old `Section`, `Skill`, and `SkillModal` files unused unless imports require removal.

---

### Task 1: Data And Types

**Files:**
- Modify: `src/components/Project/project.interface.tsx`
- Modify: `src/components/Skill/skill.interface.tsx`
- Modify: `src/data/data.ts`

- [ ] **Step 1: Extend project and skill types**

Replace `src/components/Project/project.interface.tsx` with:

```ts
export type ProjectCategory = 'All' | 'Frontend' | 'Fullstack' | 'Backend' | '3D' | 'UI'

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
  category: Exclude<ProjectCategory, 'All'>
  featured?: boolean
  accent?: string
}
```

Replace `src/components/Skill/skill.interface.tsx` with:

```ts
export interface ISkill {
  title: string
  type?: string[]
  extra?: string[]
}

export interface ISkillGroup {
  title: string
  description: string
  items: string[]
}
```

- [ ] **Step 2: Add filters and grouped skills to data**

In `src/data/data.ts`, update imports and add this export after the `skills` array:

```ts
import { IProject, ProjectCategory } from '../components/Project/project.interface'
import { ISkillGroup } from '../components/Skill/skill.interface'

export const projectFilters: ProjectCategory[] = ['All', 'Frontend', 'Fullstack', 'Backend', '3D', 'UI']

export const skillGroups: ISkillGroup[] = [
  {
    title: 'Frontend Core',
    description: 'Interfaces, state, routing, forms, and production React flows.',
    items: ['React', 'TypeScript', 'Next.js', 'Redux', 'Zustand', 'HTML', 'CSS'],
  },
  {
    title: 'UI Systems',
    description: 'Design systems, animations, charts, and responsive interfaces.',
    items: ['SCSS Modules', 'TailwindCSS', 'Ant Design', 'React Icons', 'ThreeJS', 'Plotly.js'],
  },
  {
    title: 'Backend',
    description: 'Services, APIs, databases, and enterprise integrations.',
    items: ['Java', 'Spring Boot', 'Hibernate', 'Python', 'Flask', 'SQL'],
  },
  {
    title: 'Workflow',
    description: 'Delivery habits and tools for team development.',
    items: ['Git', 'GitHub', 'GitLab', 'Code Review', 'Swagger', 'Mentoring'],
  },
]
```

For each project object, add `category`, `featured`, and `accent` values. Use these exact assignments:

```ts
// Music Store
category: 'Frontend',
featured: true,
accent: '#22d3ee',

// Soundboard
category: 'Frontend',
featured: true,
accent: '#10b981',

// CookBookHub
category: 'Fullstack',
featured: true,
accent: '#f4b740',

// DevSolution
category: 'UI',
featured: true,
accent: '#8b5cf6',

// BattleSea
category: 'Frontend',
featured: true,
accent: '#ef4444',

// GitHubChecker
category: 'Frontend',
accent: '#22d3ee',

// ToDoApp
category: 'Backend',
accent: '#10b981',

// ToDoZustand
category: 'Frontend',
accent: '#8b5cf6',

// GKeep-Lite
category: 'Frontend',
accent: '#f4b740',

// Worms3D
category: '3D',
featured: true,
accent: '#22d3ee',

// SurveyForm
category: 'UI',
accent: '#10b981',

// OnlineStore
category: 'Frontend',
accent: '#f4b740',

// Ant Design
category: 'UI',
accent: '#8b5cf6',

// ToDo
category: 'Frontend',
accent: '#22d3ee',

// AngularTestProject
category: 'Frontend',
accent: '#ef4444',

// ToDo Flask
category: 'Backend',
accent: '#10b981',

// DB Flask
category: 'Backend',
accent: '#f4b740',

// Donatik
category: 'UI',
accent: '#8b5cf6',
```

- [ ] **Step 3: Replace placeholder descriptions**

In `src/data/data.ts`, replace the three `text: 'test project'` values with:

```ts
text: 'GitHubChecker is a React application for checking GitHub data through a GraphQL-driven interface. The project focuses on API integration, Material UI composition, and typed state management.',
```

```ts
text: 'ToDoApp is a fullstack task management project built with Spring Boot and Kotlin. It demonstrates backend endpoint design, persistence with H2, and a practical task workflow.',
```

```ts
text: 'ToDoZustand is a React task manager built around Zustand and Ant Design. It focuses on clean state management, typed UI flows, and scalable list interactions.',
```

- [ ] **Step 4: Verify TypeScript data shape**

Run: `yarn build`

Expected: if the rest of the app has not been updated yet, TypeScript may fail because existing components do not consume the new fields. The acceptable result for this task is no syntax error inside `src/data/data.ts` or the modified interfaces.

---

### Task 2: Global Theme, App Shell, And Hero

**Files:**
- Modify: `src/index.scss`
- Modify: `src/App.tsx`
- Create: `src/components/Hero/Hero.tsx`
- Create: `src/components/Hero/Hero.module.scss`
- Modify: `src/components/Nav/Nav.tsx`
- Modify: `src/components/Nav/Nav.module.scss`

- [ ] **Step 1: Replace global styles**

Replace `src/index.scss` with:

```scss
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
@import-normalize;

:root {
  --bg: #080d12;
  --bg-soft: #0d141c;
  --surface: rgba(255, 255, 255, 0.06);
  --surface-strong: rgba(255, 255, 255, 0.1);
  --border: rgba(255, 255, 255, 0.12);
  --text: #f8fafc;
  --muted: #9aa8b8;
  --muted-strong: #cbd5e1;
  --accent: #10b981;
  --accent-2: #f4b740;
  --accent-3: #22d3ee;
  --danger: #ef4444;
  --radius: 8px;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.32);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 400;
  color: var(--text);
  background:
    radial-gradient(circle at 15% 10%, rgba(16, 185, 129, 0.18), transparent 28rem),
    radial-gradient(circle at 85% 8%, rgba(244, 183, 64, 0.14), transparent 28rem),
    linear-gradient(180deg, #080d12 0%, #0a1118 45%, #080d12 100%);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button {
  font: inherit;
}

button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--accent-3);
  outline-offset: 4px;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #080d12;
}

::-webkit-scrollbar-thumb {
  border: 2px solid #080d12;
  border-radius: 999px;
  background-color: rgba(34, 211, 238, 0.55);
}

.ReactModal__Overlay {
  opacity: 0;
  transition: opacity 240ms ease;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
}

.ReactModal__Overlay--before-close {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

- [ ] **Step 2: Create hero component**

Create `src/components/Hero/Hero.tsx`:

```tsx
import { FC } from 'react'
import { Link } from 'react-scroll'
import { FiArrowDownRight, FiGithub } from 'react-icons/fi'
import styles from './Hero.module.scss'

const stats = [
  { value: '18+', label: 'projects' },
  { value: '3+', label: 'years in product teams' },
  { value: 'Fullstack', label: 'current role' },
]

const stack = ['React', 'TypeScript', 'Next.js', 'Spring Boot', 'Zustand', 'Three.js']

const Hero: FC = () => {
  return (
    <header className={styles.hero} id='home'>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Interactive portfolio / 2026</p>
        <h1>Vladislav Eichwald builds sharp web interfaces and fullstack products.</h1>
        <p className={styles.lead}>
          Frontend and fullstack developer focused on React ecosystems, typed interfaces,
          enterprise workflows, and clean product experiences.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} to='works' smooth duration={500}>
            View projects
            <FiArrowDownRight aria-hidden='true' />
          </Link>
          <a className={styles.secondary} href='https://github.com/Vlaek' target='_blank' rel='noreferrer'>
            <FiGithub aria-hidden='true' />
            GitHub
          </a>
        </div>
        <div className={styles.stack} aria-label='Core technologies'>
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <aside className={styles.panel} aria-label='Portfolio summary'>
        <div className={styles.panelTop}>
          <span>Portfolio OS</span>
          <span>Online</span>
        </div>
        <div className={styles.signal}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.stats}>
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </header>
  )
}

export default Hero
```

- [ ] **Step 3: Create hero styles**

Create `src/components/Hero/Hero.module.scss` with responsive two-column layout, stable CTA buttons, chips, and summary panel using the global CSS variables. Use no border radius larger than `8px`.

- [ ] **Step 4: Update navigation**

Replace `src/components/Nav/Nav.tsx` with a brand link to `home` and links to `works`, `skills`, `about`, and `contacts`. Add `rel='noreferrer'` to any external link if one is introduced.

Replace `src/components/Nav/Nav.module.scss` with fixed top navigation using `backdrop-filter`, `var(--surface)`, `var(--border)`, and compact responsive spacing.

- [ ] **Step 5: Update App shell**

Replace `src/App.tsx` with:

```tsx
import { FC, useMemo, useState } from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import Footer from './components/Footer/Footer'
import ProjectModal from './components/ProjectModal/ProjectModal'
import { projects } from './data/data'
import { IProject, ProjectCategory } from './components/Project/project.interface'

const App: FC = () => {
  const [projectModalIsOpen, setProjectModalIsOpen] = useState(false)
  const [project, setProject] = useState<IProject | null>(null)
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  function openProjectModal(newProject: IProject) {
    setProjectModalIsOpen(true)
    setProject(newProject)
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProjectsSection
          projects={filteredProjects}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          openModal={openProjectModal}
        />
        <SkillsSection />
        <ExperienceSection />
      </main>
      <Footer />
      <ProjectModal
        project={project}
        modalIsOpen={projectModalIsOpen}
        setModalIsOpen={setProjectModalIsOpen}
      />
    </>
  )
}

export default App
```

- [ ] **Step 6: Run build**

Run: `yarn build`

Expected: FAIL until `ProjectsSection` and `SkillsSection` are created. Confirm the missing module errors match those components.

---

### Task 3: Projects Section And Cards

**Files:**
- Create: `src/components/ProjectsSection/ProjectsSection.tsx`
- Create: `src/components/ProjectsSection/ProjectsSection.module.scss`
- Modify: `src/components/Project/Project.tsx`
- Modify: `src/components/Project/Project.module.scss`

- [ ] **Step 1: Create projects section**

Create `src/components/ProjectsSection/ProjectsSection.tsx`:

```tsx
import { FC } from 'react'
import { projectFilters } from '../../data/data'
import { IProject, ProjectCategory } from '../Project/project.interface'
import Project from '../Project/Project'
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
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Selected work</p>
            <h2 id='projects-title'>Project console</h2>
          </div>
          <p>
            Browse live demos, pet projects, backend experiments, and UI systems through one
            focused project surface.
          </p>
        </div>
        <div className={styles.filters} aria-label='Project filters'>
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
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Project key={project.title} project={project} openModal={openModal} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
```

- [ ] **Step 2: Create projects section styles**

Create `src/components/ProjectsSection/ProjectsSection.module.scss` with `.section`, `.inner`, `.header`, `.eyebrow`, `.filters`, `.active`, and `.grid`. Grid should use `repeat(auto-fit, minmax(min(100%, 320px), 1fr))`; filter buttons must wrap and keep text inside.

- [ ] **Step 3: Replace project card component**

Replace `src/components/Project/Project.tsx` with:

```tsx
import { FC } from 'react'
import { FiArrowUpRight, FiGithub, FiMaximize2 } from 'react-icons/fi'
import { IProjectProps } from './project.interface'
import styles from './Project.module.scss'

const Project: FC<IProjectProps> = ({ project, openModal }) => {
  const visibleTechs = project.techs.slice(0, 4)

  return (
    <article className={styles.card} style={{ '--project-accent': project.accent } as React.CSSProperties}>
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
            <a href={project.href} target='_blank' rel='noreferrer' aria-label={`${project.title} website`}>
              <FiArrowUpRight aria-hidden='true' />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default Project
```

- [ ] **Step 4: Replace project card styles**

Replace `src/components/Project/Project.module.scss` with styles for `.card`, `.mediaButton`, `.featured`, `.expand`, `.body`, `.topline`, `.techs`, and `.actions`. Use `aspect-ratio: 16 / 10` on media, `border-radius: var(--radius)`, and `--project-accent` for hover border and featured label.

- [ ] **Step 5: Run build**

Run: `yarn build`

Expected: FAIL until `SkillsSection` and remaining style files are added. Project section should no longer be the cause.

---

### Task 4: Skills, Experience, Footer

**Files:**
- Create: `src/components/SkillsSection/SkillsSection.tsx`
- Create: `src/components/SkillsSection/SkillsSection.module.scss`
- Modify: `src/components/ExperienceSection/ExperienceSection.tsx`
- Modify: `src/components/ExperienceSection/ExperienceSection.module.scss`
- Modify: `src/components/Footer/Footer.tsx`
- Modify: `src/components/Footer/Footer.module.scss`

- [ ] **Step 1: Create skills section**

Create `src/components/SkillsSection/SkillsSection.tsx`:

```tsx
import { FC } from 'react'
import { skillGroups } from '../../data/data'
import styles from './SkillsSection.module.scss'

const SkillsSection: FC = () => {
  return (
    <section className={styles.section} id='skills' aria-labelledby='skills-title'>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stack map</p>
          <h2 id='skills-title'>Skills grouped by how they ship products</h2>
        </div>
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article className={styles.group} key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
```

- [ ] **Step 2: Create skills styles**

Create `src/components/SkillsSection/SkillsSection.module.scss` with a full-width section, constrained `.inner`, responsive `.grid`, and compact chip list. Cards use subtle surfaces and no nested cards.

- [ ] **Step 3: Replace experience component**

Replace `src/components/ExperienceSection/ExperienceSection.tsx` with:

```tsx
import { FC } from 'react'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'
import { experiences } from '../../data/data'
import styles from './ExperienceSection.module.scss'

const ExperienceSection: FC = () => {
  const orderedExperiences = [...experiences].reverse()

  return (
    <section className={styles.section} id='about' aria-labelledby='experience-title'>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Experience feed</p>
          <h2 id='experience-title'>From frontend craft to fullstack delivery</h2>
        </div>
        <div className={styles.feed}>
          {orderedExperiences.map((item, index) => (
            <article className={styles.item} key={`${item.title}-${item.date}`}>
              <div className={styles.marker} style={{ '--item-accent': item.imgBg } as React.CSSProperties}>
                <img src={`./icons/${item.img}`} alt='' draggable={false} />
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>
                    <FiCalendar aria-hidden='true' />
                    {item.date}
                  </span>
                  {index === 0 && <strong>Current</strong>}
                </div>
                <h3>{item.title}</h3>
                <p className={styles.company}>
                  <FiBriefcase aria-hidden='true' />
                  {item.companyName}
                </p>
                <ul>
                  {item.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
```

- [ ] **Step 4: Replace experience styles**

Replace `src/components/ExperienceSection/ExperienceSection.module.scss` with local feed styles. Remove reliance on `.vertical-timeline` classes. Use `.section`, `.inner`, `.header`, `.eyebrow`, `.feed`, `.item`, `.marker`, `.content`, `.meta`, and `.company`.

- [ ] **Step 5: Replace footer component**

Replace `src/components/Footer/Footer.tsx` with:

```tsx
import { FC } from 'react'
import { FiGithub, FiMail, FiSend } from 'react-icons/fi'
import styles from './Footer.module.scss'

const links = [
  { label: 'GitHub', href: 'https://github.com/Vlaek', icon: FiGithub },
  { label: 'E-mail', href: 'mailto:vlad.eichwald@gmail.com', icon: FiMail },
  { label: 'Telegram', href: 'https://t.me/Vlaeek', icon: FiSend },
]

const Footer: FC = () => {
  return (
    <footer className={styles.footer} id='contacts'>
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>Contact</p>
          <h2>Let&apos;s build a clean interface with real product value.</h2>
        </div>
        <div className={styles.links}>
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target='_blank' rel='noreferrer'>
              <Icon aria-hidden='true' />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
```

- [ ] **Step 6: Replace footer styles**

Replace `src/components/Footer/Footer.module.scss` with `.footer`, `.inner`, `.eyebrow`, and `.links`. Ensure links wrap on mobile and text remains readable.

- [ ] **Step 7: Run build**

Run: `yarn build`

Expected: PASS or a small TypeScript/style issue tied to the changed files. Fix changed-file issues before moving on.

---

### Task 5: Project Modal

**Files:**
- Modify: `src/components/ProjectModal/ProjectModal.tsx`
- Modify: `src/components/ProjectModal/ProjectModal.module.scss`

- [ ] **Step 1: Replace modal component**

Replace `src/components/ProjectModal/ProjectModal.tsx` with a version that:

```tsx
import { FC, useEffect } from 'react'
import Modal from 'react-modal'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'
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
      <div className={styles.hero} style={{ '--project-accent': project.accent } as React.CSSProperties}>
        <img src={`./img/${project.img}`} alt={`${project.title} preview`} draggable={false} />
        <button className={styles.close} type='button' onClick={closeModal} aria-label='Close project details'>
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
```

- [ ] **Step 2: Replace modal styles**

Replace `src/components/ProjectModal/ProjectModal.module.scss` with responsive `.overlay`, `.modal`, `.hero`, `.close`, `.content`, `.summary`, `.actions`, `.details`, `.techs`, `.note`, and `.gallery`. The modal must fit mobile widths and allow vertical scrolling.

- [ ] **Step 3: Run build**

Run: `yarn build`

Expected: PASS.

---

### Task 6: Polish, Browser Verification, And Cleanup

**Files:**
- Modify any changed SCSS files if browser checks reveal layout issues.
- Optional: remove unused imports from old components if lint complains.

- [ ] **Step 1: Run lint**

Run: `yarn lint`

Expected: PASS. If lint fails because old unused components are still included by ESLint and contain issues, fix only issues in files touched by the redesign unless the failure blocks CI.

- [ ] **Step 2: Run production build**

Run: `yarn build`

Expected: PASS with Vite output in `dist`.

- [ ] **Step 3: Start local dev server**

Run: `yarn dev --host 127.0.0.1`

Expected: Vite prints a local URL, usually `http://127.0.0.1:5173/`.

- [ ] **Step 4: Browser desktop verification**

Open the dev server in the in-app browser. Verify:

- Hero is nonblank and first viewport clearly identifies Vladislav Eichwald.
- Navigation links scroll to Projects, Skills, About, and Contacts.
- Project filter buttons change the grid.
- Project cards keep stable dimensions and actions do not overlap.
- Project modal opens and closes.

- [ ] **Step 5: Browser mobile verification**

Use a narrow viewport or browser screenshot. Verify:

- Navigation wraps cleanly.
- Hero text stays inside viewport.
- Project cards are one column.
- Filters wrap without overflow.
- Modal is scrollable and close button remains visible.

- [ ] **Step 6: Final git status**

Run: `git status --short`

Expected: only intentional redesign files are modified. `.superpowers/` must remain ignored.

