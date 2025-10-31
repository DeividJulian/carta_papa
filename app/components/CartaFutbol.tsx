'use client'
import Image from 'next/image'
import React from 'react'

interface Props {
  title?: string
  quoteLines?: string[]
  leftSrc?: string
  rightSrc?: string
  photoSrc?: string
}

export default function CartaFutbol({
  title = 'FELIZ CUMPLEAÑOS PAPÁ',
  quoteLines = [],
  leftSrc = '/dardevil.jpg',
  rightSrc = '/tio ben.jpg',
  photoSrc = '/mi-padre.jpg'
}: Props) {
  const defaultQuote = [
    'Un padre es una roca sólida para sus hijos,',
    'un hombre que ha estado a su lado en los momentos más importantes,',
    'que ha demostrado (con acciones más que con palabras) el gran amor',
    'que tiene hacia cada uno de sus hijos.',
    '',
    'Es un hombre que ha trabajado duro para sacar adelante a su familia.',
    'A veces ha ganado y a veces ha perdido, pero siempre ha estado presente, y ha seguido adelante.'
  ]

  const lines = quoteLines.length ? quoteLines : defaultQuote

  return (
    <main
      className="relative min-h-screen flex items-start justify-center bg-fixed bg-center bg-cover pb-safe"
      style={{ backgroundImage: "url('/atardecer.jpg')" }}
    >
      {/* overlay: MÁS oscuro en mobile para mejor contraste del texto */}
      <div className="absolute inset-0 bg-black/65 md:bg-black/35" />

      {/* IMÁGENES LATERALES: OCULTAS EN MÓVIL */}
      <div className="hidden md:block">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-56 h-56 rounded-xl overflow-hidden shadow-2xl">
          <Image src={leftSrc} alt="izquierda" width={400} height={400} style={{ objectFit: 'cover' }} />
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-56 h-56 rounded-xl overflow-hidden shadow-2xl">
          <Image src={rightSrc} alt="derecha" width={400} height={400} style={{ objectFit: 'cover' }} />
        </div>
      </div>

      {/* contenedor principal centrado */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 py-8">
        {/* En mobile se apila (col), en md se pone row (imagen + tarjeta) */}
        <div className="flex flex-col md:flex-row items-center gap-6">

          {/* IMAGEN PRINCIPAL: ocupa 100% ancho en mobile */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl border border-white/10">
            <div className="relative h-56 md:h-[520px]">
              <Image
                src={photoSrc}
                alt="Foto principal"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="transform hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* TARJETA: ancho controlado en mobile */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div className="mx-auto w-full max-w-xl bg-white/90 text-gray-800 rounded-2xl p-5 md:p-12 shadow-lg backdrop-blur-sm">
              <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-gray-900 mb-4 text-center md:text-left">
                <span className="block text-red-700">Un padre</span>
                <span className="text-gray-800 text-base md:text-2xl">es una roca sólida para sus hijos</span>
              </h2>

              <div className="mt-3 md:mt-4 text-gray-700 space-y-2 leading-relaxed text-sm md:text-base text-center md:text-left">
                {lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <p className="mt-4 text-sm text-gray-600 italic text-right">— Rebeca Byler</p>
            </div>

            {/* BANNER: en móvil es FIXED en la parte inferior (no tapa contenido por pb-safe) */}
            <div className="w-full flex justify-center">
              <div
                className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-11/12 max-w-xs md:static md:w-full bg-[#b91c1c] text-white font-black text-sm md:text-3xl text-center uppercase py-2 md:py-5 rounded-lg shadow-lg"
                style={{ letterSpacing: '1px' }}
              >
                {title}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
