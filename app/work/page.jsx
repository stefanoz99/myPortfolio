"use client";
// voy a usar los iconos cuando pongas lo proyectos como parte de la descripcion
import { 
  FaJs,
  FaDocker,
  FaPython,
  FaJava,
  FaUnity,
} from "react-icons/fa";

import { TbBrandFlutter } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";
import { SiNextra, SiProcessingfoundation } from "react-icons/si";

//all projects data
const allProjects = {
  icon: <GrProjects />,
  title: "All Projects",
  description: "A compilation of all type of projects.",
};

//unity data
const unity = {
  icon: <FaUnity/>,
  title: 'Unity Projects',
  description: "A compilation of 2D, 3D, AR, MR and VR projects developed with Unity.",
};

// python data
const python = {
  icon: <FaPython/>,
  title: 'Python Projects',
  description: "A compilation of projects developed with Python.",
};

// processing data
const processing = {
  icon: <SiProcessingfoundation />,
  title: 'Processing Projects',
  description: "A compilation of projects developed with Processing.",
};

//flutter data
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
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { animate, motion } from 'framer-motion';
import { Item } from "@radix-ui/react-select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ExpandableCardDemo } from "../../components/ExpandableCardDemo";

const Work = () => {
  
  const handleTabClick = (value) => {
    document.getElementById(value).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3, 
          duration: 1, 
          ease: "easeIn"
        },
      }}
      className="flex items-center justify-center min-h-[80vh] py-12 xl:py-5"
    >
      <div className="container mx-auto">

        <Tabs defaultValue="allProjects" className="flex flex-col xl:flex-col gap-[60px] justify-center">

          {/* BOTONES */}
          <TabsList className="flex flex-col xl:flex-row w-full max-w-[380px] xl:max-w-[1200px] mx-auto gap-6 ">
            <TabsTrigger value="allProjects" onClick={() => handleTabClick('allProjects')}>All Projects</TabsTrigger>
            <TabsTrigger value="unity" onClick={() => handleTabClick('unity')}>Unity</TabsTrigger>
            <TabsTrigger value="python" onClick={() => handleTabClick('python')}>Python</TabsTrigger>
            <TabsTrigger value="processing" onClick={() => handleTabClick('processing')}>Processing</TabsTrigger>
            <TabsTrigger value="flutter" onClick={() => handleTabClick('flutter')}>Flutter</TabsTrigger>
            <TabsTrigger value="others" onClick={() => handleTabClick('others')}>Others</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full mt-10">

            {/* All projects */}
            <TabsContent value="allProjects" className="w-full text-center" id="allProjects">
              
              <div className="flex flex-col gap-[30px]">
                
                <div className="flex flex-row items-center justify-center gap-10">
                  <h3 className="text-4xl font-bold">{allProjects.title}</h3>
                  <p className="text-4xl">{allProjects.icon}</p>
                </div>

                <p className="max-w-[600px] text-white/60 mx-auto">{allProjects.description}</p>
                <ExpandableCardDemo filterTag="allProjects"/>

              </div>

            </TabsContent>

            {/* unity */}
            <TabsContent value="unity" className="w-full text-center" id="unity">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-row items-center justify-center gap-10">
                  <h3 className="text-4xl font-bold">{unity.title}</h3>
                  <p className="text-4xl">{unity.icon}</p>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto">{unity.description}</p>
                <ExpandableCardDemo filterTag="unity" />
              </div>
            </TabsContent>

            {/* python */}
            <TabsContent value="python" className="w-full text-center" id="python">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-row items-center justify-center gap-10">
                  <h3 className="text-4xl font-bold">{python.title}</h3>
                  <p className="text-4xl">{python.icon}</p>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto">{python.description}</p>
                <ExpandableCardDemo filterTag="python" />
              </div>
            </TabsContent>

            {/* processing */}
            <TabsContent value="processing" className="w-full text-center" id="processing">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-row items-center justify-center gap-10">
                  <h3 className="text-4xl font-bold">{processing.title}</h3>
                  <p className="text-4xl">{processing.icon}</p>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto">{processing.description}</p>
                <ExpandableCardDemo filterTag="processing" />
              </div>
            </TabsContent>

            {/* flutter */}
            <TabsContent value="flutter" className="w-full text-center" id="flutter">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-row items-center justify-center gap-10">
                  <h3 className="text-4xl font-bold">{flutter.title}</h3>
                  <p className="text-4xl">{flutter.icon}</p>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto">{flutter.description}</p>
                <ExpandableCardDemo filterTag="flutter" />
              </div>
            </TabsContent>

            {/* others */}
            <TabsContent value="others" className="w-full text-center" id="others">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-row items-center justify-center gap-10">
                  <h3 className="text-4xl font-bold">{others.title}</h3>
                  <p className="text-4xl">{others.icon}</p>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto">{others.description}</p>
                <ExpandableCardDemo filterTag="others" />
              </div>
            </TabsContent>
            
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Work;
