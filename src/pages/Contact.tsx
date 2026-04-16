import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, MessageCircle, Clock, MapPin, Zap } from 'lucide-react'
import { useT } from '../i18n'

const contactSchema = z.object({
  name: z.string().min(2, 'Requerido (mín. 2 caracteres)'),
  phone: z.string().min(8, 'Teléfono requerido'),
  service: z.string().min(1, 'Selecciona un servicio'),
  message: z.string().min(10, 'Mínimo 10 caracteres'),
})

type ContactForm = z.infer<typeof contactSchema>

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}

const inputClass =
  'rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100'

export function Contact() {
  const t = useT()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (_data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 800))
    reset()
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-gray-900 to-slate-700 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-600">
            <Zap className="h-7 w-7 text-white" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">{t.contact.title}</h1>
          <p className="text-lg text-gray-300">{t.contact.subtitle}</p>
        </div>
      </section>

      {/* Blue strip */}
      <div className="bg-sky-600 px-4 py-4 text-center">
        <p className="font-semibold text-white">{t.hero.strip}</p>
      </div>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-3">

            {/* ── Contact form ── */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">

                {isSubmitSuccessful && (
                  <div className="mb-6 rounded-xl bg-green-50 px-5 py-4 text-sm font-medium text-green-700 ring-1 ring-green-200">
                    {t.contact.form.success}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={t.contact.form.name} error={errors.name?.message}>
                      <input
                        type="text"
                        {...register('name')}
                        placeholder={t.contact.form.namePlaceholder}
                        className={inputClass}
                      />
                    </Field>

                    <Field label={t.contact.form.phone} error={errors.phone?.message}>
                      <input
                        type="tel"
                        {...register('phone')}
                        placeholder={t.contact.form.phonePlaceholder}
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label={t.contact.form.service} error={errors.service?.message}>
                    <select {...register('service')} className={inputClass}>
                      <option value="">{t.contact.form.servicePlaceholder}</option>
                      {t.contact.form.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label={t.contact.form.message} error={errors.message?.message}>
                    <textarea
                      rows={5}
                      {...register('message')}
                      placeholder={t.contact.form.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-xl bg-sky-600 px-6 py-3 font-bold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
                  </button>
                </form>
              </div>
            </div>

            {/* ── Info sidebar ── */}
            <div className="flex flex-col gap-5">

              <a
                href="tel:+50378297951"
                className="flex items-center gap-4 rounded-2xl bg-sky-600 p-5 text-white transition hover:bg-sky-700"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-sky-100">{t.contact.info.phone}</p>
                  <p className="font-bold">+503 7829-7951</p>
                </div>
              </a>

              <a
                href="https://wa.me/50378297951"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-green-600 p-5 text-white transition hover:bg-green-500"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-green-200">{t.contact.info.whatsapp}</p>
                  <p className="font-bold">WhatsApp</p>
                </div>
              </a>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-sky-600" />
                  <p className="font-bold text-gray-900">{t.contact.info.hours}</p>
                </div>
                <p className="text-sm text-gray-600">{t.contact.info.hoursValue}</p>
                <p className="mt-1 text-sm font-semibold text-sky-600">
                  {t.contact.info.hoursEmergency}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-sky-600" />
                  <p className="font-bold text-gray-900">{t.contact.info.address}</p>
                </div>
                <p className="text-sm text-gray-600">{t.contact.info.addressValue}</p>
              </div>

              {/* Map placeholder */}
              <div className="flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200">
                <div className="text-center text-sky-500">
                  <MapPin className="mx-auto mb-2 h-8 w-8" />
                  <p className="text-sm font-medium">Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
