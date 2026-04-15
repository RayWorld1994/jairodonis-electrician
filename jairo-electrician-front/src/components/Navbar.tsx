import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Zap, Phone } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setLanguage } from '../store/slices/languageSlice'
import { useT } from '../i18n'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  const lang = useAppSelector((s) => s.language.lang)
  const t = useT()

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/about', label: t.nav.about },
    { to: '/projects', label: t.nav.projects },
    { to: '/testimonials', label: t.nav.testimonials },
    { to: '/contact', label: t.nav.contact },
  ]

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-yellow-400' : 'text-blue-100 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 bg-blue-900 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400">
              <Zap className="h-5 w-5 text-blue-900" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-white">Jairo Donis</p>
              <p className="text-xs font-medium text-yellow-400">Electricista</p>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(setLanguage(lang === 'es' ? 'en' : 'es'))}
              className="rounded border border-blue-600 px-2.5 py-1 text-xs font-bold text-blue-100 transition hover:border-yellow-400 hover:text-yellow-400"
              aria-label="Switch language"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <a
              href="tel:+50212345678"
              className="hidden items-center gap-1.5 rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/10 sm:flex"
            >
              <Phone className="h-3.5 w-3.5" />
              Llamar
            </a>

            <Link
              to="/contact"
              className="hidden rounded-lg bg-yellow-400 px-4 py-1.5 text-sm font-bold text-blue-900 transition hover:bg-yellow-300 md:block"
            >
              {t.nav.quote}
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="text-white md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="border-t border-blue-700 pb-4 pt-2 md:hidden">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-2 py-2.5 text-sm font-medium ${
                    isActive ? 'text-yellow-400' : 'text-blue-100 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-lg bg-yellow-400 px-4 py-2 text-center text-sm font-bold text-blue-900"
            >
              {t.nav.quote}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
