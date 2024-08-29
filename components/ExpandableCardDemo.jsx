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
  : Object.values(projects).flat().filter(card => card.tags.includes(filterTag));


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

                {/* Texto ↓↑*/}
                <div className="flex bg-accent/20 text-start text-sm text-black/80 px-10 justify-between p-1">
                  <p>Scroll Down ↓</p>
                  <p>Even More Info ↑</p>
                </div>

                {/* Texto Explicacion */}
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

  softwareProjects: [
    {
      description: "Decentralized e-Signature System",
      title: "Decentralized FirmaEC",
      src: "/assets/projects/images/FirmaEC.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/FirmaEcDescentralizada#readme",
      tags: ["software","featured"],
      content: () => (
        <p> 
          This project involves the development and implementation of a decentralized e-signature system adapted to a public institution in Ecuador, with three distinct yet interrelated components. <br /> <br />
          
          The system is designed to ensure the secure signing and verification of documents and certificates, using the e-signature standards mandated by the Ecuadorian government. <br /> <br />
          
          The project is divided into three key parts:<br /> <br />

          Architecture and Foundation: Setup and configure the system following Minka manual guidelines, including WildFly server, Docker with PostgreSQL, custom APIs, and secure MINTEL communication. This creates a backend for signing, validating, and verifying documents.<br /> <br />

          Transversal Web Page: Develop a web app to use the backend for document signing, e-signature validation, and certificate verification with MINTEL, focusing on usability and expanded functionalities.<br /> <br />

          DLL Implementation: Integrate the e-signature system into institutional applications using a C# DLL, ensuring secure signing and verification of all paperwork with MINTEL.<br /> <br />

          Please refer to GitHub for more information on everything.
        </p>
      ),
    },
    {
      description: "Gesture-Based Control",
      title: "HandTrack Clicker",
      src: "/assets/projects/images/HandTrack.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/HandTracker#readme",
      tags: ["software","featured"],
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
      description: "AI Voice Assistant",
      title: "Voice Assistant",
      src: "/assets/projects/images/VoiceAssistant.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/VoiceAssistant#readme",
      tags: ["software"],
      content: () => (
        <p>
          Voice Assistant is a Python-based AI-driven conversational assistant designed to emulate natural human interaction. <br /> <br />
          
          Utilizing OpenAI's Whisper V3 for real-time speech recognition, GPT-3.5 Turbo for intelligent response generation, and OpenAI's Text-to-Speech (TTS) for verbal output, this script enables seamless conversations with the AI. <br /> <br />
          
          The assistant is equipped with hotword detection, allowing it to actively listen and respond to specific trigger words. <br /> <br />
          
          The project demonstrates advanced integration of speech-to-text, natural language processing, and TTS technologies, making it a comprehensive solution for creating intelligent voice-driven applications.
        </p>
      ),
    },
    {
      description: "Giveaway Winner",
      title: "Instagram Giveaway Automation",
      src: "/assets/projects/images/GiveawayGenius2.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/GiveawayGenius#readme",
      tags: ["python"],
      content: () => (
        <p>
          This project automates the process of participating in Instagram giveaways by utilizing Selenium for browser automation. <br /> <br />
          
          It logs into Instagram, navigates to specified posts, and posts random comments from a user-defined list. <br /> <br />
          
          Designed to optimize giveaway entries, the bot includes functionalities for interval-based commenting and manual comment management through a user-friendly GUI. <br /> <br />
          
          It integrates error handling and logging mechanisms to ensure smooth operation and user accountability.
        </p>
      ),
    },
    {
      description: "Tell it what to know",
      title: "Customizable AI Assistant",
      src: "/assets/projects/images/CustomChatbot.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/CustomChatbot#readme",
      tags: ["software"],
      content: () => (
        <p>
          This project is a highly customizable AI assistant that leverages OpenAI's advanced technologies, enabling personalized interactions for virtually any topic. <br /> <br />
          
          The assistant uses OpenAI’s APIs, including Whisper for real-time speech recognition, GPT-3.5 Turbo for context-aware response generation, and TTS (Text-to-Speech) for verbalizing responses. <br /> <br />
          
          It allows users to ask questions via text or voice, with responses tailored to their specific needs. <br /> <br />
          
          By integrating with OpenAI's assistant framework, this project offers a flexible platform that can be adapted to serve as a personal assistant across various domains. <br /> <br />
          
          The assistant can be configured with custom hotwords, response styles, and specialized knowledge, making it an ideal tool for personalized user experiences. <br /> <br />
          
          This project also complements the Voice Assistant project, allowing for seamless integration of voice-based interactions.
        </p>
      ),
    },
    {
      description: "Sign Language Recognition with CNN and ViT",
      title: "Sign Language AI",
      src: "/assets/projects/images/SignRecognition.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/SignLanguageRecognition#readme",
      tags: ["software"],
      content: () => (
        <p>
          This project focuses on comparing the performance of Convolutional Neural Networks (CNN) and Vision Transformers (ViT) in the classification of sign language images. <br /> <br />
          
          The project utilizes datasets with tabular images representing different sign language gestures, each labeled accordingly. <br /> <br />
          
          CNNs extract features through convolutional layers, while ViTs divide images into patches and use attention mechanisms for classification. <br /> <br />
          
          Additionally, the project includes a live camera feature that allows users to perform sign language gestures in real-time, detecting and identifying the letters being shown. <br /> <br />
          
          This combination of deep learning models and real-time detection showcases a robust approach to sign language recognition.
        </p>
      ),
    },
    {
      description: "Multi-Layered Database Application",
      title: "Database Management App",
      src: "/assets/projects/images/BookDB.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/BookDB#readme",
      tags: ["software"],
      content: () => (
        <p>
          This project involves the implementation of a multi-layered application that connects to a MySQL database, designed to manage book records.<br /> <br />
          
          The application features a graphical user interface (GUI) developed using QtDesigner and Python, enabling users to perform CRUD (Create, Read, Update, Delete) operations on the database.<br /> <br />
          
          The project demonstrates the integration of multiple windows for different operations, such as selecting, inserting, updating, and deleting records.<br /> <br />
          
          The application is highly expandable, with the potential to manage more complex data structures and interactions.
        </p>
      ),
    },
    {
      description: "OOP-Based Management System",
      title: "Student Management System",
      src: "/assets/projects/images/Banner.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/Banner#readme",
      tags: ["software"],
      content: () => (
        <p>
          This project involves the development of a comprehensive Student Management System using Object-Oriented Programming (OOP) principles in C++. <br /> <br />
          
          The application is designed based on a UML class model that manages students, professors, and courses, implementing key concepts such as inheritance and polymorphism. <br /> <br />
          
          The system features a text-based interface that allows users to perform CRUD (Create, Read, Update, Delete) operations on various entities, including students, professors, and courses. <br /> <br />
          
          The program is structured to support multiple user roles with different access levels, ensuring that all functionalities are accessible depending on the user's credentials.<br /> <br />

          The application begins with a main menu offering options to manage the system, access user information, or exit. <br /> <br />
          
          The management menu allows detailed operations on users, students, professors, and courses, including creating, editing, and deleting records, as well as associating students and professors with courses. <br /> <br />
          
          The project demonstrates a strong application of OOP, with each class and method carefully designed to ensure modularity, reusability, and scalability.          
        </p>
      ),
    },
    {
      description: " COVID-19 Diagnostic and Management System",
      title: "Diagnostic and Management System",
      src: "/assets/projects/images/HospitalManager.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/HospitalManagerC19#readme",
      tags: ["software"],
      content: () => (
        <p>
          This project involves the development of a COVID-19 diagnostic and management system utilizing the Model-View-Controller (MVC) architecture. <br /> <br /> 
          
          The system is designed to manage and register doctors and patients within a hospital setting, focusing on the current real-world context of the COVID-19 pandemic. <br /> <br /> 
          
          The application allows for the input and management of patient data, including a series of diagnostic questions related to COVID-19 symptoms, which are answered on a scale of 1 to 10. <br /> <br /> 
          
          These questions assess symptoms like throat pain, fatigue, and breathing difficulty, and the system calculates an average score to estimate the likelihood of infection.<br /> <br /> 

          The project also features robust data management capabilities, with patients stored as objects within the system, allowing for easy retrieval and manipulation of data. <br /> <br /> 
          
          The system's backend can utilize JSON or CSV for data storage, ensuring flexibility and ease of integration. The code is organized according to MVC principles, ensuring a clean separation between the user interface, the underlying data models, and the control logic. <br /> <br /> 
          
          The project includes a complete set of functionalities for managing doctor and patient records, calculating potential infection risks, and displaying patient health statuses.<br /> <br /> 

          The source code, along with the UML diagrams and other project documentation, is available on GitHub, demonstrating the full functionality of the system, including patient and doctor registration, data management, and diagnostic evaluation.    
        </p>
      ),
    },
  ],

  gamesProjects: [
    {
      description: "Portal 2 Level Design",
      title: "Level Design Document",
      src: "/assets/projects/images/LevelDesign.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/Portal2LevelDesign#readme",
      tags: ["games"],
      content: () => (
        <p>
          This project showcases a custom level design for the game Portal 2, demonstrating creativity and technical skills in game and level design. <br /> <br />
          
          The document details a well-structured level that requires players to solve puzzles using portals, manage laser emitters, and navigate through challenging environments. <br /> <br />
          
          The design emphasizes strategic thinking and problem-solving, highlighting my ability to create engaging and immersive gameplay experiences. <br /> <br />
          
          This project reflects my capacity for creative level design and my understanding of game mechanics, making it a valuable addition to my portfolio.
          
        </p>
      ),
    },
    {
      description: "Space Invaders Update Design",
      title: "Update Design Document",
      src: "/assets/projects/images/UpdateDesign.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/UDD_SpaceInvaders#readme",
      tags: ["games"],
      content: () => (
        <p>
          This project outlines a comprehensive update for the classic 1978 game, Space Invaders, aimed at revitalizing its gameplay for modern audiences while preserving its iconic essence. <br /> <br />
          
          The document proposes enhancements such as improved graphics, advanced animations, and additional gameplay modes, including online multiplayer, cooperative play, speedrun, and tryhard modes. <br /> <br />
          
          New mechanics like different firing options and secret power-ups add strategic depth and excitement. <br /> <br />
          
          The update maintains the original challenge and flow of the game, with an emphasis on modernizing the aesthetics and introducing new ways to engage players, making it suitable for contemporary gaming platforms.
        </p>
      ),
    },
    {
      description: "Defeated By AI (DAI) GDD",
      title: "Game Design Document",
      src: "/assets/projects/images/GameDesign.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/GDD_DAI#readme",
      tags: ["games", "featured"],
      content: () => (
        <p>
          This Game Design Document (GDD) provides a comprehensive blueprint for the creation of a fully immersive game titled "Defeated By Artificial Intelligence (DAI)." <br /> <br />
          
          The document includes detailed sections on game analysis, storyline, character development, gameplay mechanics, level design, and user interface aesthetics. <br /> <br />
          
          The game is set in a post-apocalyptic world where players must navigate through intense challenges, solve complex puzzles, and engage in strategic combat to survive and uncover the truth about their existence. <br /> <br />
          
          The GDD serves as a complete guide for developers to bring this innovative and thrilling game to life, showcasing a blend of strategy, action, and adventure.
        </p>
      ),
    },
    {
      description: "Meteorite Shooter Game",
      title: "Galaxy Hunt",
      src: "/assets/projects/images/GalaxyHunt.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/GalaxyHuntGame/tree/master#readme",
      tags: ["games"],
      content: () => (
        <p>
          Galaxy Hunt is an engaging arcade-style game developed using Processing, designed to challenge players reflexes and strategic thinking. <br /> <br /> 
          
          Players must shoot falling meteorites before they hit the ground, with each missed meteorite leading to a loss of lives. <br /> <br /> 
          
          The game dynamically increases in difficulty and introduces new levels over time, simulating gravity and incorporating fundamental programming concepts for realistic gameplay. <br /> <br /> 
          
          The intuitive design and progressive difficulty curve ensure a captivating experience for players while demonstrating core principles of game development and physics simulation.
        </p>
      ),
    },
    {
      description: "Classic Pong Recreation",
      title: "Pong Game",
      src: "/assets/projects/images/Pong.png",
      btnText: "More",
      btnGitText: "Github",
      btnLink: "https://github.com/manosebas/PongGame#readme",
      tags: ["games"],
      content: () => (
        <p>
          This project is a simple recreation of the classic Pong game, developed using Processing. <br /> <br />
          
          It features basic paddle and ball mechanics, with two-player controls using the keyboard. <br /> <br />
          
          Players can control their paddles to bounce the ball back and forth, with the objective of scoring points by getting the ball past the opponent’s paddle. <br /> <br />
          
          The game includes score tracking, collision detection, and basic physics for realistic ball movement. <br /> <br /> 
          
          This project serves as an example of how to implement fundamental game mechanics in a straightforward and effective manner.
        </p>
      ),
    },
    {
      description: "Classic Snake Recreation",
      title: "Snake Game",
      src: "/assets/projects/images/Snake.png",
      btnText: "More",
      btnGitText: "Github",
      btnLink: "https://github.com/manosebas/SnakeGame#readme",
      tags: ["games"],
      content: () => (
        <p>
           This project is a recreation of the classic Snake game, developed using Processing. <br /> <br />
           
           Players control a snake that moves around the screen, growing longer each time it eats food. <br /> <br />
           
           The objective is to navigate the snake without crashing into the walls or its own body. <br /> <br />
           
           The game features basic mechanics, including movement, collision detection, and scoring. <br /> <br />
           
           It also includes a start screen and a game over screen with the final score. <br /> <br />
           
           This project demonstrates the implementation of classic game logic and design in a simple, yet engaging way.
        </p>
      ),
    },
  ],

  otherProjects: [
    {
      description: "Expandable Virtual Reality Platform",
      title: "Multi-User VR Educational Platform",
      src: "/assets/projects/images/ProyectoIntegrador.png", 
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/ProyectoIntegrador#readme",
      tags: ["others", "featured"],
      content: () => (
        <p>
          This project involves the implementation of a virtual reality (VR) educational platform for multi-user environments, with a focus on its extensive expandability and adaptability to any subject, number of users, and scenarios. It is currently being used at Universidad San Francisco de Quito as an advanced learning methodology, providing immersive and collaborative experiences. <br /> <br />

          The platform facilitates interaction and learning in a controlled environment and is highly flexible and customizable. It can be applied across a wide range of educational disciplines, from sciences to humanities, with the ability to create and manage various scenes and situations, allowing multiple users to interact simultaneously. <br /> <br />

          A notable application of this platform was in the field of psychology, where I created a virtual environment for students to practice with virtual patients. This practice enhanced students' communication and diagnostic skills, offering a safe space for experimentation and learning without risks. The integration with OpenAI's AI also allows for personalized interaction based on educational needs, offering a dynamic and tailored learning experience for each user. <br /> <br />

          The platform marks a significant advancement in virtual education, setting a model for future research and development in the field of education and technology, demonstrating how VR can transform teaching and learning in a global context.
        </p>
      ),
    },
    {
      description: "This Portfolio",
      title: "Professional Portfolio Website",
      src: "/assets/projects/images/Portfolio.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/myPortfolio#readme",
      tags: ["others"],
      content: () => (
        <p>
          This project involves the development and design of a professional portfolio website using JSX, CSS, TypeScript (TSX), Next.js, Tailwind CSS, and Framer Motion. <br /> <br />
          
          The website aims to showcase my professional profile, including my education, skills, experience, and projects. <br /> <br />
          
          It is designed as a single-purpose site to present myself effectively to potential clients or employers, highlighting my capabilities and accomplishments in a visually engaging manner.
        </p>
      ),
    },
    {
      description: "Advanced Security System",
      title: "Max Security Door System",
      src: "/assets/projects/images/SecurityDoor.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/MaxSecurityDoor#readme",
      tags: ["others"],
      content: () => (
        <p>
          The Maximum Security Door System is an advanced electronic project designed to enhance the security of prison facilities by incorporating multiple sensors and a servo-controlled locking mechanism. <br /> <br />
          
          The system utilizes an Arduino Uno to manage various components, including proximity sensors, a keypad, an LCD display, a servo motor and others. <br /> <br />
          
          The door can only be unlocked when specific conditions are met: no objects should be too close on the opposite side, a person must be physically present at the keypad and a digital password must be entered. <br /> <br />
          
          An alarm and some LED lights are triggered if these conditions are not satisfied, providing an additional layer of security. <br /> <br />
          
          This project demonstrates understanding of electronics, programming, and real-world application to address critical security challenges.
        </p>
      ),
    },
    {
      description: "To-Do App",
      title: "To-Do List App",
      src: "/assets/projects/images/ToDoApp.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/ToDoApp#readme",
      tags: ["others"],
      content: () => (
        <p>
          This project is a to-do list application developed using Flutter and Dart, designed to be executable on both iOS and Android platforms. <br /> <br />
          
          Despite its simplicity, the app is built on a robust programming foundation, providing a comprehensive base for developing more complex applications. <br /> <br />
          
          It effectively demonstrates essential programming concepts and practices, making it a valuable resource for understanding core app development principles.
        </p>
      ),
    },
    {
      description: "Text into particles",
      title: "Vector Particle Text Display",
      src: "/assets/projects/images/ClockVectorParticle.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/ParticlesVectors/tree/master/Clock#readme",
      tags: ["others"],
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
      tags: ["others"],
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
      tags: ["others"],
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
      description: "Binary Logic and Computer Understanding",
      title: "Binary Logic Exploration",
      src: "/assets/projects/images/BinaryImgTxt.png",
      btnText: "More",
      btnGitText: "GitHub",
      btnLink: "https://github.com/manosebas/BinaryImgText#readme",
      tags: ["others"],
      content: () => (
        <p>
          This project combines investigative learning with hands-on code development to explore and demonstrate how computers understand images and text through binary systems and logic gates. <br /> <br /> 
          
          Through in-depth research, the project examines how binary numbers and logic gates like AND, OR, and XOR are fundamental to processing and interpreting data within a computer. <br /> <br /> 

          The project features the development of two Java programs that practically demonstrate these concepts: one program converts text into binary code, and the other processes images by breaking them down into pixels and converting each color into binary using its RGB values. <br /> <br /> 
          
          This approach provides a tangible understanding of how computers interpret and store visual and textual information. <br /> <br /> 

          The project is expansive, offering insights into the layers of abstraction that make up computer operations. <br /> <br /> 
          
          The code, along with examples of the conversion process, is available on GitHub to illustrate and verify the theoretical concepts presented.
        </p>
      ),
    },
  ],

 
};
