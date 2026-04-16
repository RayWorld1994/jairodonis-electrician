import { Zap, Home, Building2, Sun, Shield, AlertCircle } from 'lucide-react'
import { useT } from '../i18n'

type GradientKey =
  | 'Residencial' | 'Residential'
  | 'Comercial'   | 'Commercial'
  | 'Solar'
  | 'Seguridad'   | 'Security'
  | 'Emergencia'  | 'Emergency'

const categoryStyle: Record<
  GradientKey,
  { gradient: string; icon: React.ElementType; badge: string }
> = {
  Residencial:  { gradient: 'from-sky-700 to-sky-500',      icon: Home,        badge: 'bg-sky-100 text-sky-800' },
  Residential:  { gradient: 'from-sky-700 to-sky-500',      icon: Home,        badge: 'bg-sky-100 text-sky-800' },
  Comercial:    { gradient: 'from-slate-700 to-slate-500',   icon: Building2,   badge: 'bg-slate-100 text-slate-800' },
  Commercial:   { gradient: 'from-slate-700 to-slate-500',   icon: Building2,   badge: 'bg-slate-100 text-slate-800' },
  Solar:        { gradient: 'from-amber-600 to-yellow-400',  icon: Sun,         badge: 'bg-yellow-100 text-yellow-800' },
  Seguridad:    { gradient: 'from-gray-700 to-gray-500',     icon: Shield,      badge: 'bg-gray-100 text-gray-800' },
  Security:     { gradient: 'from-gray-700 to-gray-500',     icon: Shield,      badge: 'bg-gray-100 text-gray-800' },
  Emergencia:   { gradient: 'from-red-700 to-red-500',       icon: AlertCircle, badge: 'bg-red-100 text-red-800' },
  Emergency:    { gradient: 'from-red-700 to-red-500',       icon: AlertCircle, badge: 'bg-red-100 text-red-800' },
}

const fallback = { gradient: 'from-sky-700 to-sky-500', icon: Zap, badge: 'bg-sky-100 text-sky-800' }

export function Projects() {
  const t = useT()

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-hero-from to-hero-to px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cta">
            <Zap className="h-7 w-7 text-on-cta" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">{t.projects.title}</h1>
          <p className="text-lg text-hero-muted">{t.projects.subtitle}</p>
        </div>
      </section>

      {/* Brand strip */}
      <div className="bg-brand px-4 py-4 text-center">
        <p className="font-semibold text-white">{t.hero.strip}</p>
      </div>

      {/* Gallery */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.projects.items.map((project, i) => {
              const style = categoryStyle[project.category as GradientKey] ?? fallback
              const Icon = style.icon
              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-card-border shadow-sm transition hover:shadow-md"
                >
                  <div
                    className={`flex h-48 items-center justify-center bg-gradient-to-br ${style.gradient}`}
                  >
                    <Icon className="h-16 w-16 text-white/50" />
                  </div>
                  <div className="bg-card p-6">
                    <span
                      className={`mb-3 inline-block rounded-full px-3 py-0.5 text-xs font-semibold ${style.badge}`}
                    >
                      {project.category}
                    </span>
                    <h3 className="mb-2 font-bold text-heading">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{project.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
