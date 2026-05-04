import { useState } from 'react'
import lineCross from '../assets/line-cross.svg'
import star8 from '../assets/star-8.svg'
import negroniImg from '../assets/cocktail-bome.png'
import longIslandImg from '../assets/cocktail-longisland.png'
import aperolImg from '../assets/cocktail-aperol.png'
import margaritaImg from '../assets/cocktail-margarita.png'
import pinaColadaImg from '../assets/cocktail-pinacolada.png'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    id: '01', name: 'Bome wines',
    cocktail: 'NEGRONI',
    desc: 'Bold, handcrafted, and unapologetically distinct. Small-batch storytelling with a bittersweet edge that lingers.',
    img: negroniImg,
  },
  {
    id: '02', name: 'DUMP Days',
    cocktail: 'A LONG ISLAND ICE TEA',
    desc: 'Young, techy, social, slightly chaotic but exciting. Packed with everything, a little chaotic, but somehow perfectly balanced.',
    img: longIslandImg,
  },
  {
    id: '03', name: 'Split Airport',
    cocktail: 'APEROL SPRITZ',
    desc: 'Refreshed terminals and smoother flows. Best served with zero turbulence and a view of the runway at golden hour.',
    img: aperolImg,
  },
  {
    id: '04', name: 'Lički sokol',
    cocktail: 'MARGARITA',
    desc: 'Refreshing, a little wild, and best enjoyed with friends. A mix of nature, adrenaline, and good vibes.',
    img: margaritaImg,
  },
  {
    id: '05', name: 'Izračunko',
    cocktail: 'PINA COLADA',
    desc: 'Soft, pastel, and unexpectedly easy to enjoy. Turns invoices and reports into something smooth, friendly, and almost relaxing.',
    img: pinaColadaImg,
  },
]

const ROW1 = PROJECTS.slice(0, 3)
const ROW2 = PROJECTS.slice(3, 5)

export default function Projects({ onNavigate }) {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const isHovering = hoveredIdx !== null
  const activeProject = isHovering ? PROJECTS[hoveredIdx] : null

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
        <button className={`${styles.navLink} ${styles.active}`} onClick={() => onNavigate('projects')}>PROJECTS</button>
        <div className={styles.navDivider} aria-hidden="true" />
        <button className={styles.navLink} onClick={() => onNavigate('contact')}>CONTACT</button>
      </nav>

      {/* Project list */}
      <div className={styles.list}>
        <div className={styles.row}>
          {ROW1.map((p, i) => (
            <button
              key={p.id}
              className={styles.projectItem}
              style={{ opacity: isHovering && hoveredIdx === i ? 1 : 0.5 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => onNavigate(`project-${p.id}`)}
            >
              <span className={styles.num}>{p.id}</span>
              <span className={styles.name}>{p.name}</span>
            </button>
          ))}
        </div>
        <div className={styles.row2}>
          {ROW2.map((p, i) => {
            const idx = i + 3
            return (
              <button
                key={p.id}
                className={styles.projectItem}
                style={{ opacity: isHovering && hoveredIdx === idx ? 1 : 0.5 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => onNavigate(`project-${p.id}`)}
              >
                <span className={styles.num}>{p.id}</span>
                <span className={styles.name}>{p.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Star on vertical line */}
      <img
        src={star8}
        alt=""
        aria-hidden="true"
        className={styles.star8}
        style={{ opacity: isHovering ? 0 : 1 }}
      />

      {/* "HOVER FOR DETAILS" frame — bg masks vertical line */}
      <div className={styles.hoverFrame} style={{ opacity: isHovering ? 0 : 1 }}>
        <p className={styles.hoverLabel}>HOVER FOR DETAILS</p>
      </div>

      {/* "(5)" count frame — bg masks vertical line */}
      <div className={styles.countFrame} style={{ opacity: isHovering ? 0 : 0.5 }}>
        <p className={styles.count}>(5)</p>
      </div>

      {/* Hover detail card — bottom left */}
      <div
        className={styles.hoverCard}
        style={{ opacity: isHovering ? 1 : 0, pointerEvents: isHovering ? 'auto' : 'none' }}
      >
        <div className={styles.cocktailBox}>
          {activeProject?.img && (
            <img src={activeProject.img} alt={activeProject?.cocktail} className={styles.cocktailImg} />
          )}
        </div>
        <div className={styles.cocktailInfo}>
          <p className={styles.cocktailLabel}>PROJECT AS COCKTAIL:</p>
          <div className={styles.cocktailDetails}>
            <p className={styles.cocktailName}>{activeProject?.cocktail}</p>
            <p className={styles.cocktailDesc}>{activeProject?.desc}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
