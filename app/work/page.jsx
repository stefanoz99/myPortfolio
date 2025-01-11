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
    className="py-12"
  >
    <div className="container mx-auto">
      <Tabs defaultValue={categories[0].filterTag} className="flex flex-col gap-8">
        <TabsList className="flex gap-4 justify-center">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.filterTag}
              value={cat.filterTag}
              className="text-lg font-semibold"
            >
              {cat.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <div>
          {categories.map((cat) => (
            <TabsContent key={cat.filterTag} value={cat.filterTag}>
              <h3 className="text-2xl font-bold text-center">{cat.title}</h3>
              <p className="text-center text-muted my-4">{cat.description}</p>
              <ExpandableCardDemo filterTag={cat.filterTag} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  </motion.section>
);

export default Work;
