"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
        {/* Animacion */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
          
        )}
      </AnimatePresence>

        {/* Animacion */}
      <AnimatePresence>
        {active && typeof active === "object" ? (

          <div className="fixed inset-0 grid place-items-center z-[100]">
            
            {/* //X cerrar tarjeta */}
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >

                <CloseIcon />

            </motion.button>

          {/* BG Tarjeta Expandida */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full lg:h-fit lg:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                    {/* Tarjeta Expandida */}
                <div className="flex justify-between items-center p-4">
                  
                  {/* Titulo y Descripcion */}
                  <div className="text-start px-4">
                    <motion.h3 
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>

                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* Boton */}
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-accent text-white hover:bg-primary hover:text-white"
                  > 
                    {active.ctaText}
                  </motion.a>

                </div>

                {/* Texto Historia */}

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-md h-60 pb-10 flex flex-col items-center gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    style={{
                      maskImage: "linear-gradient(to bottom, black 80%, transparent)",
                      WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent)"
                    }}
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>


              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Tarjeta por fuera */}
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-center items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex flex-col items-between">
            <motion.div layoutId={`image-${card.title}-${id}`}>
                {/* Tamanio contenedores */}
                <Image
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-60 w-60 md:h-60 md:w-60 lg:h-40 lg:w-40 xl:h-40 xl:w-40 rounded-lg object-cover object-top"
                />
                </motion.div>

                {/* Titulo */}
                <div className="text-center md:text-center mt-4">
                  <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-medium font-bold text-neutral-500 dark:text-neutral-500"
                  >
                      {card.title}
                  </motion.h3>
                  <motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className="text-neutral-400 dark:text-neutral-500"
                  >
                      {card.description}
                  </motion.p>
                </div>
                <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-accent hover:bg-primary hover:text-white text-black mt-4"
                >
                {card.ctaText}
                </motion.button>
            </div>
            </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Proyecto U",
    title: "DAI",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "More",
    ctaLink: "https://github.com/manosebas",
    tag: "unity",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: "Proyecto Py",
    title: "Virtual Platform",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "More",
    ctaLink: "https://github.com/manosebas",
    tag: "python",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },
  {
    description: "Proyecto Pr",
    title: "For Whom The Bell",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "More",
    ctaLink: "https://ui.aceternity.com/templates",
    tag: "processing",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Proyecto Fl",
    title: "Stairway To Heaven",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "More",
    ctaLink: "https://ui.aceternity.com/templates",
    tag: "flutter",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br /> Their songs often reflect a blend of blues, hard
          rock, and folk music, capturing the essence of the 1970s rock era.
          With a career spanning over a decade, Led Zeppelin has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United Kingdom and abroad.
        </p>
      );
    },
  },
  {
    description: "Proyecto Other",
    title: "Toh Phir Aao",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "More",
    ctaLink: "https://ui.aceternity.com/templates",
    tag: "others",
    content: () => {
      return (
        <p>
          "Aawarapan", a Bollywood movie starring Emraan Hashmi, is renowned for
          its intense storyline and powerful performances. Directed by Mohit
          Suri, the film has become a significant work in the Indian film
          industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          "Aawarapan" has garnered a massive fan following both in India and
          abroad, solidifying Emraan Hashmi's status as a versatile actor.
        </p>
      );
    },
  },
];
