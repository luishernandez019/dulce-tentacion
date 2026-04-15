'use client'

import { useState } from 'react'
import { SITE } from '@/lib/constants'

type FormData = {
  name: string
  email: string
  phone: string
  eventType: string
  message: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const INITIAL_FORM: FormData = { name: '', email: '', phone: '', eventType: '', message: '' }

const EVENT_TYPES = [
  'Cumpleaños',
  'Boda',
  'Bautizo',
  'XV años',
  'Baby shower',
  'Graduación',
  'Corporativo',
  'Otro',
]

const CONTACT_INFO = [
  {
    label: 'WhatsApp',
    value: SITE.phoneDisplay,
    href: `https://wa.me/${SITE.phone}?text=Hola,%20me%20interesa%20hacer%20un%20pedido`,
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Correo',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
] as const

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      // TODO: Replace with your email provider (e.g. Resend, Nodemailer)
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent focus:bg-white transition-all duration-200'

  return (
    <section
      id="contacto"
      className="py-24 bg-[#fdf8f2]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14 max-w-xl mx-auto">
          <span className="section-label">Contáctanos</span>
          <h2 id="contact-heading" className="section-title mb-4">
            Haz tu pedido
          </h2>
          <p className="text-stone-500 leading-relaxed">
            ¿Tienes una ocasión especial próxima? Cuéntanos qué necesitas y
            con gusto te asesoramos para crear el postre perfecto para ti.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Info column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {CONTACT_INFO.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-stone-200 hover:border-amber-200 hover:shadow-sm transition-all duration-200 group"
              >
                <span className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 group-hover:bg-amber-100 transition-colors shrink-0">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-stone-700 text-sm font-medium leading-snug">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Redes sociales */}
            <div className="p-5 rounded-xl bg-white border border-stone-200">
              <p className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-4">
                Síguenos
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  aria-label="Síguenos en Instagram"
                >
                  <span className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 group-hover:bg-amber-200 transition-colors">
                    <svg className="w-4 h-4 text-amber-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-stone-800 text-sm font-medium group-hover:text-amber-800 transition-colors">Instagram</p>
                    <p className="text-stone-400 text-xs">@dulcetentacion</p>
                  </div>
                </a>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  aria-label="Síguenos en Facebook"
                >
                  <span className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 group-hover:bg-amber-200 transition-colors">
                    <svg className="w-4 h-4 text-amber-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-stone-800 text-sm font-medium group-hover:text-amber-800 transition-colors">Facebook</p>
                    <p className="text-stone-400 text-xs">Dulce Tentación</p>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Form column */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-7 sm:p-10 border border-stone-200 shadow-sm">
            {status === 'success' ? (
              <div className="text-center py-10" role="alert" aria-live="polite">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-fraunces text-2xl font-semibold text-stone-900 mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-stone-500 text-sm max-w-xs mx-auto">
                  Recibimos tu solicitud. Nos pondremos en contacto contigo a la brevedad.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-secondary mt-8 text-sm">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                      Nombre <span className="text-amber-700" aria-label="requerido">*</span>
                    </label>
                    <input
                      type="text" id="name" name="name" value={form.name}
                      onChange={handleChange} required autoComplete="name"
                      placeholder="Tu nombre completo"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                      Correo <span className="text-amber-700" aria-label="requerido">*</span>
                    </label>
                    <input
                      type="email" id="email" name="email" value={form.email}
                      onChange={handleChange} required autoComplete="email"
                      placeholder="tu@correo.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                      Teléfono <span className="text-stone-400 font-normal normal-case tracking-normal">(opcional)</span>
                    </label>
                    <input
                      type="tel" id="phone" name="phone" value={form.phone}
                      onChange={handleChange} autoComplete="tel"
                      placeholder="+52 81 0000 0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                      Tipo de evento
                    </label>
                    <select
                      id="eventType" name="eventType" value={form.eventType}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="">Selecciona una opción</option>
                      {EVENT_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                    Mensaje <span className="text-amber-700" aria-label="requerido">*</span>
                  </label>
                  <textarea
                    id="message" name="message" value={form.message}
                    onChange={handleChange} required rows={5}
                    placeholder="Cuéntanos qué necesitas: tipo de postre, fecha, cantidad, sabores, diseño, etc."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <div role="alert" className="flex items-start gap-3 text-amber-900 text-sm mb-5 bg-amber-50 px-4 py-3 rounded-lg border border-amber-200">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <span>Ocurrió un error. Por favor intenta de nuevo o escríbenos directamente por WhatsApp.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed gap-2"
                  aria-busy={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando…
                    </>
                  ) : (
                    <>
                      Enviar solicitud
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-stone-400 mt-4 text-center">
                  Tus datos están protegidos conforme a nuestro{' '}
                  <a href="/aviso-privacidad" className="underline hover:text-amber-800 transition-colors">
                    aviso de privacidad
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
