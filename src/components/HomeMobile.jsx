import ellipse from '../assets/ellipse.svg'
import mobGlass from '../assets/mob-glass.svg'
import starMobile from '../assets/star-mobile.svg'
import styles from './HomeMobile.module.css'

export default function HomeMobile({ onNavigate }) {
  return (
    <div className={styles.page}>

      {/* Vertical line */}
      <div className={styles.vLine} />

      {/* Dashed ellipse */}
      <img src={ellipse} alt="" aria-hidden="true" className={styles.ellipse} />

      {/* Nav */}
      <nav className={styles.nav}>
        <button className={`${styles.navLink} ${styles.active}`} onClick={() => onNavigate('home')}>HOME</button>
        <div className={styles.navDivider} />
        <button className={styles.navLink} onClick={() => onNavigate('about')}>ABOUT</button>
        <div className={styles.navDivider} />
        <button className={styles.navLink} onClick={() => onNavigate('projects')}>PROJECTS</button>
        <div className={styles.navDivider} />
        <button className={styles.navLink} onClick={() => onNavigate('contact')}>CONTACT</button>
      </nav>

      {/* Star */}
      <img src={starMobile} alt="" aria-hidden="true" className={styles.star} />

      {/* Title */}
      <div className={styles.titleFrame}>
        <p className={styles.titleLine1}>Hey, you are just in time for a cockta..</p>
        <p className={styles.titleLine2}>I mean, my <em>portfolio</em></p>
      </div>

      {/* Cocktail glass */}
      <img src={mobGlass} alt="" aria-hidden="true" className={styles.glass} />

      {/* Bottom info */}
      <div className={styles.bottomInfo}>
        <p className={styles.year}>/2026</p>
        <p className={styles.desc}>I am Mihaela, UX/UI designer who likes to move pixels around</p>
      </div>

    </div>
  )
}
