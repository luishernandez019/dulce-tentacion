import { SITE } from '@/lib/constants'

export default function Location() {
  return (
    <section
      id="ubicacion"
      className="py-20 bg-white"
      aria-labelledby="location-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">Encuéntranos</span>
          <h2 id="location-heading" className="section-title">
            Nuestra ubicación
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Info cards */}
          <div className="flex flex-col gap-4">
            <div className="card p-6">
              <h3 className="font-semibold text-stone-900 mb-3 flex items-center gap-2">
                <span aria-hidden="true">📍</span> Dirección
              </h3>
              <address className="not-italic text-stone-600 text-sm leading-relaxed">
                {SITE.address.street}
                <br />
                {SITE.address.neighborhood}
                <br />
                {SITE.address.city}, C.P. {SITE.address.zip}
              </address>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-stone-900 mb-4 flex items-center gap-2">
                <span aria-hidden="true">🕐</span> Horarios de atención
              </h3>
              <ul className="space-y-2.5" role="list">
                {SITE.hours.map((item) => (
                  <li key={item.day} className="flex justify-between items-center text-sm">
                    <span className="text-stone-600">{item.day}</span>
                    <span className={`font-semibold ${item.time === 'Cerrado' ? 'text-amber-700' : 'text-stone-900'}`}>
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-stone-900 mb-2 flex items-center gap-2">
                <span aria-hidden="true">🚚</span> Servicio a domicilio
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Realizamos entregas en Monterrey y área metropolitana. Contáctanos
                para coordinar la entrega en tu zona.
              </p>
            </div>
          </div>

          {/* Map — Monterrey Centro */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-stone-200 h-[420px] lg:h-full min-h-[420px]">
            <iframe
              title="Ubicación de Dulce Tentación — Centro, Monterrey, N.L."
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.1528967621386!2d-100.31250452392858!3d25.671656977369497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662954a6a07c603%3A0xcc3cb4c8e4a2edd8!2sCentro%2C%2064000%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1712100000000!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
