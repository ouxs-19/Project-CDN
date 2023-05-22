import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/admin/Navbar'
import Hero from '@/components/admin/Hero'
import ContentList from '@/components/admin/ContentList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenCDN Admin Panel</title>
        <meta name="description" content="Admin Panel pour OpenCDN : CDN des Universités Algériennes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cdn.png" />
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <ContentList />
      </main>
    </>
  )
}