import { Link } from 'react-router-dom'
import { CheckCircle, ChevronRight, Zap } from 'lucide-react'
import { useT } from '../i18n'

export function About() {
  const t = useT()

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-800 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
            <Zap className="h-7 w-7 text-blue-900" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">{t.about.title}</h1>
          <p className="text-lg text-blue-200">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Photo placeholder */}
            <div className="flex items-center justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 to-blue-700 shadow-2xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400">
                    <span className="text-3xl font-extrabold text-blue-900">JD</span>
                  </div>
                  <p className="text-xl font-extrabold text-white">Jairo Donis</p>
                  <p className="mt-1 text-sm text-yellow-400">Electricista Profesional</p>
                  <div className="mt-4 h-px w-16 bg-yellow-400/50" />
                  <p className="mt-4 text-xs leading-relaxed text-blue-300">
                    {t.about.stats[0].value} {t.about.stats[0].label}
                  </p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="mb-6 text-3xl font-extrabold text-blue-900">{t.about.title}</h2>
              <p className="mb-5 leading-relaxed text-gray-600">{t.about.story1}</p>
              <p className="mb-8 leading-relaxed text-gray-600">{t.about.story2}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-7 py-3 font-bold text-white transition hover:bg-blue-800"
              >
                {t.hero.cta1}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-900 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.stats.map((stat, i) => (
              <div key={i} className="rounded-2xl bg-blue-800/50 p-7 text-center">
                <p className="mb-1 text-4xl font-extrabold text-yellow-400">{stat.value}</p>
                <p className="text-sm font-medium text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-extrabold text-blue-900">{t.about.certs.title}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.about.certs.items.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 text-left shadow-sm"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-yellow-500" />
                <span className="font-medium text-blue-900">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
