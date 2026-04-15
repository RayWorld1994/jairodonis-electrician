import { Link } from 'react-router-dom'
import {
  Zap,
  Wrench,
  Shield,
  AlertCircle,
  ChevronRight,
  Star,
  Phone,
  MessageCircle,
  Award,
  CheckCircle,
} from 'lucide-react'
import { useT } from '../i18n'

const trustIcons = [CheckCircle, Shield, Award, CheckCircle]
const serviceIcons = [Zap, Wrench, Shield, AlertCircle]

export function Home() {
  const t = useT()

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-4 py-28 text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-yellow-400/10" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-700/40" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-yellow-400/15 px-4 py-1.5 text-sm font-medium text-yellow-300 ring-1 ring-yellow-400/30">
            <Zap className="h-4 w-4" />
            {t.hero.badge}
          </span>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            {t.hero.titleLine1}
            <br />
            <span className="text-yellow-400">{t.hero.titleLine2}</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-blue-200">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-3.5 font-bold text-blue-900 shadow-lg transition hover:bg-yellow-300"
            >
              {t.hero.cta1}
              <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+50212345678"
              className="flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              {t.hero.cta2}
            </a>
            <a
              href="https://wa.me/50212345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3.5 font-bold text-white transition hover:bg-green-500"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust badges ── */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-blue-900">
            {t.trust.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.trust.items.map((item, i) => {
              const Icon = trustIcons[i]
              return (
                <div
                  key={i}
                  className="flex flex-col items-center rounded-2xl border border-blue-100 bg-blue-50 p-7 text-center shadow-sm"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-900">
                    <Icon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="mb-2 font-bold text-blue-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="bg-blue-950 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-extrabold text-white">{t.services.title}</h2>
            <p className="text-blue-300">{t.services.subtitle}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.slice(0, 4).map((service, i) => {
              const Icon = serviceIcons[i]
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-blue-900/50 p-6 transition hover:bg-blue-800/60"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400">
                    <Icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <h3 className="mb-2 font-bold text-white">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-blue-300">{service.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-3 font-bold text-blue-900 transition hover:bg-yellow-300"
            >
              {t.services.allServices}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials preview ── */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-extrabold text-blue-900">
              {t.testimonials.title}
            </h2>
            <p className="text-gray-500">{t.testimonials.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.testimonials.items.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-blue-50 p-6 shadow-sm"
              >
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-5 text-sm italic leading-relaxed text-gray-700">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-yellow-400">
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
          <div className="mt-10 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-blue-900 px-8 py-3 font-bold text-blue-900 transition hover:bg-blue-50"
            >
              {t.nav.testimonials}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="bg-yellow-400 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-blue-900 sm:text-4xl">
            {t.hero.cta3}
          </h2>
          <p className="mb-8 text-blue-800">{t.hero.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-blue-900 px-8 py-3.5 font-bold text-white transition hover:bg-blue-800"
            >
              {t.hero.cta1}
            </Link>
            <a
              href="https://wa.me/50212345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3.5 font-bold text-white transition hover:bg-green-500"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
