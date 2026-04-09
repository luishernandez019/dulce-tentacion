import Link from 'next/link'

const VALUES = [
  {
    icon: '✨',
    title: 'Ingredientes Premium',
    description:
      'Seleccionamos ingredientes frescos y de la más alta calidad para garantizar el mejor sabor.',
  },
  {
    icon: '❤️',
    title: 'Hecho con Amor',
    description:
      'Cada pieza es elaborada a mano con dedicación y pasión. No usamos procesos industriales.',
  },
  {
    icon: '🎨',
    title: 'Diseño Personalizado',
    description:
      'Creamos diseños únicos adaptados a tu visión. Tu evento merece algo irrepetible.',
  },
] as const

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <span className="section-label">Nuestra Historia</span>
            <h2 id="about-heading" className="section-title mb-6">
              Pasión por la repostería artesanal
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Somos una pequeña repostería en el corazón de Monterrey. Desde 2018, hemos
              creado piezas únicas para bodas, cumpleaños, bautizos y cualquier ocasión
              que merezca ser celebrada con algo verdaderamente delicioso.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Cada producto que elaboramos lleva nuestra firma: ingredientes frescos,
              recetas artesanales y atención al detalle. Creemos que un buen postre no
              solo se come, también se admira.
            </p>
            <Link href="#contacto" className="btn-primary">
              Contáctanos
            </Link>
          </div>

          {/* Values column */}
          <div className="flex flex-col gap-4">
            {VALUES.map((value) => (
              <div key={value.title} className="flex gap-4 p-5 rounded-xl border border-stone-100 bg-[#fdf8f2] hover:border-amber-200 transition-colors duration-300">
                <span className="text-3xl shrink-0 mt-0.5" aria-hidden="true">
                  {value.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">{value.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
