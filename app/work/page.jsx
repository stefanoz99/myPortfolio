"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ExpandableCardDemo } from "@/components/ExpandableCardDemo";

const categories = [
  {
    title: "Analytical Insights",
    description: "Projects focused on data analytics and decision-making.",
    filterTag: "data-analyst",
  },
  {
    title: "Data Visualizations",
    description: "Interactive dashboards and geospatial visualizations.",
    filterTag: "data-visualization",
  },
  {
    title: "Economics Research",
    description: "Research in applied economics and econometrics.",
    filterTag: "economics-research",
  },
];

const Work = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 0.3, duration: 1 } }}
    className="py-8 md:py-12"
  >
    <div className="container mx-auto px-4">
      <Tabs defaultValue={categories[0].filterTag} className="flex flex-col gap-6 md:gap-8">
        {/* Tabs List */}
        <div className="md:flex md:justify-center overflow-x-auto md:overflow-visible">
          <TabsList className="flex gap-4 md:gap-8 flex-wrap md:flex-nowrap">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.filterTag}
                value={cat.filterTag}
                className="text-sm md:text-lg font-semibold px-4 py-2 md:px-6 md:py-3"
              >
                {cat.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Tabs Content */}
        <div className="flex flex-col gap-6 md:gap-8">
          {categories.map((cat) => (
            <TabsContent key={cat.filterTag} value={cat.filterTag}>
              <h3 className="text-xl md:text-2xl font-bold text-center md:text-left">
                {cat.title}
              </h3>
              <p className="text-center md:text-left text-sm md:text-base text-muted my-2 md:my-4">
                {cat.description}
              </p>
              <ExpandableCardDemo filterTag={cat.filterTag} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  </motion.section>
);

export default Work;
