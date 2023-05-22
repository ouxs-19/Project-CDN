import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Testimonials from '@/components/home/Testimonials'
import Features from '@/components/home/Features'
import NewsLetter from '@/components/home/NewsLetter'
import Footer from '@/components/home/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenCDN</title>
        <meta name="description" content="OpenCDN : CDN des Universités Algériennes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cdn.png" />
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <NewsLetter />
        <Footer />
      </main>
    </>
  )
}