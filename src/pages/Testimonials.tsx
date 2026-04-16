import { Link } from 'react-router-dom'
import { Star, Zap, ChevronRight } from 'lucide-react'
import { useT } from '../i18n'

export function Testimonials() {
  const t = useT()

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-hero-from to-hero-to px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cta">
            <Star className="h-7 w-7 fill-on-cta text-on-cta" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">{t.testimonials.title}</h1>
          <p className="text-lg text-hero-muted">{t.testimonials.subtitle}</p>
        </div>
      </section>

      {/* Brand strip */}
      <div className="bg-brand px-4 py-4 text-center">
        <p className="font-semibold text-white">{t.hero.strip}</p>
      </div>

      {/* Reviews grid */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.testimonials.items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-card-border bg-card p-7 shadow-sm"
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
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-on-brand">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-heading">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <Zap className="mx-auto mb-4 h-10 w-10 text-accent" />
          <h2 className="mb-4 text-2xl font-extrabold">{t.hero.cta3}</h2>
          <p className="mb-8 text-accent-muted">{t.hero.subtitle}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-section-btn px-8 py-3.5 font-bold text-brand transition hover:bg-section-btn-hover"
          >
            {t.hero.cta1}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
