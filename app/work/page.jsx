"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { ExpandableCardDemo } from "../../components/ExpandableCardDemo";

// Thesis data
const thesis = {
  title: "Thesis: Econometric Analysis of Car Demand",
  description: "A detailed analysis of car demand in the United States using econometric techniques.",
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

        <Tabs defaultValue="thesis" className="flex flex-col xl:flex-col gap-[60px] justify-center">

          {/* Tabs */}
          <TabsList className="flex flex-col xl:flex-row w-full max-w-[380px] xl:max-w-[1200px] mx-auto gap-6">
            <TabsTrigger value="thesis" onClick={() => handleTabClick('thesis')}>THESIS</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full mt-10">
            {/* Thesis Tab */}
            <TabsContent value="thesis" className="w-full text-center" id="thesis">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-row items-center justify-center gap-10">
                  <h3 className="text-4xl font-bold">{thesis.title}</h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto">{thesis.description}</p>
                <ExpandableCardDemo filterTag="thesis" />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Work;
