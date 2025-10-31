"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CartaFutbolProps {
  title: string;
  subtitle: string;
  mainImage: string;
  leftSrc: string;
  rightSrc: string;
}

export default function CartaFutbol({
  title,
  subtitle,
  mainImage,
  leftSrc,
  rightSrc,
}: CartaFutbolProps) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden text-white px-4">
      {/* Fondo de luz suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* IMÁGENES LATERALES */}
      <div className="hidden md:block">
        {/* COLUMNA IZQUIERDA - DOS IMÁGENES */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          {/* Primera imagen izquierda (la original) */}
          <div
            className="rounded-xl overflow-hidden shadow-2xl"
            style={{ width: '280px', height: '380px' }}
            aria-hidden
          >
            <div className="w-full h-full relative">
              <Image
                src={leftSrc}
                alt="izquierda"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            </div>
          </div>

          {/* Segunda imagen debajo - usando tio ben.jpg */}
          <div
            className="rounded-xl overflow-hidden shadow-2xl"
            style={{ width: '280px', height: '380px' }}
            aria-hidden
          >
            <div className="w-full h-full relative">
              <Image
                src="/tio ben.jpg"
                alt="segunda imagen"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            </div>
          </div>
        </div>

        {/* derecha */}
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-xl overflow-hidden shadow-2xl"
          style={{ width: '280px', height: '380px' }}
          aria-hidden
        >
          <div className="w-full h-full relative">
            <Image
              src={rightSrc}
              alt="derecha"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>
        </div>
      </div>

      {/* CARTA CENTRAL */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-lg text-center border border-white/20 shadow-2xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Imagen principal */}
        <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
          <Image
            src={mainImage}
            alt="principal"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Título */}
        <h1 className="text-4xl font-extrabold tracking-wide mb-2 text-white drop-shadow-lg">
          {title}
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-gray-300 font-light">{subtitle}</p>
      </motion.div>
    </section>
  );
}