import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Location from '@/components/Location'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <ContactForm />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
