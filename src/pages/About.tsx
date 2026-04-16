import { Link } from 'react-router-dom'
import { CheckCircle, ChevronRight, Zap } from 'lucide-react'
import { useT } from '../i18n'

export function About() {
  const t = useT()

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-hero-from to-hero-to px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cta">
            <Zap className="h-7 w-7 text-on-cta" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">{t.about.title}</h1>
          <p className="text-lg text-hero-muted">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Brand strip */}
      <div className="bg-brand px-4 py-4 text-center">
        <p className="font-semibold text-white">{t.hero.strip}</p>
      </div>

      {/* Story */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Avatar placeholder */}
            <div className="flex items-center justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-3xl bg-gradient-to-br from-hero-from to-hero-to shadow-2xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-cta">
                    <span className="text-3xl font-extrabold text-on-cta">JD</span>
                  </div>
                  <p className="text-xl font-extrabold text-white">Jairo Donis</p>
                  <p className="mt-1 text-sm text-accent">{t.nav.role}</p>
                  <p className="mt-1 text-xs text-gray-400">El Salvador</p>
                  <div className="mt-4 h-px w-16 bg-cta/50" />
                  <p className="mt-4 text-xs text-gray-400">
                    {t.about.stats[0].value} {t.about.stats[0].label}
                  </p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="mb-6 text-3xl font-extrabold text-heading">{t.about.title}</h2>
              <p className="mb-5 leading-relaxed text-gray-600">{t.about.story1}</p>
              <p className="mb-8 leading-relaxed text-gray-600">{t.about.story2}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-cta px-7 py-3 font-bold text-on-cta transition hover:bg-cta-hover"
              >
                {t.hero.cta1}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.stats.map((stat, i) => (
              <div key={i} className="rounded-2xl bg-white/10 p-7 text-center">
                <p className="mb-1 text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="text-sm font-medium text-accent-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-10 text-3xl font-extrabold text-heading">{t.about.certs.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.about.certs.items.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-card-border bg-card px-5 py-4 text-left shadow-sm"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-brand" />
                <span className="font-medium text-gray-800">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
