import { Link } from 'react-router-dom'
import { Zap, Phone, MessageCircle, Clock, MapPin } from 'lucide-react'
import { useT } from '../i18n'

export function Footer() {
  const t = useT()

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/about', label: t.nav.about },
    { to: '/projects', label: t.nav.projects },
    { to: '/testimonials', label: t.nav.testimonials },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <footer className="bg-blue-950 px-4 py-14 text-blue-300">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400">
                <Zap className="h-5 w-5 text-blue-900" />
              </div>
              <div className="leading-tight">
                <p className="font-extrabold text-white">Jairo Donis</p>
                <p className="text-xs text-yellow-400">Electricista Profesional</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="mb-4 font-bold text-white">{t.footer.pages}</h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm transition-colors hover:text-yellow-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 font-bold text-white">{t.footer.contactUs}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-yellow-400 shrink-0" />
                <a href="tel:+50212345678" className="hover:text-yellow-400 transition-colors">
                  +502 1234-5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-yellow-400 shrink-0" />
                <a
                  href="https://wa.me/50212345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>{t.contact.info.addressValue}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 font-bold text-white">{t.contact.info.hours}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-400 shrink-0" />
                <span>{t.contact.info.hoursValue}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-400 shrink-0" />
                <span className="font-semibold text-yellow-400">
                  {t.contact.info.hoursEmergency}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-800 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Jairo Donis. {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
