"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ExpandableCardDemo } from "../../components/ExpandableCardDemo";

// Thesis data
const thesis = [
  {
    title: "Supply Demand Analysis in Automobile Markets",
    description: "Modeling U.S. Automotive Demand: A Multi-Stage Analysis of Price Sensitivity, and Brand Competition",
    filterTag: "automobile",
  },
  {
    title: "Master of Information Systems with a Specialization in Business Intelligence and Data Analytics Thesis",
    description: `Development of an unsupervised learning model to detect patterns and anomalies related to money laundering crimes, based on the processing of economic and social data in Ecuadorian cantons and provinces for the period 2013–2023. (Original thesis written in Spanish)`,
    filterTag: "bigdata",
  },
  {
    title: "Bachelor's in Economics Thesis",
    description: "Influence of Accession to ICSID on Foreign Direct Investment.",
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
        <Tabs defaultValue="automobile" className="flex flex-col xl:flex-col gap-[60px] justify-center">
          {/* Tabs */}
          <TabsList className="flex flex-col xl:flex-row w-full max-w-[380px] xl:max-w-[1200px] mx-auto gap-6">
            {thesis.map((item) => (
              <TabsTrigger
                key={item.filterTag}
                value={item.filterTag}
                onClick={() => handleTabClick(item.filterTag)}
              >
                {item.title.toUpperCase()}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full mt-10">
            {thesis.map((item) => (
              <TabsContent
                key={item.filterTag}
                value={item.filterTag}
                className="w-full text-center"
                id={item.filterTag}
              >
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-row items-center justify-center gap-10">
                    <h3 className="text-4xl font-bold">{item.title}</h3>
                  </div>
                  <p className="max-w-[600px] text-white/60 mx-auto">{item.description}</p>
                  <ExpandableCardDemo filterTag={item.filterTag} />
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
