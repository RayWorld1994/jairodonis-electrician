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
      <section className="bg-gradient-to-br from-blue-950 to-blue-800 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
            <Zap className="h-7 w-7 text-blue-900" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">{t.services.title}</h1>
          <p className="text-lg text-blue-200">{t.services.subtitle}</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((service, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={i}
                  className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-md hover:border-blue-200"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-900 transition group-hover:bg-yellow-400">
                    <Icon className="h-7 w-7 text-yellow-400 transition group-hover:text-blue-900" />
                  </div>
                  <h2 className="mb-3 text-lg font-bold text-blue-900">{service.title}</h2>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
                    {service.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="flex items-center gap-1 text-sm font-semibold text-blue-700 transition hover:text-yellow-500"
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
      <section className="bg-blue-900 px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
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
