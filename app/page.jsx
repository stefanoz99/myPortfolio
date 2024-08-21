"use client";

import { useEffect, useState } from "react";
import Typed from "typed.js";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { usePathname } from "next/navigation";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


const Home = () => {
  const [key, setKey] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      setKey(prevKey => prevKey + 1);
    }
  }, [pathname]);

  useEffect(() => {
    const options = {
      strings: [
        "Manolo Iñiguez.",
        "a Software Developer.",
        "a Game Developer.",
        "a Tech Enthusiast."
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed('#typed-text', options);

    // Clean up function to destroy the instance
    return () => {
      typed.destroy();
    };
  }, [key]);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* TEXTO */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg">Computing Science Engineer</span>
            <h1 className="h2 mb-8 mt-2 text-2xl xl:text-4xl">
              Hello, I&apos;m
              <br/> 
              <span key={key} className="text-accent inline-block min-h-[26px] text-2xl xl:text-4xl" id="typed-text"></span>
            </h1>

            {/* <p className="max-w-[500px] mb-9 text-white/80"> */}
            <p className="max-w-[500px] xl:max-w-[550px] text-white/80 mb-6 mx-auto xl:mx-0 leading-relaxed">
              Passionate about invention and in love with the evolution of technology. I enjoy exploring new ideas and working hard until I achieve my goals. Humanistic education in liberal arts, reader to increase knowledge and operationalize information.
            </p>

            {/* BOTON Y SOCIAL */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              
              <a href="/components/public/assets/cv/CV.pdf" download="CV.pdf">
                <Button variant="outline" size="md" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials containerStyles={"flex gap-4"} iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"} />
              </div>
            </div>
          </div>

          {/* FOTO */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      
      <Stats />
    </section>
  );
}

export default Home;
