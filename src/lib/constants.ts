export const SITE = {
  name: 'Dulce Tentación',
  tagline: 'Repostería artesanal hecha con amor',
  description:
    'Creamos piezas únicas de repostería artesanal con ingredientes frescos y de primera calidad. Cada bocado es una experiencia que no olvidarás.',
  phone: '+528112345678',
  phoneDisplay: '+52 81 1234 5678',
  email: 'contacto@dulcetentacion.mx',
  instagram: 'https://instagram.com/dulcetentacion',
  facebook: 'https://facebook.com/dulcetentacion',
  address: {
    street: 'Av. Hidalgo 435',
    neighborhood: 'Centro',
    city: 'Monterrey, N.L.',
    zip: '64000',
    full: 'Av. Hidalgo 435, Centro, Monterrey, N.L., C.P. 64000',
  },
  hours: [
    { day: 'Lunes – Viernes', time: '9:00 – 19:00' },
    { day: 'Sábado', time: '9:00 – 18:00' },
    { day: 'Domingo', time: 'Cerrado' },
  ],
} as const

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Ubicación', href: '#ubicacion' },
] as const

export const PRODUCTS = [
  {
    id: 1,
    // ↓ Reemplaza con la URL de tu imagen, ej: '/images/pastel-personalizado.jpg'
    image: 'https://images.pexels.com/photos/8478064/pexels-photo-8478064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Pastel Personalizado',
    description:
      'Diseñado especialmente para tu ocasión con decoraciones únicas y sabores a tu elección: vainilla, chocolate, fresa, limón y más.',
    price: 'Desde $450',
    tag: 'Más pedido',
  },
  {
    id: 2,
    // ↓ Reemplaza con la URL de tu imagen, ej: '/images/cupcakes.jpg'
    image: 'https://images.pexels.com/photos/7342495/pexels-photo-7342495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Cupcakes',
    description:
      'Esponjosos con betún cremoso. Disponibles en 6 sabores distintos por docena, perfectos para fiestas y reuniones.',
    price: 'Desde $180 la docena',
    tag: null,
  },
  {
    id: 3,
    // ↓ Reemplaza con la URL de tu imagen, ej: '/images/galletas-decoradas.jpg'
    image: 'https://images.pexels.com/photos/36943893/pexels-photo-36943893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Galletas Decoradas',
    description:
      'Galletas artesanales con decoración en fondant y glaseado real. Ideales como souvenir o regalo personalizado.',
    price: 'Desde $25 c/u',
    tag: null,
  },
  {
    id: 4,
    // ↓ Reemplaza con la URL de tu imagen, ej: '/images/cheesecake.jpg'
    image: 'https://images.pexels.com/photos/31779877/pexels-photo-31779877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Cheesecake',
    description:
      'Cremoso y suave con base de galleta mantequillada. Presentación clásica o con topping de fruta fresca de temporada.',
    price: 'Desde $380',
    tag: null,
  },
  {
    id: 5,
    // ↓ Reemplaza con la URL de tu imagen, ej: '/images/tartaletas.jpg'
    image: 'https://images.pexels.com/photos/24904053/pexels-photo-24904053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Tartaletas',
    description:
      'Masa quebrada crujiente rellena de crema pastelera y frutas frescas. Una combinación perfecta de texturas.',
    price: 'Desde $55 c/u',
    tag: null,
  },
  {
    id: 6,
    // ↓ Reemplaza con la URL de tu imagen, ej: '/images/brownies.jpg'
    image: 'https://images.pexels.com/photos/8707485/pexels-photo-8707485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Brownies',
    description:
      'Intensos, húmedos y elaborados con chocolate de alta calidad. Disponibles en caja de 6 o 12 piezas.',
    price: 'Desde $150 la caja',
    tag: null,
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    // ↓ Reemplaza con la URL de la foto de la persona, ej: '/images/maria.jpg'
    image: 'https://images.pexels.com/photos/5435020/pexels-photo-5435020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'María González',
    rating: 5,
    text: 'El pastel de cumpleaños para mi hija quedó increíble. La decoración fue exactamente lo que pedí y el sabor delicioso. ¡Todos los invitados quedaron fascinados!',
    location: 'Monterrey, N.L.',
  },
  {
    id: 2,
    // ↓ Reemplaza con la URL de la foto de la persona, ej: '/images/roberto.jpg'
    image: 'https://images.pexels.com/photos/6569689/pexels-photo-6569689.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Roberto Sánchez',
    rating: 5,
    text: 'Pedí cupcakes para el cumpleaños de mi esposa y superaron mis expectativas. El servicio es muy atento y cumplieron perfectamente con el tiempo de entrega.',
    location: 'San Pedro Garza García, N.L.',
  },
  {
    id: 3,
    // ↓ Reemplaza con la URL de la foto de la persona, ej: '/images/ana.jpg'
    image: 'https://images.pexels.com/photos/16206856/pexels-photo-16206856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Ana Martínez',
    rating: 5,
    text: 'Las galletas decoradas para el baby shower fueron un éxito total. Hermosas y deliciosas. Definitivamente volveré a encargarles para mis próximos eventos.',
    location: 'Santa Catarina, N.L.',
  },
]
