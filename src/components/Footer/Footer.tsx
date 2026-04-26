import { FC } from 'react'
import { FiArrowUpRight, FiGithub, FiMail, FiSend } from 'react-icons/fi'
import { Link } from 'react-scroll'
import Reveal from '../Reveal/Reveal'
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
        <Reveal className={styles.main}>
          <p className={styles.eyebrow}>Available for product work</p>
          <h2>Let&apos;s build something precise, useful, and pleasant to use.</h2>
          <div className={styles.links}>
            {links.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target='_blank' rel='noreferrer'>
                <Icon aria-hidden='true' />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal className={styles.aside} delay={120}>
          <span>Portfolio OS</span>
          <strong>React / TypeScript / Frontend</strong>
          <Link to='home' smooth duration={500}>
            Back to top
            <FiArrowUpRight aria-hidden='true' />
          </Link>
        </Reveal>
      </div>
    </footer>
  )
}

export default Footer
