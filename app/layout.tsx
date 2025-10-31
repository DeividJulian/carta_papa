import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Carta Papá',
  description: 'Carta de cumpleaños versión fútbol'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}


