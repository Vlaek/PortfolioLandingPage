import { FC } from 'react'
import styles from './Hero.module.scss'

const Hero: FC = () => {
  return (
    <header className={styles.hero} id='home'>
      <div className={styles.content}>
        <h1>Vladislav Eichwald</h1>
        <p>Fullstack developer</p>
      </div>
    </header>
  )
}

export default Hero
