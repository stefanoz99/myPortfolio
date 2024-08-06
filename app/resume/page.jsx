"use client";
import Image from "next/image";

import { 
  FaJs,
  FaFigma,
  FaDocker,
  FaPython,
  FaJava,
  FaUnity,
} from "react-icons/fa";

import { 
  SiTailwindcss, SiNextdotjs,
} from "react-icons/si";

//about me data
const about = {
  title: "About me",
  description: "Sobre mi bla bla bla bla bla bla bla bla bla bla bla bla ble ble ble ble ble.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Manolo Iniguez"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+593) 96 189 5248"
    },
    {
      fieldName: "Experience",
      fieldValue: "800+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ecuadorian"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Email",
      fieldValue: "iniguezms@hotmail.com"
    },
    {
      fieldName: "Otro",
      fieldValue: "Otra cosa cool"
    },
    {
      fieldName: "Languages",
      fieldValue: "Spanish, English"
    },
  ]
};

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "mi experiencia bla bla bla mi experiencia bla bla bla mi experiencia bla bla bla mi experiencia bla bla bla",
  items: [
    {
      company: "LIFE",
      position: "Tipaso",
      duration: "2000 - Present",
    },
    {
      company: "TELCONET LATAM",
      position: "Intern",
      duration: "2022 - 2023",
    },
    {
      company: "University San Franscisco",
      position: "Teaching Assistant",
      duration: "2023 - 2024",
    },
    {
      company: "General Contralory of the State",
      position: "Project Management Developer",
      duration: "2024 - Present",
    },
    
  ]
};

//education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "mi educacion bla bla bla mi educacion bla bla bla mi educacion bla bla bla mi educacion bla bla bla",
  items: [
    {
      institution: "Streets, Carcelen City",
      degree: "About life, ganster shit",
      duration: "2000 - Present",
    },
    {
      institution: "Julius West School, United States",
      degree: "Middle School",
      duration: "2012 - 2013",
    },
    {
      institution: "Colegio San Gabriel, Ecuador",
      degree: "High School",
      duration: "2011 - 2014",
    },
    {
      institution: "Bachillerato Patria, Colombia",
      degree: "High School",
      duration: "2014 - 2016",
    },
    {
      institution: "Instituto Politecnico de Leiria, Portugal",
      degree: "University",
      duration: "2017 - 2019",
    },
    {
      institution: "Universidad San Franscisco, Ecuador",
      degree: "University",
      duration: "2019 - 2023",
    },
    
  ]
};

//education data
const certifications = {
  icon: '/assets/resume/cap.svg',
  title: 'Certifications',
  description: "mis certificaciones bla bla bla mi educacion bla bla bla mi educacion bla bla bla mi educacion bla bla bla",
  items: [
    {
      institution: "CertiProf",
      topic: "Scrum Foundation SFPC",
      year: "2024",
      pdf: "/assets/certifications/pdf/certScrum.pdf",
      image: "/assets/certifications/images/certScrum.png"
    },
    {
      institution: "CEA",
      topic: "Gender Equality and Non-Discrimination",
      year: "2024",
      pdf: "/assets/certifications/pdf/certIGND.pdf",
      image: "/assets/certifications/images/certIGND.png"
    },
    {
      institution: "CONADIS",
      topic: "Human Rights and Labor Inclusion",
      year: "2024",
      pdf: "/assets/certifications/pdf/certIgualdad.pdf",
      image: "/assets/certifications/images/certIgualdad.png"
    },
    {
      institution: "SERCOP",
      topic: "Fundamentals of Public Procurement",
      year: "2024",
      pdf: "/assets/certifications/pdf/certSERCOP.pdf",
      image: "/assets/certifications/images/certSERCOP.png"
    },
    
  ]
};

//skills data
const skills = {
  title: 'My skills',
  description: "mis skills bla bla bla mis skills bla bla bla mis skills bla bla bla mis skills bla bla bla mis skills bla bla bla",
  skillList: [
    {
      icon: <FaPython/>,
      name: "Python",
    },
    {
      icon: <FaUnity/>,
      name: "Unity",
    },{
      icon: <FaJava/>,
      name: "Java",
    },
    {
      icon: <FaJs/>,
      name: "JavaScript",
    },
    {
      icon: <FaDocker/>,
      name: "Docker",
    },
    {
      icon: <FaFigma/>,
      name: "Figma",
    },
    
    
  ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {ScrollArea} from '@/components/ui/scroll-area'
import {animate, motion} from 'framer-motion'
import { Item } from "@radix-ui/react-select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

const Resume = () => {
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

    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="about">About Me</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        {/* content */}

        <div className="min-h-[70vh] w-full">

          {/* about me */}
          <TabsContent value="about" className ="w-full text-center xl:text-left">
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold">{about.title}</h3>
            <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">{about.description}</p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="text-xl">{item.fieldValue}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          </TabsContent>

          {/* experience */}
          <TabsContent value="experience" className ="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return(
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* puntito */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          
          {/* education */}
          <TabsContent value="education" className ="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return(
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* puntito */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          
          {/* certifications */}
          <TabsContent value="certifications" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{certifications.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {certifications.description}</p>
              
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                  {certifications.items.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#232329] py-6 px-10 rounded-xl flex justify-around lg:justify-between items-center lg:items-center lg:flex-row lg:gap-9 gap-3">
                        
                        {/* Imagen y año */}
                        <div className="flex flex-col items-center justify-center lg:justify-between w-auto  lg:flex-1 gap-3">

                          <span className="text-accent text-xl">{item.year}</span>
                          
                          <Image 
                            src={item.image}
                            alt={item.topic}
                            width={120}
                            height={120}
                            className="rounded" 
                          />
                        </div>

                        {/* Titulo, Compañia y Boton */}
                        <div className="flex flex-col justify-center items-center lg:flex-row lg:items-center lg:gap-20 gap-3">

                          <div className="flex flex-col items-center lg:items-start lg:flex-1 gap-3">
                            
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.topic}</h3>

                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>

                          </div>

                          <a href={item.pdf} download className="text-sm rounded font-bold bg-accent text-black hover:bg-white px-3 py-1 h-[30px] w-[100px] justify-center items-center">Download</a>

                        </div>

                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>



          {/* skills */}
          <TabsContent value="skills" className ="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) => {
                  // return <li key={index}>{skill.name}</li>;
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>

                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>

                          <TooltipContent className="bg-white text-black rounded-lg p-2 w-auto h-auto justify-center items-center">
                          {/* <TooltipContent className="font-bold"> */}
                            <p className="capitalize">{skill.name}</p>
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
    </div>
    </motion.div>
  );
}

export default Resume