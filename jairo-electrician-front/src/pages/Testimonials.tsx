import { Link } from 'react-router-dom'
import { Star, Zap, ChevronRight } from 'lucide-react'
import { useT } from '../i18n'

export function Testimonials() {
  const t = useT()

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-800 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
            <Star className="h-7 w-7 fill-blue-900 text-blue-900" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">{t.testimonials.title}</h1>
          <p className="text-lg text-blue-200">{t.testimonials.subtitle}</p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.testimonials.items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-gray-100 bg-blue-50 p-7 shadow-sm"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 flex-1 text-sm leading-relaxed italic text-gray-700">
                  "{item.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-yellow-400">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <Zap className="mx-auto mb-4 h-10 w-10 text-yellow-400" />
          <h2 className="mb-4 text-2xl font-extrabold">{t.hero.cta3}</h2>
          <p className="mb-8 text-blue-200">{t.hero.subtitle}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-3.5 font-bold text-blue-900 transition hover:bg-yellow-300"
          >
            {t.hero.cta1}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
