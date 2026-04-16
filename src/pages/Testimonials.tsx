import { Link } from 'react-router-dom'
import { Star, Zap, ChevronRight } from 'lucide-react'
import { useT } from '../i18n'

export function Testimonials() {
  const t = useT()

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-gray-900 to-slate-700 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-600">
            <Star className="h-7 w-7 fill-white text-white" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">{t.testimonials.title}</h1>
          <p className="text-lg text-gray-300">{t.testimonials.subtitle}</p>
        </div>
      </section>

      {/* Blue strip */}
      <div className="bg-sky-600 px-4 py-4 text-center">
        <p className="font-semibold text-white">{t.hero.strip}</p>
      </div>

      {/* Reviews grid */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.testimonials.items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 flex-1 text-sm italic leading-relaxed text-gray-600">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-600 px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <Zap className="mx-auto mb-4 h-10 w-10 text-white" />
          <h2 className="mb-4 text-2xl font-extrabold">{t.hero.cta3}</h2>
          <p className="mb-8 text-sky-100">{t.hero.subtitle}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-bold text-sky-600 transition hover:bg-sky-50"
          >
            {t.hero.cta1}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
