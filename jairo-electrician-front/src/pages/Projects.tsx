import { Zap, Home, Building2, Sun, Shield, AlertCircle } from 'lucide-react'
import { useT } from '../i18n'

type GradientKey = 'Residencial' | 'Residential' | 'Comercial' | 'Commercial' | 'Solar' | 'Seguridad' | 'Security' | 'Emergencia' | 'Emergency'

const categoryStyle: Record<GradientKey, { gradient: string; icon: React.ElementType; badge: string }> = {
  Residencial:  { gradient: 'from-blue-800 to-blue-600',   icon: Home,          badge: 'bg-blue-200 text-blue-900' },
  Residential:  { gradient: 'from-blue-800 to-blue-600',   icon: Home,          badge: 'bg-blue-200 text-blue-900' },
  Comercial:    { gradient: 'from-slate-700 to-slate-500',  icon: Building2,     badge: 'bg-slate-200 text-slate-900' },
  Commercial:   { gradient: 'from-slate-700 to-slate-500',  icon: Building2,     badge: 'bg-slate-200 text-slate-900' },
  Solar:        { gradient: 'from-amber-600 to-yellow-400', icon: Sun,           badge: 'bg-yellow-200 text-yellow-900' },
  Seguridad:    { gradient: 'from-purple-800 to-purple-600',icon: Shield,        badge: 'bg-purple-200 text-purple-900' },
  Security:     { gradient: 'from-purple-800 to-purple-600',icon: Shield,        badge: 'bg-purple-200 text-purple-900' },
  Emergencia:   { gradient: 'from-red-700 to-red-500',      icon: AlertCircle,   badge: 'bg-red-200 text-red-900' },
  Emergency:    { gradient: 'from-red-700 to-red-500',      icon: AlertCircle,   badge: 'bg-red-200 text-red-900' },
}

const fallback = { gradient: 'from-blue-800 to-blue-600', icon: Zap, badge: 'bg-blue-200 text-blue-900' }

export function Projects() {
  const t = useT()

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-800 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
            <Zap className="h-7 w-7 text-blue-900" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">{t.projects.title}</h1>
          <p className="text-lg text-blue-200">{t.projects.subtitle}</p>
        </div>
      </section>

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
                  className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md"
                >
                  {/* Visual placeholder */}
                  <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${style.gradient}`}>
                    <Icon className="h-16 w-16 text-white/60" />
                  </div>

                  <div className="p-6">
                    <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-semibold ${style.badge} mb-3`}>
                      {project.category}
                    </span>
                    <h3 className="mb-2 font-bold text-blue-900">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{project.desc}</p>
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
