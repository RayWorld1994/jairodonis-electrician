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

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}

const inputClass =
  'rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200'

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
      <section className="bg-gradient-to-br from-blue-950 to-blue-800 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
            <Zap className="h-7 w-7 text-blue-900" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">{t.contact.title}</h1>
          <p className="text-lg text-blue-200">{t.contact.subtitle}</p>
        </div>
      </section>

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
                    className="rounded-xl bg-blue-900 px-6 py-3 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
                  </button>
                </form>
              </div>
            </div>

            {/* ── Info sidebar ── */}
            <div className="flex flex-col gap-6">

              {/* Quick actions */}
              <a
                href="tel:+50212345678"
                className="flex items-center gap-4 rounded-2xl bg-blue-900 p-5 text-white transition hover:bg-blue-800"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400">
                  <Phone className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <p className="text-xs font-medium text-blue-300">{t.contact.info.phone}</p>
                  <p className="font-bold">+502 1234-5678</p>
                </div>
              </a>

              <a
                href="https://wa.me/50212345678"
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

              {/* Hours */}
              <div className="rounded-2xl border border-gray-100 bg-blue-50 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-900" />
                  <p className="font-bold text-blue-900">{t.contact.info.hours}</p>
                </div>
                <p className="text-sm text-gray-700">{t.contact.info.hoursValue}</p>
                <p className="mt-1 text-sm font-semibold text-yellow-600">
                  {t.contact.info.hoursEmergency}
                </p>
              </div>

              {/* Address */}
              <div className="rounded-2xl border border-gray-100 bg-blue-50 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-900" />
                  <p className="font-bold text-blue-900">{t.contact.info.address}</p>
                </div>
                <p className="text-sm text-gray-700">{t.contact.info.addressValue}</p>
              </div>

              {/* Map placeholder */}
              <div className="flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-400">
                <div className="text-center">
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
