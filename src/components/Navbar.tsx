'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_LINKS, SITE } from '@/lib/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-stone-200'
          : 'bg-white/90 backdrop-blur-md'
      }`}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Navegación principal"
      >
        <Link
          href="#inicio"
          className="font-playfair text-xl font-bold text-amber-900 shrink-0"
          aria-label={`${SITE.name} — Ir al inicio`}
        >
          {SITE.name}
        </Link>

        <ul className="hidden md:flex items-center gap-7" role="list" aria-label="Secciones del sitio">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-stone-600 hover:text-amber-800 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="#contacto" className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5">
          Hacer un pedido
        </Link>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-amber-50 transition-colors"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-stone-100 px-4 pb-4 pt-2"
          role="navigation"
          aria-label="Menú móvil"
        >
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-2.5 px-3 rounded-lg text-stone-700 hover:text-amber-800 hover:bg-amber-50 transition-colors font-medium text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#contacto" onClick={closeMenu} className="btn-primary mt-3 w-full text-sm">
            Hacer un pedido
          </Link>
        </div>
      )}
    </header>
  )
}
