import Link from 'next/link'
import Image from 'next/image'
import { PRODUCTS } from '@/lib/constants'

export default function Products() {
  return (
    <section
      id="productos"
      className="py-20 bg-stone-50"
      aria-labelledby="products-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="section-label">Nuestros Sabores</span>
          <h2 id="products-heading" className="section-title mb-4">
            Productos artesanales
          </h2>
          <p className="text-stone-500 leading-relaxed">
            Elaborados con ingredientes frescos y recetas propias. Todos los
            productos están disponibles para pedidos especiales con anticipación.
          </p>
        </div>

        {/* Grid */}
        <ul
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Catálogo de productos"
        >
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <article className="relative card h-full flex flex-col overflow-hidden">
                {product.tag && (
                  <span className="absolute top-3 right-3 z-10 bg-amber-800 text-white text-xs font-medium px-2.5 py-1 rounded-md">
                    {product.tag}
                  </span>
                )}

                {/* Product image */}
                <div className="relative w-full aspect-[4/3] bg-amber-50 shrink-0">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    /* Placeholder visible hasta que agregues tu imagen */
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-amber-300">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 18h16.5M21 12V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12" />
                      </svg>
                      <span className="text-xs text-amber-400">Agrega tu imagen en constants.ts</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-fraunces text-lg font-semibold text-stone-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed flex-grow mb-4">
                    {product.description}
                  </p>
                  <span className="text-amber-800 font-semibold text-sm">
                    {product.price}
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <p className="text-stone-600 text-sm mb-4">
            ¿No encuentras lo que buscas? Hacemos pedidos totalmente personalizados.
          </p>
          <Link href="#contacto" className="btn-primary">
            Solicitar pedido especial
          </Link>
        </div>
      </div>
    </section>
  )
}
