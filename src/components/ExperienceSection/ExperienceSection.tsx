import { FC } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import styles from './ExperienceSection.module.scss'
import { experiences } from '../../data/data'

const ExperienceSection: FC = () => {
  return (
    <VerticalTimeline>
      {experiences.map((item) => (
        <VerticalTimelineElement
          key={item.title}
          icon={
            <div className={styles.item__img}>
              <img
                src={`./icons/${item.img}`}
                alt={item.companyName}
                className={styles.item__img__item}
                draggable={false}
              />
            </div>
          }
          iconStyle={{ background: '#eee' }}
          contentStyle={{
            border: '0',
            borderBottom: '10px',
            borderStyle: 'solid',
            borderBottomColor: item.imgBg,
            boxShadow: 'none',
          }}
        >
          <div className={styles.item}>
            <h3 className={styles.item__title}>{item.title}</h3>
            <p className={styles.item__company}>{item.companyName}</p>
            <ul className={styles.item__list}>
              {item.tasks.map((task, index) => (
                <li className={styles.item__list__item} key={index}>
                  <div
                    className={styles.item__list__item__marker}
                    style={{ backgroundColor: item.imgBg }}
                  ></div>
                  <div className={styles.item__list__item__text}>{task}</div>
                </li>
              ))}
            </ul>
            <div className={styles.item__date}>{item.date}</div>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export default ExperienceSection
