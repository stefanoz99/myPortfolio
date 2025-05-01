"use client";

import React, { useState, useEffect, useRef, useId } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo({ filterTag }) {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useOutsideClick(ref, () => setActive(null));

  const filteredCards = thesisProjects.filter((card) => card.tags.includes(filterTag));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full lg:h-fit lg:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-lg"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={300}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-60 lg:h-80 object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-center p-4 bg-accent/10">
                  <div className="text-start">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-lg"
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
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.btnLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-md font-bold bg-accent text-white hover:bg-primary hover:text-white"
                  >
                    Download
                  </motion.a>
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                className="absolute top-2 right-2 text-gray-800 bg-gray-200 rounded-full p-2"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <motion.div
            key={card.title}
            layoutId={`card-${card.title}-${id}`}
            className="p-4 flex flex-col md:flex-row justify-center items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            onClick={() => setActive(card)}
          >
            <div className="flex flex-col items-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-60 md:h-60 md:w-60 lg:h-40 lg:w-40 xl:h-40 xl:w-40 rounded-lg object-cover object-top"
                />
              </motion.div>
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
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

const thesisProjects = [
  {
    title: "Master’s Thesis in Business Intelligence",
    description:
      "Development of an unsupervised learning model to detect patterns and anomalies related to money laundering crimes, based on economic and social data in Ecuador from 2013–2023. (Original thesis in Spanish)",
    src: "/assets/projects/images/BigDataThesis.png",
    btnLink: "/assets/projects/documents/BigDataThesis.pdf",
    tags: ["data-analyst"],
  },
  {
    title: "Power BI Visualization",
    description:
      "Interactive dashboard analyzing organizational performance and financial indicators, built using Power BI to streamline decision-making processes.",
    src: "/assets/projects/images/PowerBIVisualization.png",
    btnLink: "/assets/projects/documents/PowerBIVisualization.pdf",
    tags: ["data-visualization"],
  },
  {
    title: "Kepler.gl Visualizations",
    description:
      "Geospatial data visualizations created using Kepler.gl to identify patterns and trends in urban infrastructure data.",
    src: "/assets/projects/images/KeplerVisualizations.png",
    btnLink: "/assets/projects/documents/KeplerVisualizations.pdf",
    tags: ["data-visualization"],
  },
  {
    title: "Singapore Forecast Project",
    description:
      "Forecasting Singapore’s Inflation Using LASSO: A Comparison with Traditional Time Series Models",
    src: "/assets/projects/images/Singapore.png",
    btnLink: "/assets/projects/documents/Singapore.pdf",
    tags: ["economics-research"],
  },
  {
    title: "Automobile Markets Research",
    description:
      "Econometric analysis of U.S. automobile demand, exploring price sensitivity, competition, and consumer behavior.",
    src: "/assets/projects/images/AutomobileMarkets.png",
    btnLink: "/assets/projects/documents/AutomobileMarkets.pdf",
    tags: ["economics-research"],
  },
  {
    title: "Bachelor’s Thesis in Economics",
    description:
      "Influence of accession to ICSID on foreign direct investment: A case study approach.",
    src: "/assets/projects/images/EconomistThesis.png",
    btnLink: "/assets/projects/documents/EconomistThesis.pdf",
    tags: ["economics-research"],
  },
];
