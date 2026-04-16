import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Zap, Phone, Sun, Moon } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setLanguage } from '../store/slices/languageSlice'
import { toggleTheme } from '../store/slices/themeSlice'
import { useT } from '../i18n'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  const lang = useAppSelector((s) => s.language.lang)
  const theme = useAppSelector((s) => s.theme.theme)
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
      isActive ? 'text-nav-active' : 'text-nav-link hover:text-nav-text'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-nav-border bg-nav-bg shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cta">
              <Zap className="h-5 w-5 text-on-cta" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-nav-text">Jairo Donis</p>
              <p className="text-xs font-medium text-nav-active">{t.nav.role}</p>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} viewTransition className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={() => dispatch(setLanguage(lang === 'es' ? 'en' : 'es'))}
              className="rounded border border-nav-border px-2.5 py-1 text-xs font-bold text-nav-link transition hover:border-nav-active hover:text-nav-active"
              aria-label="Switch language"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Theme toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="flex items-center justify-center rounded border border-nav-border p-1.5 text-nav-link transition hover:border-nav-active hover:text-nav-active"
              aria-label={theme === 'modern' ? 'Switch to Classic theme' : 'Switch to Modern theme'}
              title={theme === 'modern' ? 'Classic theme' : 'Modern theme'}
            >
              {theme === 'modern'
                ? <Moon className="h-3.5 w-3.5" />
                : <Sun className="h-3.5 w-3.5" />
              }
            </button>

            {/* Phone */}
            <a
              href="tel:+50378297951"
              className="hidden items-center gap-1.5 text-sm font-semibold text-nav-text transition hover:text-nav-active sm:flex"
            >
              <Phone className="h-4 w-4 text-nav-active" />
              7829-7951
            </a>

            {/* CTA */}
            <Link
              to="/contact"
              viewTransition
              className="hidden rounded-lg bg-cta px-4 py-1.5 text-sm font-bold text-on-cta transition hover:bg-cta-hover md:block"
            >
              {t.nav.quote}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="text-nav-text md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="border-t border-nav-border pb-4 pt-2 md:hidden">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                viewTransition
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-2 py-2.5 text-sm font-medium ${
                    isActive ? 'text-nav-active' : 'text-nav-link hover:text-nav-text'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="tel:+50378297951"
                className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-nav-text"
              >
                <Phone className="h-4 w-4 text-nav-active" />
                +503 7829-7951
              </a>
              <Link
                to="/contact"
                viewTransition
                onClick={() => setOpen(false)}
                className="rounded-lg bg-cta px-4 py-2 text-center text-sm font-bold text-on-cta"
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
