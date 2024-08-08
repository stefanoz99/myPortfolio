"use client";

import { 
  FaJs,
  FaDocker,
  FaPython,
  FaJava,
  FaUnity,
} from "react-icons/fa";

import { TbBrandFlutter } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";
import { SiNextra } from "react-icons/si";


//about me data
const allProjects = {
  icon: <GrProjects />,
  title: "All Projects",
  description: "A compilation of all type of projects.",
};

//experience data
const unity = {
  icon: <FaUnity/>,
  title: 'Unity Projects',
  description: "A compilation of 2D, 3D, AR, MR and VR developed with Unity.",
};

//education data
const flutter = {
  icon: <TbBrandFlutter />,
  title: 'Flutter Projects',
  description: "A compilation of mobile applications developed with Flutter.",
};

//others data
const others = {
  icon: <SiNextra />,
  title: 'Other Projects',
  description: "A compilation of other projects developed with all kind of languages and tools",
  othersList: [
    {
      icon: <FaPython/>,
      name: "Python",
    }
  ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {ScrollArea} from '@/components/ui/scroll-area'
import {animate, motion} from 'framer-motion'
import { Item } from "@radix-ui/react-select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ExpandableCardDemo } from "../../components/ExpandableCardDemo";

const Work = () => {
  return (
  <motion.div 
    initial = {{ opacity: 0}}
    animate = {{
      opacity: 1,
      transition: {
        delay:0.3, 
        duration: 1, 
        ease: "easeIn"
      },
    }}

    className="flex flex-col items-center justify-center py-12 xl:py-5">

      <Tabs defaultValue="allProjects" className="flex flex-col gap-[60px]">
        
        <TabsList className="flex flex-col xl:flex-row xl:items-center xl:justify-center w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="allProjects">All Projects</TabsTrigger>
          <TabsTrigger value="unity">Unity</TabsTrigger>
          <TabsTrigger value="flutter">Flutter</TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
        </TabsList>

        {/* content */}

        <div className="min-h-[70vh] w-full">
          {/* Editar la clase ExpandableCardDemo OJITOOOOOOOOOOOOOOOO */}
          {/* All projects */}
          <TabsContent value="allProjects" className ="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">

              {/* Titulo y Logo */}
              <div className="flex flex-row items-center xl:justify-start justify-center gap-10">
                <h3 className="text-4xl font-bold">{allProjects.title}</h3>
                <p className="text-4xl">{allProjects.icon}</p>
              </div>

              {/* Descripcion */}
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{allProjects.description}</p>

              {/* Proyectos */}
              {/* <ExpandableCardDemo/> */}

            </div>
          </TabsContent>

          {/* unity */}
          <TabsContent value="unity" className ="w-full h-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">

              {/* Titulo y Logo */}
              <div className="flex flex-row items-center xl:justify-start justify-center gap-10">
                <h3 className="text-4xl font-bold">{unity.title}</h3>
                <p className="text-4xl">{unity.icon}</p>
              </div>

              {/* Descripcion */}
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{unity.description}</p>

              {/* Proyectos */}
              {/* <ExpandableCardDemo/> */}

            </div>
          </TabsContent>
          
          {/* flutter */}
          <TabsContent value="flutter" className ="w-full h-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">

              {/* Titulo y Logo */}
              <div className="flex flex-row items-center xl:justify-start justify-center gap-10">
                <h3 className="text-4xl font-bold">{flutter.title}</h3>
                <p className="text-4xl">{flutter.icon}</p>
              </div>

              {/* Descripcion */}
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{flutter.description}</p>

              {/* Proyectos */}
              {/* <ExpandableCardDemo/> */}

            </div>
          </TabsContent>
          
          {/* others */}
          <TabsContent value="others" className ="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              
              {/* Titulo y Logo */}
              <div className="flex flex-row items-center xl:justify-start justify-center gap-10">
                <h3 className="text-4xl font-bold">{others.title}</h3>
                <p className="text-4xl">{others.icon}</p>
              </div>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{others.description}</p>

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {others.othersList.map((others, index) => {

                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>

                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {others.icon}
                            </div>
                          </TooltipTrigger>

                          <TooltipContent className="bg-white text-black rounded-lg p-2 w-auto h-auto justify-center items-center">
                          {/* <TooltipContent className="font-bold"> */}
                            <p className="capitalize">{others.name}</p>
                          </TooltipContent>

                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </div>

          </TabsContent>

        </div>

      </Tabs>

    </motion.div>
  );
}

export default Work