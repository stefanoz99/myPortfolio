"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ExpandableCardDemo } from "../../components/ExpandableCardDemo";

// Categories and Data
const categories = [
  {
    title: "Analytical Insights",
    description: "Showcasing advanced data analysis work.",
    filterTag: "bigdata",
  },
  {
    title: "Visual Storytelling",
    description: "Presenting work in data visualization using Power BI and Kepler.gl.",
    filterTag: "visualization",
  },
  {
    title: "Economic Research",
    description: "In-depth research in economics including thesis works.",
    filterTag: "economics",
  },
];

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
          ease: "easeIn",
        },
      }}
      className="flex items-center justify-center min-h-[80vh] py-12 xl:py-5"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="bigdata" className="flex flex-col xl:flex-col gap-[60px] justify-center">
          {/* Tabs */}
          <TabsList className="flex flex-col xl:flex-row w-full max-w-[380px] xl:max-w-[1200px] mx-auto gap-6">
            {categories.map((category) => (
              <TabsTrigger
                key={category.filterTag}
                value={category.filterTag}
                onClick={() => handleTabClick(category.filterTag)}
              >
                {category.title.toUpperCase()}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full mt-10">
            {categories.map((category) => (
              <TabsContent
                key={category.filterTag}
                value={category.filterTag}
                className="w-full text-center"
                id={category.filterTag}
              >
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-row items-center justify-center gap-10">
                    <h3 className="text-4xl font-bold">{category.title}</h3>
                  </div>
                  <p className="max-w-[600px] text-white/60 mx-auto">{category.description}</p>
                  <ExpandableCardDemo filterTag={category.filterTag} />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Work;
