import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Testimonials } from './pages/Testimonials'
import { Contact } from './pages/Contact'
import { useAppSelector } from './store/hooks'

function App() {
  const theme = useAppSelector((s) => s.theme.theme)

  useEffect(() => {
    if (theme === 'classic') {
      document.documentElement.setAttribute('data-theme', 'classic')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [theme])

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <header style={{ viewTransitionName: 'site-nav' }}>
        <Navbar />
      </header>
      <main className="flex-1" style={{ viewTransitionName: 'page-content' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer style={{ viewTransitionName: 'site-footer' }}>
        <Footer />
      </footer>
    </div>
  )
}

export default App
