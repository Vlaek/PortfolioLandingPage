import { FC, HTMLAttributes, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Reveal.module.scss'

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay?: number
}

const Reveal: FC<RevealProps> = ({ children, className = '', delay = 0, style, ...props }) => {
  const [ref, inView] = useInView({
    threshold: 0.16,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${inView ? styles.visible : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}

export default Reveal
