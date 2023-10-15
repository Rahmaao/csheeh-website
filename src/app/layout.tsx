import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Center for School Health Education and Environment Hygiene',
  description: 'The official CSHEEH Website',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-red-200 font-[Inter] w-full'>
        <div className="min-h-[100vh] w-full">
        {children}
        </div>
      </body>
    </html>
  )
}
