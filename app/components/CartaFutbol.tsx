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
  leftSrc = '/dardevil.jpg',   // imagen izquierda (ajusta nombre si tu archivo es otro)
  rightSrc = '/tio ben.jpg',   // imagen derecha
  photoSrc = '/mi-padre.jpg'   // foto principal (colócala en public/)
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
      className="relative min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/atardecer.jpg')" }} // fondo: atardecer.jpg en public/
    >
      {/* capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/35" />

      {/* contenedor principal */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-10">

        {/* IMÁGENES LATERALES (position absolute) */}
        {/* Solo se muestran en md+ para no romper el diseño en móviles */}
        <div className="hidden md:block">
          {/* izquierda */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 w-44 h-44 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-2xl transform -translate-x-6 hover:scale-[1.02] transition">
            <Image src={leftSrc} alt="izquierda" width={300} height={300} style={{ objectFit: 'cover' }} />
          </div>
          {/* derecha */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-44 h-44 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-2xl transform translate-x-6 hover:scale-[1.02] transition">
            <Image src={rightSrc} alt="derecha" width={300} height={300} style={{ objectFit: 'cover' }} />
          </div>
        </div>

        {/* Layout interno: imagen principal + tarjeta */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch">

          {/* Imagen principal (columna izquierda en md) */}
          <div className="md:w-1/2 w-full rounded-xl overflow-hidden shadow-2xl border border-white/20">
            <div className="relative h-80 md:h-[520px]">
              <Image
                src={photoSrc}
                alt="Foto principal"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(min-width: 768px) 50vw, 100vw"
                placeholder="empty"
                className="transform hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* Tarjeta con efecto glass */}
          <div className="md:w-1/2 w-full flex flex-col justify-between">
            <div className="backdrop-blur-md bg-white/80 dark:bg-black/50 rounded-xl p-8 md:p-12 shadow-lg border border-white/40">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4" style={{ fontFamily: "'Lora', serif" }}>
                <span className="block text-red-700">Un padre</span>
                <span className="text-gray-800 text-2xl md:text-3xl">es una roca sólida para sus hijos</span>
              </h2>

              <div className="mt-4 text-gray-800 space-y-3 leading-relaxed text-base md:text-lg">
                {lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <p className="mt-6 text-sm text-gray-600 italic">— Rebeca Byler</p>
            </div>

            {/* Franja inferior tipo banner */}
            <div className="mt-6">
              <div className="bg-[#b91c1c] rounded-b-xl px-6 py-4 md:py-6 flex items-center justify-center shadow-inner border-t-2 border-[#7f1212]">
                <h1 className="text-2xl md:text-4xl font-black text-white tracking-wider uppercase drop-shadow-[0_14px_20px_rgba(0,0,0,0.6)]" style={{letterSpacing: '1px'}}>
                  {title}
                </h1>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
