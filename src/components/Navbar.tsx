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
      isActive ? 'text-sky-600' : 'text-gray-600 hover:text-gray-900'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-gray-900">Jairo Donis</p>
              <p className="text-xs font-medium text-sky-600">{t.nav.role}</p>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={() => dispatch(setLanguage(lang === 'es' ? 'en' : 'es'))}
              className="rounded border border-gray-300 px-2.5 py-1 text-xs font-bold text-gray-600 transition hover:border-sky-500 hover:text-sky-600"
              aria-label="Switch language"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Phone */}
            <a
              href="tel:+50378297951"
              className="hidden items-center gap-1.5 text-sm font-semibold text-gray-700 transition hover:text-sky-600 sm:flex"
            >
              <Phone className="h-4 w-4 text-sky-600" />
              7829-7951
            </a>

            {/* CTA */}
            <Link
              to="/contact"
              className="hidden rounded-lg bg-sky-600 px-4 py-1.5 text-sm font-bold text-white transition hover:bg-sky-700 md:block"
            >
              {t.nav.quote}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="border-t border-gray-100 pb-4 pt-2 md:hidden">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-2 py-2.5 text-sm font-medium ${
                    isActive ? 'text-sky-600' : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="tel:+50378297951"
                className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-gray-700"
              >
                <Phone className="h-4 w-4 text-sky-600" />
                +503 7829-7951
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-sky-600 px-4 py-2 text-center text-sm font-bold text-white"
              >
                {t.nav.quote}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
