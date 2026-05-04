import { useEffect, useRef, useState } from 'react'
import lineCross from '../assets/line-cross.svg'
import skillCard from '../assets/skill-card.svg'
import expMenu from '../assets/experience-menu.svg'
import starAbout from '../assets/star-about.svg'
import styles from './About.module.css'

const EXP_START      = 760
const EXP_FREEZE_TOP = 100
const EXP_LIFT       = EXP_START - EXP_FREEZE_TOP  // 660

const SKILL_START    = 760
const SKILL_END      = 72
const SKILL_LIFT     = SKILL_START - SKILL_END       // 660

const TOTAL_MAX_LIFT = EXP_LIFT + SKILL_LIFT         // 1320

const LERP = 0.1

export default function About({ onNavigate }) {
  const [lifted, setLifted] = useState(0)
  const targetRef  = useRef(0)
  const currentRef = useRef(0)
  const rafRef     = useRef(null)

  useEffect(() => {
    const tick = () => {
      const diff = targetRef.current - currentRef.current
      if (Math.abs(diff) < 0.2) {
        currentRef.current = targetRef.current
      } else {
        currentRef.current += diff * LERP
        rafRef.current = requestAnimationFrame(tick)
      }
      setLifted(currentRef.current)
    }

    const onWheel = (e) => {
      e.preventDefault()
      targetRef.current = Math.max(0, Math.min(TOTAL_MAX_LIFT, targetRef.current + e.deltaY * 0.8))
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', onWheel)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Phase 1: exp rises 715 → 100. Phase 2: exp frozen at 100, skill rises 760 → 100.
  const expLifted   = Math.min(lifted, EXP_LIFT)
  const skillLifted = Math.max(0, lifted - EXP_LIFT)

  const expTop    = EXP_START - expLifted
  const skillTop  = SKILL_START - skillLifted

  const expRotate   = -(expLifted / EXP_LIFT)         // 0° → -1°
  const skillRotate = (skillLifted / SKILL_LIFT) * 2  // 0° → 2°

  return (
    <div className={styles.page}>

      {/* Cross/T line SVG */}
      <img src={lineCross} alt="" aria-hidden="true" className={styles.crossLine} />

      {/* Nav */}
      <nav className={styles.nav}>
        <button className={styles.navLink} onClick={() => onNavigate('home')}>HOME</button>
        <div className={styles.navDivider} aria-hidden="true" />
        <button className={`${styles.navLink} ${styles.active}`} onClick={() => onNavigate('about')}>ABOUT</button>
        <div className={styles.navDivider} aria-hidden="true" />
        <button className={styles.navLink} onClick={() => onNavigate('projects')}>PROJECTS</button>
        <div className={styles.navDivider} aria-hidden="true" />
        <button className={styles.navLink} onClick={() => onNavigate('contact')}>CONTACT</button>
      </nav>

      {/* Quote frame — background masks the vertical line */}
      <div className={styles.quoteFrame}>
        <p className={styles.quote}>
          You might think I am into cocktails...&nbsp;You are absolutely right.
          But, I like design <em>more</em>.
        </p>
      </div>

      {/* Star on the vertical line */}
      <img src={starAbout} alt="" aria-hidden="true" className={styles.star} />

      {/* Scroll label frame — background masks the vertical line */}
      <div className={styles.scrollFrame}>
        <p className={styles.scrollLabel}>SCROLL FOR MORE</p>
      </div>

      {/* Skill card SVG — rises after exp freezes */}
      <img
        src={skillCard}
        alt="Skill menu"
        className={styles.skillCard}
        style={{ top: `${skillTop}px`, transform: `rotate(${skillRotate}deg)` }}
      />

      {/* Experience card SVG */}
      <img
        src={expMenu}
        alt="Experience menu"
        className={styles.expCard}
        style={{ top: `${expTop}px`, transform: `rotate(${expRotate}deg)` }}
      />

    </div>
  )
}
