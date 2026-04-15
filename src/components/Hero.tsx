import Link from 'next/link'
import { SITE } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-[#fdf8f2] pt-16 overflow-hidden"
      aria-label="Bienvenida a Dulce Tentación"
    >
      {/* Decorative warm blobs */}
      <div
        className="absolute top-0 right-0 w-[32rem] h-[32rem] rounded-full bg-amber-100/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-yellow-100/70 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        {/* Centered top content */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <span className="section-label">Repostería Artesanal · Monterrey, N.L.</span>

          <h1 className="font-fraunces text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 leading-tight mt-4 mb-6">
            Sabores que{' '}
            <span className="relative inline-block">
              <span className="text-amber-800">enamoran</span>
              <span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-300 rounded-full"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {SITE.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#productos" className="btn-primary">
              Ver productos
            </Link>
            <Link href="#contacto" className="btn-secondary">
              Hacer un pedido
            </Link>
          </div>
        </div>

        {/* Product showcase strip */}
        <div
          className="mt-16 grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-2xl mx-auto animate-fade-in"
          aria-hidden="true"
        >
          {(['🎂', '🧁', '🍪', '🍰', '🫐', '🍫'] as const).map((emoji, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <span className="select-none">{emoji}</span>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-14 flex items-center gap-8 justify-center animate-fade-in">
          <div className="text-center">
            <p className="font-fraunces text-2xl font-bold text-stone-900">+500</p>
            <p className="text-stone-500 text-xs">pedidos entregados</p>
          </div>
          <div className="h-8 w-px bg-stone-300" aria-hidden="true" />
          <div className="text-center">
            <p className="font-fraunces text-2xl font-bold text-stone-900">5★</p>
            <p className="text-stone-500 text-xs">valoración promedio</p>
          </div>
          <div className="h-8 w-px bg-stone-300" aria-hidden="true" />
          <div className="text-center">
            <p className="font-fraunces text-2xl font-bold text-stone-900">6 años</p>
            <p className="text-stone-500 text-xs">de experiencia</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-stone-600"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
