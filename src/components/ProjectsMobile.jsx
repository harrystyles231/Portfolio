import star8 from '../assets/star-8.svg'
import styles from './ProjectsMobile.module.css'

const PROJECTS = [
  { id: '01', name: 'Bome wines' },
  { id: '02', name: 'DUMP Days' },
  { id: '03', name: 'Split Airport' },
  { id: '04', name: 'Lički sokol' },
  { id: '05', name: 'Izračunko' },
]

export default function ProjectsMobile({ onNavigate }) {
  return (
    <div className={styles.page}>
      <div className={styles.vLine} />

      <nav className={styles.nav}>
        <button className={styles.navLink} onClick={() => onNavigate('home')}>HOME</button>
        <div className={styles.navDivider} />
        <button className={styles.navLink} onClick={() => onNavigate('about')}>ABOUT</button>
        <div className={styles.navDivider} />
        <button className={`${styles.navLink} ${styles.active}`} onClick={() => onNavigate('projects')}>PROJECTS</button>
        <div className={styles.navDivider} />
        <button className={styles.navLink} onClick={() => onNavigate('contact')}>CONTACT</button>
      </nav>

      <div className={styles.list}>
        {/* Row 1: 01 + 02 */}
        <div className={styles.row}>
          <button className={styles.projectItem} onClick={() => onNavigate('project-01')}>
            <span className={styles.num}>01</span>
            <span className={styles.name}>Bome wines</span>
          </button>
          <button className={styles.projectItem} onClick={() => onNavigate('project-02')}>
            <span className={styles.num}>02</span>
            <span className={styles.name}>DUMP Days</span>
          </button>
        </div>

        {/* Row 2: 03 */}
        <div className={styles.rowMid}>
          <button className={styles.projectItem} onClick={() => onNavigate('project-03')}>
            <span className={styles.num}>03</span>
            <span className={styles.name}>Split Airport</span>
          </button>
        </div>

        {/* Row 3: 04 + 05 */}
        <div className={styles.row}>
          <button className={styles.projectItem} onClick={() => onNavigate('project-04')}>
            <span className={styles.num}>04</span>
            <span className={styles.name}>Lički sokol</span>
          </button>
          <button className={styles.projectItem} onClick={() => onNavigate('project-05')}>
            <span className={styles.num}>05</span>
            <span className={styles.name}>Izračunko</span>
          </button>
        </div>
      </div>

      <img src={star8} alt="" aria-hidden="true" className={styles.star} />

      <div className={styles.clickFrame}>
        <p className={styles.clickLabel}>CLICK FOR MORE</p>
      </div>

      <div className={styles.countFrame}>
        <p className={styles.count}>(5)</p>
      </div>
    </div>
  )
}
