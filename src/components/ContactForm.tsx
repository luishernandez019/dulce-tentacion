'use client'

import { useState } from 'react'
import { SITE } from '@/lib/constants'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const INITIAL_FORM: FormData = { name: '', email: '', phone: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    'w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition'

  return (
    <section
      id="contacto"
      className="py-20 bg-[#fdf8f2]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info column */}
          <div>
            <span className="section-label">Contáctanos</span>
            <h2 id="contact-heading" className="section-title mb-6">
              Haz tu pedido
            </h2>
            <p className="text-stone-500 leading-relaxed mb-8">
              ¿Tienes una ocasión especial próxima? Cuéntanos qué necesitas y
              con gusto te asesoramos para crear el postre perfecto para ti.
            </p>

            <ul className="space-y-4" role="list">
              <li>
                <a
                  href={`https://wa.me/${SITE.phone}?text=Hola,%20me%20interesa%20hacer%20un%20pedido`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-700 hover:text-amber-800 transition-colors group w-fit"
                  aria-label={`Escríbenos por WhatsApp al ${SITE.phoneDisplay}`}
                >
                  <span className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors shrink-0" aria-hidden="true">
                    📱
                  </span>
                  <span className="text-sm font-medium">{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-stone-700 hover:text-amber-800 transition-colors group w-fit"
                  aria-label={`Envíanos un correo a ${SITE.email}`}
                >
                  <span className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors shrink-0" aria-hidden="true">
                    ✉️
                  </span>
                  <span className="text-sm font-medium">{SITE.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Form column */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            {status === 'success' ? (
              <div className="text-center py-8" role="alert" aria-live="polite">
                <span className="text-6xl block mb-4" aria-hidden="true">🎉</span>
                <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-stone-500 text-sm">
                  Nos pondremos en contacto contigo a la brevedad.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-secondary mt-6 text-sm">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1.5">
                      Nombre <span className="text-amber-700" aria-label="requerido">*</span>
                    </label>
                    <input
                      type="text" id="name" name="name" value={form.name}
                      onChange={handleChange} required autoComplete="name"
                      placeholder="Tu nombre" className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">
                      Correo <span className="text-amber-700" aria-label="requerido">*</span>
                    </label>
                    <input
                      type="email" id="email" name="email" value={form.email}
                      onChange={handleChange} required autoComplete="email"
                      placeholder="tu@correo.com" className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1.5">
                    Teléfono{' '}
                    <span className="text-stone-400 text-xs font-normal">(opcional)</span>
                  </label>
                  <input
                    type="tel" id="phone" name="phone" value={form.phone}
                    onChange={handleChange} autoComplete="tel"
                    placeholder="+52 81 0000 0000" className={inputClass}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">
                    Mensaje <span className="text-amber-700" aria-label="requerido">*</span>
                  </label>
                  <textarea
                    id="message" name="message" value={form.message}
                    onChange={handleChange} required rows={4}
                    placeholder="Cuéntanos qué necesitas: tipo de postre, fecha, cantidad, diseño, etc."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p role="alert" className="text-amber-800 text-sm mb-4 bg-amber-50 px-4 py-2 rounded-lg border border-amber-200">
                    Ocurrió un error. Por favor intenta de nuevo o escríbenos directamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-busy={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Enviando…' : 'Enviar mensaje'}
                </button>

                <p className="text-xs text-stone-400 mt-3 text-center">
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
