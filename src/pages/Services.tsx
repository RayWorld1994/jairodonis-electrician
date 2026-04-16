import { Link } from 'react-router-dom'
import {
  Zap,
  Wrench,
  Shield,
  AlertCircle,
  LayoutGrid,
  Lightbulb,
  Camera,
  Sun,
  ChevronRight,
} from 'lucide-react'
import { useT } from '../i18n'

const icons = [Zap, Wrench, Shield, AlertCircle, LayoutGrid, Lightbulb, Camera, Sun]

export function Services() {
  const t = useT()

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-hero-from to-hero-to px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cta">
            <Zap className="h-7 w-7 text-on-cta" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">{t.services.title}</h1>
          <p className="text-lg text-hero-muted">{t.services.subtitle}</p>
        </div>
      </section>

      {/* Brand strip */}
      <div className="bg-brand px-4 py-4 text-center">
        <p className="font-semibold text-white">{t.hero.strip}</p>
      </div>

      {/* Services grid */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((service, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={i}
                  className="group flex flex-col rounded-2xl border border-card-border bg-card p-7 shadow-sm transition hover:shadow-md hover:border-brand/40"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand transition group-hover:bg-brand-hover">
                    <Icon className="h-7 w-7 text-on-brand" />
                  </div>
                  <h2 className="mb-3 text-lg font-bold text-heading">{service.title}</h2>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">
                    {service.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="flex items-center gap-1 text-sm font-semibold text-brand transition hover:text-brand-hover"
                  >
                    {t.services.cta}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-brand px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
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
