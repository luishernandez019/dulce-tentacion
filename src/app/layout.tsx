import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dulce Tentación | Repostería Artesanal en Monterrey',
  description:
    'Repostería artesanal hecha con ingredientes de primera calidad en Monterrey. Pasteles personalizados, cupcakes, cheesecakes, galletas decoradas y más. Entrega en Monterrey y área metropolitana.',
  keywords: [
    'repostería artesanal monterrey',
    'pasteles personalizados monterrey',
    'cupcakes monterrey',
    'cheesecake artesanal',
    'pastelería centro monterrey',
    'galletas decoradas monterrey',
    'brownies artesanales',
    'pedidos repostería monterrey',
  ],
  authors: [{ name: 'Dulce Tentación' }],
  openGraph: {
    title: 'Dulce Tentación | Repostería Artesanal',
    description:
      'Pasteles, cupcakes y delicias artesanales hechos con ingredientes de primera calidad en Monterrey, N.L.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Dulce Tentación',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dulce Tentación — Repostería Artesanal en Monterrey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dulce Tentación | Repostería Artesanal',
    description: 'Pasteles y delicias artesanales hechos con amor en Monterrey, N.L.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL('https://dulcetentacion.mx'),
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Dulce Tentación',
  description:
    'Repostería artesanal con ingredientes de primera calidad en Monterrey, Nuevo León.',
  telephone: '+528112345678',
  email: 'contacto@dulcetentacion.mx',
  url: 'https://dulcetentacion.mx',
  image: 'https://dulcetentacion.mx/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Hidalgo 435',
    addressLocality: 'Centro',
    addressRegion: 'Nuevo León',
    postalCode: '64000',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.6716,
    longitude: -100.3097,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
  servesCuisine: 'Repostería',
  currenciesAccepted: 'MXN',
  paymentAccepted: 'Cash, Credit Card, Transfer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter antialiased text-stone-900 bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary text-sm"
        >
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  )
}
