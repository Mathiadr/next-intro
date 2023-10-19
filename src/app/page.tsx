"use client"
import Image from 'next/image'
import { Navigation } from './Navigation'

export default function Home() {
  return (
    <div className='h-screen'>
      <header>
        <Navigation />
      </header>
      <main className="text-4xl font-bold text-center mt-8">
        <h1>Velkommen!</h1>
      </main>
    </div>
  )
}
