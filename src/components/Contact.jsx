import { useEffect, useRef } from 'react'
import lineCross from '../assets/line-cross.svg'
import linkedinIcon from '../assets/contact-linkedin.svg'
import emailIcon from '../assets/contact-email.svg'
import heartIcon from '../assets/contact-heart.svg'
import styles from './Contact.module.css'

export default function Contact({ onNavigate }) {
  const heartRef = useRef(null)

  useEffect(() => {
    const onMouseMove = (e) => {
      if (heartRef.current) {
        heartRef.current.style.left = `${e.clientX + 14}px`
        heartRef.current.style.top  = `${e.clientY - 10}px`
      }
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div className={styles.page}>

      {/* Cross/T line SVG */}
      <img src={lineCross} alt="" aria-hidden="true" className={styles.crossLine} />

      {/* Nav */}
      <nav className={styles.nav}>
        <button className={styles.navLink} onClick={() => onNavigate('home')}>HOME</button>
        <div className={styles.navDivider} aria-hidden="true" />
        <button className={styles.navLink} onClick={() => onNavigate('about')}>ABOUT</button>
        <div className={styles.navDivider} aria-hidden="true" />
        <button className={styles.navLink} onClick={() => onNavigate('projects')}>PROJECTS</button>
        <div className={styles.navDivider} aria-hidden="true" />
        <button className={`${styles.navLink} ${styles.active}`} onClick={() => onNavigate('contact')}>CONTACT</button>
      </nav>

      {/* Title frame — bg masks vertical line */}
      <div className={styles.titleFrame}>
        <p className={styles.title}>Let's be friends.</p>
      </div>

      {/* Subtitle frame — bg masks vertical line */}
      <div className={styles.subFrame}>
        <p className={styles.subLabel}>I SHOWED YOU MY COCKTAILS.</p>
      </div>

      {/* LinkedIn + Email buttons */}
      <div className={styles.buttons}>
        <a
          href="https://www.linkedin.com/in/mihaela-kopr%C4%8Dina-7834aa281/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnGroup}
        >
          <img src={linkedinIcon} alt="LinkedIn" className={styles.btnIcon} />
          <span className={styles.btnLabel}>LINKEDIN</span>
        </a>

        <a
          href="mailto:mihaela.koprcina1@gmail.com"
          className={styles.btnGroup}
        >
          <img src={emailIcon} alt="Email" className={styles.btnIcon} />
          <span className={styles.btnLabel}>EMAIL</span>
        </a>
      </div>

      {/* Heart cursor follower */}
      <img
        ref={heartRef}
        src={heartIcon}
        alt=""
        aria-hidden="true"
        className={styles.heart}
      />

    </div>
  )
}
