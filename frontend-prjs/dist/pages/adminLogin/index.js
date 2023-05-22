import Head from 'next/head'
import { Inter } from 'next/font/google'
import LoginForm from '@/components/admin/LoginForm'

const inter = Inter({ subsets: ['latin'] })

export default function adminLogin() {
  return (
    <>
      <Head>
        <title>Admin Login Page</title>
        <meta name="description" content="OpenCDN : CDN des Universités Algériennes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cdn.png" />
      </Head>
      <main className="min-h-screen">
        <LoginForm />
      </main>
    </>
  )
}