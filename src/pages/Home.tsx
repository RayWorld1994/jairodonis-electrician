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
} from 'lucide-react'
import { useT } from '../i18n'

const serviceIcons = [Zap, Wrench, Shield, AlertCircle]

export function Home() {
  const t = useT()

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-slate-700 px-4 py-32 text-white">
        {/* subtle dot pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(white_1px,transparent_0)] [background-size:32px_32px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-600/20 px-4 py-1.5 text-sm font-medium text-sky-300 ring-1 ring-sky-500/30">
            <Zap className="h-4 w-4" />
            {t.hero.badge}
          </span>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            {t.hero.titleLine1}
            <br />
            <span className="text-sky-400">{t.hero.titleLine2}</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-lg bg-sky-600 px-8 py-3.5 font-bold text-white shadow-lg transition hover:bg-sky-700"
            >
              {t.hero.cta1}
              <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+50378297951"
              className="flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* ── Blue strip (like the image) ── */}
      <section className="bg-sky-600 px-4 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center font-semibold text-white sm:text-left">
            {t.hero.strip}
          </p>
          <Link
            to="/contact"
            className="shrink-0 rounded-full border-2 border-white px-6 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-sky-600"
          >
            {t.hero.cta3}
          </Link>
        </div>
      </section>

      {/* ── Satisfaction / Trust ── */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left: heading + bullets */}
            <div>
              <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900">
                {t.trust.title}
              </h2>
              <p className="mb-8 text-gray-500">{t.hero.subtitle}</p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-sky-600 px-6 py-2.5 text-sm font-bold text-sky-600 transition hover:bg-sky-50"
              >
                {t.services.allServices}
              </Link>
            </div>

            {/* Right: numbered list */}
            <ul className="space-y-4">
              {t.trust.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-extrabold text-gray-900">{t.services.title}</h2>
            <p className="text-gray-500">{t.services.subtitle}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.slice(0, 4).map((service, i) => {
              const Icon = serviceIcons[i]
              return (
                <div
                  key={i}
                  className="group rounded-2xl bg-white p-7 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 transition group-hover:bg-sky-700">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{service.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-8 py-3 font-bold text-white transition hover:bg-sky-700"
            >
              {t.services.allServices}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Projects photo strip (like image bottom section) ── */}
      <section className="grid grid-cols-1 lg:grid-cols-3">
        <div className="flex h-56 items-center justify-center bg-gradient-to-br from-gray-700 to-gray-600 lg:h-auto">
          <Zap className="h-16 w-16 text-white/30" />
        </div>
        <div className="flex h-56 items-center justify-center bg-gradient-to-br from-slate-600 to-slate-500 lg:h-auto">
          <Shield className="h-16 w-16 text-white/30" />
        </div>
        <div className="flex flex-col items-center justify-center bg-sky-600 px-8 py-12 text-center text-white">
          <h3 className="mb-3 text-2xl font-extrabold">{t.projects.title}</h3>
          <p className="mb-6 text-sm text-sky-100">{t.projects.subtitle}</p>
          <Link
            to="/projects"
            className="rounded-full border-2 border-white px-6 py-2 text-sm font-bold transition hover:bg-white hover:text-sky-600"
          >
            {t.projects.title}
          </Link>
        </div>
      </section>

      {/* ── Testimonials preview ── */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-extrabold text-gray-900">
              {t.testimonials.title}
            </h2>
            <p className="text-gray-500">{t.testimonials.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.testimonials.items.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
              >
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-5 text-sm italic leading-relaxed text-gray-600">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
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
          <div className="mt-10 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-sky-600 px-8 py-3 font-bold text-sky-600 transition hover:bg-sky-50"
            >
              {t.nav.testimonials}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="bg-sky-600 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
            {t.hero.cta3}
          </h2>
          <p className="mb-8 text-sky-100">{t.hero.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-lg bg-white px-8 py-3.5 font-bold text-sky-600 transition hover:bg-sky-50"
            >
              {t.hero.cta1}
            </Link>
            <a
              href="https://wa.me/50378297951"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-green-500 px-8 py-3.5 font-bold text-white transition hover:bg-green-400"
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
