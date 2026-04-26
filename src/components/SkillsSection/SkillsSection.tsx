import { FC } from 'react'
import { skills } from '../../data/data'
import Reveal from '../Reveal/Reveal'
import { ISkill } from '../Skill/skill.interface'
import styles from './SkillsSection.module.scss'

interface SkillsSectionProps {
  openModal(skill: ISkill): void
}

const priority = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 'Zustand', 'SASS']

const sortedSkills = [...skills].sort((a, b) => {
  const first = priority.indexOf(a.title)
  const second = priority.indexOf(b.title)

  if (first === -1 && second === -1) return a.title.localeCompare(b.title)
  if (first === -1) return 1
  if (second === -1) return -1
  return first - second
})

const SkillsSection: FC<SkillsSectionProps> = ({ openModal }) => {
  return (
    <section className={styles.section} id='skills' aria-labelledby='skills-title'>
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          <p className={styles.eyebrow}>Stack</p>
          <h2 id='skills-title'>Skills</h2>
        </Reveal>
        <div className={styles.grid}>
          {sortedSkills.map((skill, index) => (
            <Reveal key={skill.title} delay={Math.min(index * 45, 360)}>
              <button
                className={`${styles.skill} ${skill.extra ? styles.interactive : ''}`}
                type='button'
                disabled={!skill.extra}
                onClick={() => openModal(skill)}
              >
                <span>&lt;{skill.title} /&gt;</span>
                {skill.extra && <small>{skill.extra.length} related tools</small>}
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
