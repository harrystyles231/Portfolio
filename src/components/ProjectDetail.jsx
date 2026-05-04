import { useEffect, useRef, useState, useCallback } from 'react'
import lineCrossDark from '../assets/line-cross-dark.svg'
import styles from './ProjectDetail.module.css'

import starOdProjekata from '../assets/star-od-projekata.svg'
import star9 from '../assets/star-9.svg'

// Split Airport
import splitTimetable from '../assets/split-timetable.png'
import splitSplittt   from '../assets/split-splittt.png'
import splitMob       from '../assets/split-mob.png'
import splitTofrom    from '../assets/split-tofrom.png'

import splitAirline   from '../assets/split-airline.png'
import splitSearch    from '../assets/split-search.png'
import splitFlight    from '../assets/split-flight.png'
import splitCheckin   from '../assets/split-checkin.png'

// DUMP Days
import ddStvori    from '../assets/dd-stvori.png'
import ddNoviLevel from '../assets/dd-novi-level.png'
import ddPotvrdi   from '../assets/dd-potvrdi.png'
import ddShopping  from '../assets/dd-shopping.png'
import ddProfil    from '../assets/dd-profil.png'
import ddOvo       from '../assets/dd-ovo.png'
import ddVidi      from '../assets/dd-vidi.png'
import ddProstor   from '../assets/dd-prostor.png'

// Lički Sokol
import lsDesktop from '../assets/ls-desktop.png'
import lsFrame2  from '../assets/ls-frame2.png'
import lsMobile  from '../assets/ls-mobile.png'
import lsAboout  from '../assets/ls-aboout.png'
import lsDsssd   from '../assets/ls-dsssd.png'
import lsIphone  from '../assets/ls-iphone.png'
import lsAbout   from '../assets/ls-about.png'

// Izračunko
import izHome       from '../assets/iz-home.png'
import izEmail      from '../assets/iz-email.png'
import izMobitel    from '../assets/iz-mobitel.png'
import izCjenik     from '../assets/iz-cjenik.png'
import izMobPonude  from '../assets/iz-mob-ponude.png'
import izMobSlike   from '../assets/iz-mob-slike.png'
import izMobRacuni  from '../assets/iz-mob-racuni.png'

// Bome Wines
import bomeAsmember    from '../assets/bome-asmember.png'
import bomePrvaVerzija from '../assets/bome-prvaverzija.png'
import bomeKrug2       from '../assets/bome-krug2.png'
import bomeBabic       from '../assets/bome-babic.png'
import bomeKrug3       from '../assets/bome-krug3.png'
import bomeProduct     from '../assets/bome-product.png'
import bomeMobile      from '../assets/bome-mobile.png'
import bomeEditorial   from '../assets/bome-editorial.png'
import bomeOv          from '../assets/bome-ov.png'

// imgW/imgH: display size inside the frame (may overflow → cropped by overflow:hidden)
// imgOx/imgOy: pixel offset from frame top-left (auto-centered when omitted)
// radius: border-radius in px
const PROJECTS = {
  '01': {
    name: 'Bome wines',
    titleSize: 112,
    cocktail: 'NEGRONI',
    desc: 'Fun project built in Framer, including a Shopify-powered shop, custom integrations, and social media journal features without any development help - only with Claude.',
    descWidth: 340,
    descFontSize: 14,
    descLineHeight: 16,
    pageH: 7112,
    nextProject: '02',
    nextName: 'DUMP Days',
    nextTop: 6750,
    frames: [
      { id: 'bm1', x: 163,  y: 506,  w: 1122, h: 880,  imgSrc: bomeAsmember,    radius: 8, shadow: true, delay: 0   },
      { id: 'bm2', x: 40,   y: 1654, w: 904,  h: 593,  imgSrc: bomePrvaVerzija, radius: 8, shadow: true, delay: 0,  bgColor: '#ECE7DE', clip: false },
      { id: 'bm3', x: 1079, y: 1515, w: 278,  h: 672,  imgSrc: bomeKrug2,       radius: 8, shadow: true, delay: 80, clip: false },
      { id: 'bm4', x: 166,  y: 2440, w: 1132, h: 1050, imgSrc: bomeBabic,       radius: 8, shadow: true, delay: 0,  clip: false },
      { id: 'bm5', x: 158,  y: 3739, w: 325,  h: 726,  imgSrc: bomeKrug3,       radius: 0, shadow: true, delay: 0   },
      { id: 'bm6', x: 561,  y: 3849, w: 326,  h: 706,  imgSrc: bomeProduct,     radius: 0, shadow: true, delay: 80  },
      { id: 'bm7', x: 965,  y: 3739, w: 325,  h: 726,  imgSrc: bomeMobile,      radius: 0, shadow: true, delay: 160 },
      { id: 'bm8', x: 44,   y: 4726, w: 1015, h: 819,  imgSrc: bomeEditorial,   radius: 0, shadow: true, delay: 0   },
      { id: 'bm9', x: 159,  y: 5698, w: 1130, h: 796,  imgSrc: bomeOv,          radius: 0, shadow: true, delay: 0   },
    ],
  },
  '02': {
    name: 'DUMP Days',
    titleSize: 112,
    cocktail: 'A LONG ISLAND ICE TEA',
    desc: 'Dump Days is a conference organized by a student association, where I served as Design Lead. The app features custom avatar creation, real-time navigation, personalized schedules, and seamless merchandise purchasing.',
    descWidth: 340,
    descFontSize: 14,
    descLineHeight: 16,
    pageH: 5175,
    nextProject: '03',
    nextName: 'Split Airport',
    nextTop: 4813,
    frames: [
      { id: 'dd1', x: 155,  y: 506,  w: 1130, h: 643, imgSrc: ddStvori,    radius: 8, shadow: true, delay: 0   },
      { id: 'dd2', x: 40,   y: 1349, w: 900,  h: 512, imgSrc: ddNoviLevel, radius: 8, shadow: true, delay: 0   },
      { id: 'dd3', x: 1075, y: 1449, w: 278,  h: 602, imgSrc: ddPotvrdi,   radius: 8, shadow: true, delay: 80  },
      { id: 'dd4', x: 155,  y: 2251, w: 1130, h: 643, imgSrc: ddShopping,  radius: 8, shadow: true, delay: 0   },
      { id: 'dd5', x: 155,  y: 3094, w: 325,  h: 693, imgSrc: ddProfil,    radius: 8, shadow: true, delay: 0   },
      { id: 'dd6', x: 565,  y: 3214, w: 325,  h: 703, imgSrc: ddOvo,       radius: 8, shadow: true, delay: 80  },
      { id: 'dd7', x: 972,  y: 3094, w: 325,  h: 706, imgSrc: ddVidi,      radius: 8, shadow: true, delay: 160 },
      { id: 'dd8', x: 155,  y: 4067, w: 1130, h: 644, imgSrc: ddProstor,   radius: 8, shadow: true, delay: 0   },
    ],
  },
  '03': {
    name: 'Split Airport',
    titleSize: 112,
    cocktail: 'APEROL SPRITZ',
    desc: 'Redesign of existing airport website with a focus on a cleaner interface with simplified navigation, new interactive map, faster access to flight data, and a more user-centered design.',
    descWidth: 340,
    descFontSize: 14,
    descLineHeight: 16,
    pageH: 5726,
    nextProject: '04',
    nextName: 'Lički Sokol',
    nextTop: 5364,
    frames: [
      { id: 'sa1', x: 155,  y: 504,  w: 1130, h: 859,  imgSrc: splitTimetable, radius: 8, shadow: true, delay: 0   },
      { id: 'sa2', x: 40,   y: 1510, w: 901,  h: 746,  imgSrc: splitSplittt,   radius: 8, shadow: true, delay: 0   },
      { id: 'sa3', x: 1075, y: 1738, w: 279.3, h: 605, imgSrc: splitMob,       radius: 6.875, shadow: true, delay: 80  },
      { id: 'sa4', x: 155,  y: 2570, w: 1130, h: 664,  imgSrc: splitTofrom,    radius: 8, shadow: true, delay: 0   },
      { id: 'sa5', x: 155,  y: 3481, w: 325,  h: 701,  imgSrc: splitAirline,   radius: 8, shadow: true, delay: 0   },
      { id: 'sa6', x: 556,  y: 3601, w: 325,  h: 679,  imgSrc: splitSearch,    radius: 8, shadow: true, delay: 80  },
      { id: 'sa7', x: 958,  y: 3481, w: 326,  h: 702,  imgSrc: splitFlight,    radius: 8, shadow: true, delay: 160 },
      { id: 'sa8', x: 155,  y: 4453, w: 1130, h: 658,  imgSrc: splitCheckin,   radius: 8, shadow: true, delay: 0   },
    ],
  },
  '04': {
    name: 'Lički Sokol',
    titleSize: 112,
    cocktail: 'MARGARITA',
    desc: 'Redesign of the Lički Sokol website for an adventure park and village, showcasing accommodations, food, drinks, and activities. The focus was on clearer structure, improved navigation, and a more inviting presentation of the overall experience.',
    descWidth: 340,
    descFontSize: 14,
    descLineHeight: 16,
    pageH: 5760,
    nextProject: '05',
    nextName: 'Izračunko',
    nextTop: 5398,
    frames: [
      { id: 'ls1', x: 155,  y: 506,  w: 1130, h: 1321, imgSrc: lsDesktop, radius: 8, shadow: true, delay: 0   },
      { id: 'ls2', x: 40,   y: 1993, w: 900,  h: 547,  imgSrc: lsFrame2,  radius: 8, shadow: true, delay: 0   },
      { id: 'ls3', x: 1075, y: 2093, w: 278,  h: 735,  imgSrc: lsMobile,  radius: 8, shadow: true, delay: 80  },
      { id: 'ls4', x: 155,  y: 3002, w: 1130, h: 939,  imgSrc: lsAboout,  radius: 8, shadow: true, delay: 0   },
      { id: 'ls5', x: 143,  y: 4267, w: 325,  h: 723,  imgSrc: lsDsssd,   radius: 8, shadow: true, delay: 0   },
      { id: 'ls6', x: 553,  y: 4439, w: 325,  h: 703,  imgSrc: lsIphone,  radius: 8, shadow: true, delay: 80  },
      { id: 'ls7', x: 960,  y: 4267, w: 325,  h: 723,  imgSrc: lsAbout,   radius: 8, shadow: true, delay: 160 },
    ],
  },
  '05': {
    name: 'Izračunko',
    titleSize: 112,
    cocktail: 'PINA COLADA',
    desc: 'Izračunko had an outdated interface that needed a more modern and user-friendly approach, so we led a full UI redesign alongside targeted UX improvements. The update focused on simplifying user flows, improving clarity, and creating a cleaner interface.',
    descWidth: 340,
    descFontSize: 14,
    descLineHeight: 16,
    pageH: 4500,
    nextProject: '01',
    nextName: 'Bome wines',
    nextTop: 4138,
    frames: [
      { id: 'iz1', x: 163,  y: 506,  w: 1130, h: 622, imgSrc: izHome,      radius: 0, shadow: true,  delay: 0   },
      { id: 'iz2', x: 40,   y: 1294, w: 900,  h: 471, imgSrc: izEmail,     radius: 8, shadow: false, delay: 0   },
      { id: 'iz3', x: 1075, y: 1394, w: 278,  h: 636, imgSrc: izMobitel,   radius: 0, shadow: false, delay: 80, bgColor: '#FFFFFF' },
      { id: 'iz4', x: 155,  y: 2204, w: 1130, h: 610, imgSrc: izCjenik,    radius: 0, shadow: false, delay: 0   },
      { id: 'iz5', x: 155,  y: 3069, w: 325,  h: 704, imgSrc: izMobPonude, radius: 8, shadow: false, delay: 0   },
      { id: 'iz6', x: 565,  y: 3179, w: 325,  h: 703, imgSrc: izMobSlike,  radius: 8, shadow: false, delay: 80  },
      { id: 'iz7', x: 972,  y: 3069, w: 325,  h: 703, imgSrc: izMobRacuni, radius: 8, shadow: false, delay: 160 },
    ],
  },
}

const LERP    = 0.1
const VIEWPORT = 760

export default function ProjectDetail({ projectId, onNavigate }) {
  const project = PROJECTS[projectId]
  const scrollRef  = useRef(0)
  const targetRef  = useRef(0)
  const rafRef     = useRef(null)
  const canvasRef  = useRef(null)
  const [seen, setSeen] = useState(() => new Set())

  const maxScroll = project ? Math.max(0, project.pageH - VIEWPORT) : 0

  // Reset scroll + seed initially-visible frames on project change
  useEffect(() => {
    scrollRef.current = 0
    targetRef.current = 0
    cancelAnimationFrame(rafRef.current)
    if (canvasRef.current) canvasRef.current.style.transform = 'translateY(0)'
    const init = new Set()
    project?.frames.forEach(f => { if (f.y - VIEWPORT + 80 <= 0) init.add(f.id) })
    setSeen(init)
  }, [projectId, project])

  const tick = useCallback(() => {
    const diff = targetRef.current - scrollRef.current
    if (Math.abs(diff) < 0.2) {
      scrollRef.current = targetRef.current
    } else {
      scrollRef.current += diff * LERP
      rafRef.current = requestAnimationFrame(tick)
    }
    if (canvasRef.current) {
      canvasRef.current.style.transform = `translateY(${-scrollRef.current}px)`
    }
    const y = scrollRef.current
    setSeen(prev => {
      let next = prev
      project?.frames.forEach(f => {
        if (!prev.has(f.id) && y >= f.y - VIEWPORT + 80) {
          if (next === prev) next = new Set(prev)
          next.add(f.id)
        }
      })
      return next
    })
  }, [project])

  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault()
      targetRef.current = Math.max(0, Math.min(maxScroll, targetRef.current + e.deltaY * 0.8))
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(tick)
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', onWheel)
      cancelAnimationFrame(rafRef.current)
    }
  }, [tick, maxScroll])

  if (!project) return null

  return (
    <div className={styles.page}>

      {/* Scrollable canvas */}
      <div ref={canvasRef} className={styles.canvas}>

        {/* Horizontal line at y≈298 */}
        <div className={styles.hLine} />

        {/* Diamond star on the line */}
        <img src={starOdProjekata} alt="" aria-hidden="true" className={styles.starOnLine} />

        {/* Title */}
        <p
          className={styles.title}
          style={{ fontSize: project.titleSize, top: 171 }}
        >
          {project.name}
        </p>

        {/* Description */}
        <p
          className={styles.desc}
          style={{
            width: project.descWidth,
            left: `calc(50% - ${project.descWidth / 2}px)`,
            fontSize: project.descFontSize,
            lineHeight: `${project.descLineHeight}px`,
          }}
        >
          {project.desc}
        </p>

        {/* Image frames */}
        {project.frames.map(f => {
          const iw  = f.imgW ?? f.w
          const ih  = f.imgH ?? f.h
          const ox  = f.imgOx !== undefined ? f.imgOx : (f.w - iw) / 2
          const oy  = f.imgOy !== undefined ? f.imgOy : (f.h - ih) / 2
          const vis = seen.has(f.id)
          return (
            <div
              key={f.id}
              className={`${styles.frame} ${vis ? styles.frameVisible : ''}`}
              style={{
                left: f.x,
                top: f.y,
                width: f.w,
                height: f.h,
                borderRadius: f.radius ?? 3,
                overflow: f.clip === false ? 'visible' : 'hidden',
                backgroundColor: f.bgColor,
                boxShadow: f.shadow
                  ? '0 4px 84px rgba(223,220,194,0.24)'
                  : undefined,
                transitionDelay: vis ? `${f.delay ?? 0}ms` : '0ms',
              }}
            >
              <img
                src={f.imgSrc}
                alt=""
                style={{ width: iw, height: ih, left: ox, top: oy }}
              />
            </div>
          )
        })}

        {/* NEXT UP section (when there's a next project) */}
        {project.nextProject && (
          <button
            className={styles.nextUp}
            style={{ top: project.nextTop }}
            onClick={() => onNavigate(`project-${project.nextProject}`)}
          >
            <p className={styles.nextName}>{project.nextName}</p>
            <span className={styles.nextLabel}>
              <span>NEXT UP</span>
              <span className={styles.nextArrow} aria-hidden="true" />
            </span>
            <img src={star9} alt="" aria-hidden="true" className={styles.nextStar} />
          </button>
        )}

      </div>{/* end canvas */}

      {/* Fixed chrome */}
      <nav className={styles.nav}>
        <button className={styles.navLink} onClick={() => onNavigate('home')}>HOME</button>
        <div className={styles.navDivider} aria-hidden="true" />
        <button className={styles.navLink} onClick={() => onNavigate('about')}>ABOUT</button>
        <div className={styles.navDivider} aria-hidden="true" />
        <button className={`${styles.navLink} ${styles.active}`} onClick={() => onNavigate('projects')}>PROJECTS</button>
        <div className={styles.navDivider} aria-hidden="true" />
        <button className={styles.navLink} onClick={() => onNavigate('contact')}>CONTACT</button>
      </nav>

      <button className={styles.goBack} onClick={() => onNavigate('projects')}>
        <span className={styles.goBackArrow} aria-hidden="true" />
        <span className={styles.goBackText}>GO BACK</span>
      </button>

    </div>
  )
}
