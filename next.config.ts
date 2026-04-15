import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Pexels
      { protocol: 'https', hostname: 'images.pexels.com' },
      // Unsplash
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // Cloudinary (si usas Cloudinary)
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      // Imgur
      { protocol: 'https', hostname: 'i.imgur.com' },
      // Google Drive (vista pública)
      { protocol: 'https', hostname: 'drive.google.com' },
      // Agrega aquí cualquier otro dominio que necesites:
      // { protocol: 'https', hostname: 'tu-dominio.com' },
    ],
  },
}

export default nextConfig
