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
            className="fixed inset-0 bg-black/40 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 grid place-items-center z-20">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={active.src}
                alt={active.title}
                width={500}
                height={300}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{active.title}</h3>
                <p className="text-gray-600 my-2">{active.description}</p>
                <a
                  href={active.btnLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-md"
                >
                  Download
                </a>
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
            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg cursor-pointer"
            onClick={() => setActive(card)}
          >
            <Image
              src={card.src}
              alt={card.title}
              width={300}
              height={200}
              className="w-full h-[150px] object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
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
    src: "/assets/projects/images/PowerBI.png",
    btnLink: "/assets/projects/documents/PowerBIVisualization.pdf",
    tags: ["data-visualization"],
  },
  {
    title: "Kepler.gl Visualizations",
    description:
      "Geospatial data visualizations created using Kepler.gl to identify patterns and trends in urban infrastructure data.",
    src: "/assets/projects/images/KeplerVisualization.png",
    btnLink: "/assets/projects/documents/KeplerVisualizations.pdf",
    tags: ["data-visualization"],
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
