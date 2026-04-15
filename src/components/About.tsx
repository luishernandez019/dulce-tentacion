import Link from 'next/link'

const VALUES = [
  {
    number: '01',
    title: 'Ingredientes Premium',
    description:
      'Seleccionamos ingredientes frescos y de la más alta calidad para garantizar el mejor sabor en cada mordida.',
  },
  {
    number: '02',
    title: 'Hecho con Amor',
    description:
      'Cada pieza es elaborada a mano con dedicación y pasión. No usamos procesos industriales ni atajos.',
  },
  {
    number: '03',
    title: 'Diseño Personalizado',
    description:
      'Creamos diseños únicos adaptados a tu visión. Tu evento merece algo irrepetible y especialmente tuyo.',
  },
  {
    number: '04',
    title: 'Higiene y Cuidado',
    description:
      'Trabajamos en un espacio limpio y certificado. Cada producto se empaca con esmero para llegar perfecto.',
  },
  {
    number: '05',
    title: 'Entrega Puntual',
    description:
      'Sabemos que tu celebración no puede esperar. Cumplimos fechas y horarios con responsabilidad.',
  },
] as const

const STATS = [
  { value: '+500', label: 'Pedidos entregados' },
  { value: '6+', label: 'Años de experiencia' },
  { value: '4.9★', label: 'Valoración promedio' },
  { value: '100%', label: 'Hecho a mano' },
] as const

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top: text + values */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
            <p className="text-stone-600 leading-relaxed mb-4">
              Nuestra historia comenzó en una cocina familiar con una sola receta de
              pastel de vainilla. Hoy contamos con un catálogo amplio, pero seguimos
              haciendo cada pieza con las mismas manos y el mismo cariño de siempre.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Creemos que un buen postre no solo se come, también se admira. Por eso
              cuidamos cada detalle: la presentación, el empaque y, sobre todo, el sabor
              que hace que quieras repetir.
            </p>
            <Link href="#contacto" className="btn-primary">
              Contáctanos
            </Link>
          </div>

          {/* Values column */}
          <div className="flex flex-col gap-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 p-5 rounded-xl border border-stone-100 bg-[#fdf8f2] hover:border-amber-200 transition-colors duration-300"
              >
                <span
                  className="text-amber-300 font-fraunces font-bold text-lg shrink-0 mt-0.5 w-8 text-right"
                  aria-hidden="true"
                >
                  {value.number}
                </span>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">{value.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-stone-100 pt-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-fraunces text-3xl font-bold text-amber-800 mb-1">
                {stat.value}
              </p>
              <p className="text-stone-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
