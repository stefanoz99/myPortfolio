"use client";

import { 
  GrProjects
} from "react-icons/gr";

import { 
  SiNextra
} from "react-icons/si";

import { 
  CgGames 
} from "react-icons/cg";

import { 
  LiaLaptopCodeSolid
} from "react-icons/lia";

import { 
  BsBookmarkStar 
} from "react-icons/bs";


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { animate, motion } from 'framer-motion';
import { Item } from "@radix-ui/react-select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ExpandableCardDemo } from "../../components/ExpandableCardDemo";


//all projects data
const allProjects = {
  icon: <GrProjects />,
  title: "All Projects",
  description: "An overview of all available projects.",
};

// software data
const featured = {
  icon: <BsBookmarkStar />,
  title: 'Featured Projects',
  description: "A collection of projects selected for their relevance or quality.",
};

// software data
const software = {
  icon: <LiaLaptopCodeSolid/>,
  title: 'Software Projects',
  description: "A collection of software projects developed with various tools and languages.",
};

//games data
const games = {
  icon: <CgGames/>,
  title: 'Games Related Projects',
  description: "A collection of projects related to games, including 2D and 3D games, AR, MR, VR experiences, and documentation such as level design, game design documents, upgrade proposals adn more.",
};

//others data
const others = {
  icon: <SiNextra />,
  title: 'Other Projects',
  description: "A compilation of other projects developed with all kind of languages and tools",
};



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
            <TabsTrigger value="allProjects" onClick={() => handleTabClick('allProjects')}>ALL PROJECTS</TabsTrigger>
            
            <TabsTrigger value="featured" onClick={() => handleTabClick('featured')}>FEATURED</TabsTrigger>

            <TabsTrigger value="software" onClick={() => handleTabClick('software')}>SOFTWARE</TabsTrigger>

            <TabsTrigger value="games" onClick={() => handleTabClick('games')}>GAMES-RELATED</TabsTrigger>

            <TabsTrigger value="others" onClick={() => handleTabClick('others')}>OTHERS</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full mt-10">

            {/* allProjects */}
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

            {/* featured */}
            <TabsContent value="featured" className="w-full text-center" id="featured">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-row items-center justify-center gap-10">
                  <h3 className="text-4xl font-bold">{featured.title}</h3>
                  <p className="text-4xl">{featured.icon}</p>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto">{featured.description}</p>
                <ExpandableCardDemo filterTag="featured" />
              </div>
            </TabsContent>

            {/* software */}
            <TabsContent value="software" className="w-full text-center" id="software">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-row items-center justify-center gap-10">
                  <h3 className="text-4xl font-bold">{software.title}</h3>
                  <p className="text-4xl">{software.icon}</p>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto">{software.description}</p>
                <ExpandableCardDemo filterTag="software" />
              </div>
            </TabsContent>

            {/* games */}
            <TabsContent value="games" className="w-full text-center" id="games">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-row items-center justify-center gap-10">
                  <h3 className="text-4xl font-bold">{games.title}</h3>
                  <p className="text-4xl">{games.icon}</p>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto">{games.description}</p>
                <ExpandableCardDemo filterTag="games" />
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
