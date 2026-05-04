import { useState, useCallback, useEffect } from 'react'
import Home from './components/Home'
import HomeMobile from './components/HomeMobile'
import About from './components/About'
import AboutMobile from './components/AboutMobile'
import Projects from './components/Projects'
import ProjectsMobile from './components/ProjectsMobile'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact'

function MobileScaler({ children }) {
  const [scale, setScale] = useState(() => window.innerWidth / 390)

  useEffect(() => {
    const update = () => setScale(window.innerWidth / 390)
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div style={{ width: '100vw', height: '100svh', overflow: 'hidden' }}>
      <div style={{
        width: 390,
        height: 844,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
      }}>
        {children}
      </div>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState('home')
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navigate = useCallback((next) => setPage(next), [])

  if (isMobile) {
    if (page === 'about') return <MobileScaler><AboutMobile onNavigate={navigate} /></MobileScaler>
    if (page === 'projects') return <MobileScaler><ProjectsMobile onNavigate={navigate} /></MobileScaler>
    if (page.startsWith('project-')) return <ProjectDetail projectId={page.replace('project-', '')} onNavigate={navigate} />
    if (page === 'contact') return <Contact onNavigate={navigate} />
    return <MobileScaler><HomeMobile onNavigate={navigate} /></MobileScaler>
  }

  if (page === 'about') return <About onNavigate={navigate} />
  if (page === 'projects') return <Projects onNavigate={navigate} />
  if (page.startsWith('project-')) return <ProjectDetail projectId={page.replace('project-', '')} onNavigate={navigate} />
  if (page === 'contact') return <Contact onNavigate={navigate} />
  return <Home onNavigate={navigate} />
}
