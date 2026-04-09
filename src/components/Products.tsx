import Link from 'next/link'
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
              <article className="relative card p-6 h-full flex flex-col">
                {product.tag && (
                  <span className="absolute top-4 right-4 bg-amber-800 text-white text-xs font-medium px-2.5 py-1 rounded-md">
                    {product.tag}
                  </span>
                )}
                <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <span className="text-3xl select-none" aria-hidden="true">
                    {product.emoji}
                  </span>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-stone-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed flex-grow mb-4">
                  {product.description}
                </p>
                <span className="text-amber-800 font-semibold text-sm">
                  {product.price}
                </span>
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
