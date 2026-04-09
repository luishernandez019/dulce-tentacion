# Dulce Tentación — Sitio Web

Landing page para repostería artesanal, construida con Next.js + TypeScript + Tailwind CSS.

## Secciones

| Sección | Componente | Descripción |
|---|---|---|
| Navbar | `Navbar.tsx` | Barra fija con scroll, menú móvil |
| Hero | `Hero.tsx` | Encabezado principal con CTA |
| Nosotros | `About.tsx` | Historia, valores y razones de elección |
| Productos | `Products.tsx` | Tarjetas de productos con precios |
| Testimonios | `Testimonials.tsx` | Reseñas de clientes |
| Contacto | `ContactForm.tsx` | Formulario de contacto |
| Ubicación | `Location.tsx` | Mapa y horarios |
| Footer | `Footer.tsx` | Pie de página |
| WhatsApp | `WhatsAppButton.tsx` | Botón flotante de WhatsApp |

## Personalización rápida

### Nombre, datos de contacto y horarios

Edita el objeto `SITE` en `src/lib/constants.ts`.

### Productos y testimonios

Edita los arrays `PRODUCTS` y `TESTIMONIALS` en `src/lib/constants.ts`.

### Colores principales

| Variable | Valor | Uso |
|---|---|---|
| Rosa principal | `#be185d` | Botones, acentos, links |
| Rosa claro | `#fda4af` | Fondos suaves |
| Rosa fondo | `#fff1f2` | Fondo de secciones |
| Stone oscuro | `#1c1917` | Textos principales |
| Stone medio | `#78716c` | Textos secundarios |

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

El resultado queda en `.next/`.
