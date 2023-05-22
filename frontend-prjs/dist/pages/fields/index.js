import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/tracks/Navbar'
import FieldsList from '@/components/fields/FieldsList'
import Welcome from '@/components/fields/Welcome'
import Footer from '@/components/home/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Fields() {

  return (
    <>
      <Head>
        <title>Welcome to OpenCDN Fields</title>
        <meta name="description" content="OpenCDN fields where you can find all the fields studied in the algerian universities and schools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cdn.png" />
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <Welcome />
        <FieldsList />
        <div className='h-12'></div>
        <Footer />
      </main>
    </>
  )
}