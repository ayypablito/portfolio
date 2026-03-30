"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  { title: "Cuadro Chief Keef", image: "/covers/1.png" },
  { title: "Portada oficial Ministro de Icy Vedo", image: "/covers/2.png" },
  { title: "Cuadro para artista Midnvght", image: "/covers/3.jpg" },
  { title: "Cuadro para artista Pablo Chill-e", image: "/covers/4.png" },
  { title: "Portada oficial Quien tiene Maka en Bcn de Icy Vedo", image: "/covers/5.jpg" },
  { title: "Portada Oficial Pepesoup de Yapi x Cyril Kamer", image: "/covers/6.png" },
  { title: "Cuadro para artista Chuckywackemm", image: "/covers/7.png" },
  { title: "Portada oficial VPDEXX de Vvdexx", image: "/covers/8.jpg" },
  { title: "Portada oficial Joseando desde el Wickr de 2muchmg", image: "/covers/9.jpg" },
  { title: "Portada no usada para Slimesito", image: "/covers/10.png" },
  { title: "Cover art para el album Nacer de nuevo de Jc Reyes", image: "/covers/11.jpg" },
  { title: "Portada oficial Chica sola de Bores D", image: "/covers/12.jpg" },
  { title: "Portada oficial 2.0 de Lorna junto a @spacemental_", image: "/covers/14.jpg" },
  { title: "Portada oficial para el album Badman In Love de Yapi", image: "/covers/16.jpg" },
  { title: "Portada Oficial para ShisosaLoud", image: "/covers/17.jpg" },
  { title: "Portada no usada para NTG y Braulio Fogon 4 Peines", image: "/covers/18.png" },
  { title: "Cuadro para Roa", image: "/covers/19.jpg" },
  { title: "Cuadro del Padrino", image: "/covers/20.png" },
  { title: "Portada oficial Te estoy buscando para LaDiferencia2006", image: "/covers/21.jpeg" },
];

// Animación letra por letra
const AnimatedText = ({ text, className }) => {
  return (
    <h1 className={className} style={{ fontFamily: 'OldNewspaper' }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
};

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yTransform = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <main
      ref={ref}
      className="animated-gradient text-white min-h-screen px-6 md:px-24 py-20"
    >

      {/* HEADER */}
      <section className="mb-16 text-center">
        <AnimatedText
          text="Pablo Gonzalez 1AyyPablo "
          className="text-5xl md:text-7xl font-bold tracking-tight"
        />

        <motion.p
          style={{ fontFamily: 'OldNewspaper' }}
          className="text-gray-300 mt-6 max-w-md mx-auto text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Cover art & visual design.
        </motion.p>
      </section>

      {/* BIOGRAFÍA + BOTÓN INSTAGRAM */}
      <section className="mb-40 text-center">
        <motion.p
          style={{ fontFamily: 'OldNewspaper' }}
          className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Soy Pablo Gonzalez "1AyyPablo", artista visual y diseñador de portadas. Me especializo en crear cover art únicos que reflejan la identidad de cada proyecto musical o artístico y cuento con mas de 60 millones de visitas en mis diseños.
        </motion.p>

        {/* BOTÓN INSTAGRAM */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://www.instagram.com/1ayypablo/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-500 transition rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608C4.533 2.513 5.8 2.225 7.166 2.163 8.432 2.105 8.812 2.163 12 2.163zm0-2.163C8.735 0 8.332.012 7.052.07 5.773.127 4.615.41 3.635 1.39 2.654 2.37 2.371 3.528 2.314 4.807.255 5.5.243 8.735.243 12s.012 6.5.07 7.78c.057 1.279.34 2.437 1.321 3.417.981.981 2.139 1.264 3.417 1.321C8.332 23.988 8.735 24 12 24s3.668-.012 4.948-.07c1.278-.057 2.436-.34 3.417-1.321.981-.981 1.264-2.139 1.321-3.417.058-1.279.07-1.682.07-4.947s-.012-3.668-.07-4.948c-.057-1.278-.34-2.436-1.321-3.417-.981-.981-2.139-1.264-3.417-1.321C15.668.012 15.265 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
            </svg>
            <span className="font-medium">Instagram</span>
          </a>
        </div>
      </section>

      {/* GALERÍA CON PARALLAX */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            style={{ y: yTransform }}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden">
              <motion.img
                src={project.image}
                loading="lazy"
                className="w-full max-w-sm mx-auto h-auto object-cover rounded-lg transition-transform duration-700 ease-out group-hover:scale-105"
                alt={project.title}
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <h2 style={{ fontFamily: 'OldNewspaper' }} className="text-xl md:text-2xl mt-4 text-gray-400 group-hover:text-white transition duration-500 text-center">
              {project.title}
            </h2>
          </motion.div>
        ))}
      </section>

    </main>
  );
  import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pablo Gonzalez - Portfolio</title>
        <meta name="description" content="Portfolio 1AyyPablo" />

        <meta property="og:title" content="Pablo Gonzalez Tebar - Portfolio" />
        <meta property="og:description" content="Portfolio de cover art y diseño visual" />
        <meta property="og:image" content="/foto perfil web.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://1ayypablo.vercel.app" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pablo Gonzalez Tebar - Portfolio" />
        <meta name="twitter:description" content="Portfolio de cover art y diseño visual" />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
}