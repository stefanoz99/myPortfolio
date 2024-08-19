"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo({ filterTag }) {
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

   // Filtrar las tarjetas según el tag
   const filteredCards = filterTag === "allProjects"
   ? Object.values(projects).flat()
   : Object.values(projects).flat().filter(card => card.tag === filterTag);


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

            {/* Tarjeta Expandida */}
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
                    href={active.btnLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-accent text-white hover:bg-primary hover:text-white"
                  > 
                    {active.btnGitText}
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
        {filteredCards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-center items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex flex-col items-center">

              <motion.div layoutId={`image-${card.title}-${id}`}>
                  {/* Imagen */}
                <Image
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-60 w-60 md:h-60 md:w-60 lg:h-40 lg:w-40 xl:h-40 xl:w-40 rounded-lg object-cover object-top"
                />
              </motion.div>

                  {/* Titulo y Descripcion */}
              <div className="text-center mt-4">
                <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium font-bold text-neutral-400 dark:text-neutral-400"
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-600"
                >
                  {card.description}
                </motion.p>

              </div>

              {/* Boton */}
              <motion.button 
              layoutId={`button-${card.title}-${id}`} 
              className="w-full px-4 py-2 text-sm rounded-full font-bold bg-accent hover:bg-primary hover:text-white text-black mt-4">
                {card.btnText}
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


const projects = {

  unityProjects: [  
  ],

  pythonProjects: [
    {
      description: "Gesture-Based Control",
      title: "HandTrack Clicker",
      src: "/assets/projects/images/HandTrack.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/HandTracker#readme",
      tag: "python",
      content: () => (
        <p>
          HandTrack Clicker leverages computer vision and hand-tracking technologies to create an intuitive interface for controlling the computer through hand gestures. <br /> <br /> 

          Using OpenCV and MediaPipe, this project captures real-time video from the webcam to detect and track hand movements. <br /> <br /> 

          The system calculates the distance between the user's thumb and index finger to simulate mouse clicks when the fingers are pinched together. <br /> <br /> 
          
          The software also maps hand movements to the screen, allowing for precise cursor control. <br /> <br /> 
          
          This implementation showcases advanced hand gesture recognition and interaction capabilities, offering a novel approach to user interface design.
        </p>
      ),
    },
    {
      description: "Giveaway Winner",
      title: "Instagram Giveaway Automation",
      src: "/assets/projects/images/GiveawayGenius.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/GiveawayGenius#readme",
      tag: "python",
      content: () => (
        <p>
          This project automates the process of participating in Instagram giveaways by utilizing Selenium for browser automation. <br /> <br />
          
          It logs into Instagram, navigates to specified posts, and posts random comments from a user-defined list. <br /> <br />
          
          Designed to optimize giveaway entries, the bot includes functionalities for interval-based commenting and manual comment management through a user-friendly GUI. <br /> <br />
          
          It integrates error handling and logging mechanisms to ensure smooth operation and user accountability.
        </p>
      ),
    },
  ],

  // Puedo agregar otro boton para que me lleve a la pagina de proyectos de processing sabes de cual te hablo manosebas
  processingProjects: [
    {
      description: "Text into particles",
      title: "Vector Particle Text Display",
      src: "/assets/projects/images/ClockVectorParticle.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/ParticlesVectors/tree/master/Clock#readme",
      tag: "processing",
      content: () => (
        <p>
          This project uses particles to display the current time and date. <br /> <br /> 
          Particles form the digits of a clock, with an engaging visual effect of particles flying around the screen. <br /> <br /> 
          
          Clicking changes the display to show the current time, date, or other text. <br /> <br /> 
          
          This project offers a visually captivating way to present real-time information with interesting particle effects and is easily adaptable for various types of data and graphical styles.
        </p>
      ),
    },
    {
      description: "Images into BW particles",
      title: "BW Vector Particle Image Display",
      src: "/assets/projects/images/BWVectorParticle.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/ParticlesVectors/tree/master/BlackAndWhite#readme",
      tag: "processing",
      content: () => (
        <p>
          This project transforms a user-uploaded image into a visual representation using black-and-white particles. <br /> <br /> 

          Each pixel is represented by a particle of a single color, preserving the image's contrast and shading. <br /> <br /> 
          
          Clicking allows the user to switch between different graphics, offering a streamlined approach with captivating particle effects. <br /> <br /> 
          
          The project is easily adaptable for various types of data and graphical styles.
        </p>
      ),
    },
    {
      description: "Images into particles",
      title: "Vector Particle Image Display",
      src: "/assets/projects/images/ColorVectorParticle.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/ParticlesVectors/tree/master/Color#readme",
      tag: "processing",
      content: () => (
        <p>
          This project transforms a user-uploaded image into a visual representation using colored particles. <br /> <br /> 
          
          Each pixel of the image is mapped to a particle, recreating the image with a unique particle effect. <br /> <br /> 
          
          Clicking changes the display to various images, with particles dynamically adjusting to the new graphic. <br /> <br /> 
          
          The project is highly customizable and expandable for diverse visual applications.
        </p>
      ),
    },
    {
      description: "Meteorite Shooter Game",
      title: "Galaxy Hunt",
      src: "/assets/projects/images/GalaxyHunt.png",
      btnText: "More",
      // btnGitText: "GitHub",
      // btnLink: "https://github.com/manosebas/GalaxyHuntGame/tree/master#readme",
      btnGitText: "Play",
      btnLink: "https://openprocessing.org/sketch/2328801",
      tag: "processing",
      content: () => (
        <p>
          Galaxy Hunt is an engaging arcade-style game developed using Processing, designed to challenge players reflexes and strategic thinking. <br /> <br /> 
          
          Players must shoot falling meteorites before they hit the ground, with each missed meteorite leading to a loss of lives. <br /> <br /> 
          
          The game dynamically increases in difficulty and introduces new levels over time, simulating gravity and incorporating fundamental programming concepts for realistic gameplay. <br /> <br /> 
          
          The intuitive design and progressive difficulty curve ensure a captivating experience for players while demonstrating core principles of game development and physics simulation.
        </p>
      ),
    },
  ],

  flutterProjects: [
    {
      description: "Proyecto Fl",
      title: "Stairway To Heaven",
      src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://ui.aceternity.com/templates",
      tag: "flutter",
      content: () => (
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
      ),
    },
  ],

  otherProjects: [
    {
      description: "This Portfolio",
      title: "Professional Portfolio Website",
      src: "/assets/projects/images/Portfolio.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/myPortfolio#readme",
      tag: "others",
      content: () => (
        <p>
          This project involves the development and design of a professional portfolio website using JSX, CSS, TypeScript (TSX), Next.js, Tailwind CSS, and Framer Motion. <br /> <br />
          
          The website aims to showcase my professional profile, including my education, skills, experience, and projects. <br /> <br />
          
          It is designed as a single-purpose site to present myself effectively to potential clients or employers, highlighting my capabilities and accomplishments in a visually engaging manner.
        </p>
      ),
    },
  ],
};
