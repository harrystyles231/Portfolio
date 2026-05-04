import { useState, useCallback, useEffect } from 'react'
import Home from './components/Home'
import HomeMobile from './components/HomeMobile'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact'

export default function App() {
  const [page, setPage] = useState('home')
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navigate = useCallback((next) => setPage(next), [])

  if (page === 'about') return <About onNavigate={navigate} />
  if (page === 'projects') return <Projects onNavigate={navigate} />
  if (page.startsWith('project-')) return <ProjectDetail projectId={page.replace('project-', '')} onNavigate={navigate} />
  if (page === 'contact') return <Contact onNavigate={navigate} />
  if (isMobile) return <HomeMobile onNavigate={navigate} />
  return <Home onNavigate={navigate} />
}
