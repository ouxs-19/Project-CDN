import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Form from '@/components/login/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="OpenCDN : CDN des Universités Algériennes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cdn.png" />
      </Head>
      <main className="min-h-screen">
        <Form />
      </main>
    </>
  )
}