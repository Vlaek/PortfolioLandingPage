import { CSSProperties, FC } from 'react'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'
import { experiences } from '../../data/data'
import Reveal from '../Reveal/Reveal'
import styles from './ExperienceSection.module.scss'

const ExperienceSection: FC = () => {
  const orderedExperiences = [...experiences].reverse()

  return (
    <section className={styles.section} id='about' aria-labelledby='experience-title'>
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          <p className={styles.eyebrow}>Experience feed</p>
          <h2 id='experience-title'>From frontend craft to fullstack delivery</h2>
        </Reveal>
        <div className={styles.feed}>
          {orderedExperiences.map((item, index) => (
            <Reveal key={`${item.title}-${item.date}`} delay={Math.min(index * 70, 420)}>
              <article className={styles.item}>
                <div className={styles.marker} style={{ '--item-accent': item.imgBg } as CSSProperties}>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
