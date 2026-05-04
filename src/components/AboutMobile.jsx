import { useEffect, useRef, useState } from 'react'
import mobExpMenu   from '../assets/mob-exp-menu.svg'
import mobSkillMenu from '../assets/mob-skill-menu.svg'
import styles from './AboutMobile.module.css'

const EXP_START      = 900
const EXP_FREEZE_TOP = 130
const EXP_LIFT       = EXP_START - EXP_FREEZE_TOP   // 770

const SKILL_START    = 960
const SKILL_END      = 80
const SKILL_LIFT     = SKILL_START - SKILL_END        // 880

const TOTAL_MAX_LIFT = EXP_LIFT + SKILL_LIFT          // 1650

const LERP = 0.1

export default function AboutMobile({ onNavigate }) {
  const [lifted, setLifted] = useState(0)
  const targetRef  = useRef(0)
  const currentRef = useRef(0)
  const rafRef     = useRef(null)
  const lastYRef   = useRef(null)

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

    const onTouchStart = (e) => {
      lastYRef.current = e.touches[0].clientY
    }

    const onTouchMove = (e) => {
      e.preventDefault()
      if (lastYRef.current === null) return
      const scale = window.innerWidth / 390
      const dy = (lastYRef.current - e.touches[0].clientY) / scale
      lastYRef.current = e.touches[0].clientY
      targetRef.current = Math.max(0, Math.min(TOTAL_MAX_LIFT, targetRef.current + dy * 1.5))
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(tick)
    }

    const onTouchEnd = () => { lastYRef.current = null }

    window.addEventListener('touchstart', onTouchStart, { passive: false })
    window.addEventListener('touchmove',  onTouchMove,  { passive: false })
    window.addEventListener('touchend',   onTouchEnd)
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove',  onTouchMove)
      window.removeEventListener('touchend',   onTouchEnd)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const expLifted   = Math.min(lifted, EXP_LIFT)
  const skillLifted = Math.max(0, lifted - EXP_LIFT)

  const expTop    = EXP_START - expLifted
  const skillTop  = SKILL_START - skillLifted

  const expRotate   = -(expLifted / EXP_LIFT)
  const skillRotate =  (skillLifted / SKILL_LIFT) * 2

  return (
    <div className={styles.page}>
      <div className={styles.vLine} />

      {/* Nav */}
      <nav className={styles.nav}>
        <button className={styles.navLink} onClick={() => onNavigate('home')}>HOME</button>
        <div className={styles.navDivider} />
        <button className={`${styles.navLink} ${styles.active}`} onClick={() => onNavigate('about')}>ABOUT</button>
        <div className={styles.navDivider} />
        <button className={styles.navLink} onClick={() => onNavigate('projects')}>PROJECTS</button>
        <div className={styles.navDivider} />
        <button className={styles.navLink} onClick={() => onNavigate('contact')}>CONTACT</button>
      </nav>

      {/* Quote frame */}
      <div className={styles.quoteFrame}>
        <p className={styles.quote}>
          You might think I am into cocktails...&nbsp;You are absolutely right. But, I like design <em>more</em>.
        </p>
      </div>

      {/* Star */}
      <div className={styles.star} />

      {/* Scroll label */}
      <div className={styles.scrollFrame}>
        <p className={styles.scrollLabel}>SCROLL FOR MORE</p>
      </div>

      {/* Skill card — rises second, behind exp */}
      <img
        src={mobSkillMenu}
        alt="Skill menu"
        className={styles.skillCard}
        style={{ top: `${skillTop}px`, transform: `translateX(-50%) rotate(${skillRotate}deg)` }}
      />

      {/* Experience card — rises first, on top */}
      <img
        src={mobExpMenu}
        alt="Experience menu"
        className={styles.expCard}
        style={{ top: `${expTop}px`, transform: `translateX(-50%) rotate(${expRotate}deg)` }}
      />
    </div>
  )
}
