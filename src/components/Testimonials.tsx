import { TESTIMONIALS } from '@/lib/constants'

function StarRating({ rating, name }: { rating: number; name: string }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} de 5 estrellas — reseña de ${name}`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 shrink-0 ${i < rating ? 'text-amber-400' : 'text-stone-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-20 bg-stone-900"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-400 font-semibold text-xs tracking-[0.18em] uppercase">
            Lo que dicen nuestros clientes
          </span>
          <h2
            id="testimonials-heading"
            className="font-playfair text-3xl sm:text-4xl font-bold text-white mt-2"
          >
            Reseñas y testimonios
          </h2>
        </div>

        {/* Cards */}
        <div
          className="grid md:grid-cols-3 gap-6"
          role="list"
          aria-label="Reseñas de clientes"
        >
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.id}
              role="listitem"
              className="bg-stone-800 rounded-xl p-6 border border-stone-700 hover:border-amber-700/50 transition-colors duration-300 flex flex-col"
            >
              <StarRating rating={testimonial.rating} name={testimonial.name} />

              <blockquote className="mt-4 flex-grow">
                <p className="text-stone-300 text-sm leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </blockquote>

              <footer className="mt-5 flex items-center gap-3 pt-4 border-t border-stone-700">
                <div
                  className="w-9 h-9 rounded-full bg-amber-800/30 flex items-center justify-center text-amber-400 font-bold text-sm shrink-0"
                  aria-hidden="true"
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic text-white font-semibold text-sm block">
                    {testimonial.name}
                  </cite>
                  <span className="text-stone-500 text-xs">{testimonial.location}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
