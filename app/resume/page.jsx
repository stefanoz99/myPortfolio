"use client";
import Image from "next/image";

import { 
  FaJs,
  FaGithub,
  FaDocker,
  FaPython,
  FaJava,
  FaUnity,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";

import { 
  SiProcessingfoundation,
  SiCplusplus,
  SiCsharp, 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiArduino, 
  SiMicrosoftexcel, 
  SiMicrosoftword, 
  SiCanva, 
  SiVisualstudiocode,
  SiAndroidstudio,
  SiMicrosoftpowerpoint,
  SiSublimetext,
  SiXampp,
  SiVirtualbox,
  SiAutodeskmaya,
  SiNotion,
} from "react-icons/si";

import { 
  TbBrandFlutter,
  TbAugmentedReality2, 
} from "react-icons/tb";

import { 
  DiMsqlServer, 
  DiVisualstudio,
} from "react-icons/di";

import { 
  PiVirtualReality 
} from "react-icons/pi";

// About me data
const about = {
  title: "About Me",
  description: "Hi, I’m Stefano, an Economist and data analytics professional with expertise in business, operations, and education. My top achievement is two years as a Supervisor at EPMMOP, where I led teams, managed operations, and delivered impactful results. I also have experience in sales and commerce from my time at Pelotea, where I contributed to business growth and strategic partnerships. I hold an MSc in Big Data Analytics from UIDE-EIG and an Economics degree from USFQ. Currently, I’m pursuing a Master of Arts in Business Economics (MABE) at Wilfrid Laurier University. As a Google Data Analytics Certified professional with expertise in Excel and Power BI, I specialize in converting complex data into actionable insights that drive decisions.",
  info: [
    { fieldName: "Name", fieldValue: "Stefano Zurita Perez" },
    { fieldName: "Nationality", fieldValue: "Ecuadorian" },
    { fieldName: "Languages", fieldValue: "English, Spanish" },
    { fieldName: "Experience", fieldValue: "3+ Years" },
    { fieldName: "Location", fieldValue: "Waterloo, Ontario, Canada" },
    { fieldName: "Availability", fieldValue: "Open to Co-Op" },
    { fieldName: "Phone", fieldValue: "(+1)519 722 6241" },
    { fieldName: "Email", fieldValue: "stefano-s2@hotmail.com" },
  ],
};

// Experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: "In my professional experience, I have worked in various areas within both the public and private sectors in Ecuador. In each role, I have stood out for my efficiency and quick results, leveraging data to optimize outcomes and improve performance. I have also applied analytical techniques to provide valuable recommendations to managers and stakeholders, contributing to the success of the projects I have been involved in.",
  items: [
    { company: "Wilfrid Laurier University", position: "Graduate Teaching Assistant", duration: "2024 - Present" },
    { company: "EPMMOP (Public Infrastructure Management Company)", position: "Operations Supervisor", duration: "2023 - 2024" },
    { company: "EPMMOP (Public Infrastructure Management Company)", position: "Operations Specialist", duration: "2022 - 2023" },
    { company: "Pelotea", position: "Insurance Sales Intern", duration: "2021" },
    { company: "Universidad San Francisco de Quito", position: "Teaching Assistant", duration: "2020 - 2021" },
  ],
};

// Education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: "I studied Economics at Universidad San Francisco de Quito, which opened the doors to my professional career. As I progressed, I focused on strengthening the areas I was most passionate about, completing courses like the Google Data Analytics Professional Certificate on Coursera. I then pursued a Master’s in Information Systems at Universidad Internacional del Ecuador (Ecuador) and Escuela Internacional de Gerencia (Spain), specializing in business intelligence and data analytics. Today, I’m combining all of this with my studies at Wilfrid Laurier University to apply these skills to real-world business challenges.",
  items: [
    { institution: "Wilfrid Laurier University", degree: "Master of Arts in Business Economics", duration: "2024 - 2026" },
    { institution: "UIDE Ecuador / EIG (Spain)", degree: "MSIS Big Data Analytics", duration: "2023 - 2024" },
    { institution: "Universidad San Francisco de Quito", degree: "Bachelor's in Economics", duration: "2017 - 2022" },
    { institution: "Colegio San Gabriel, Ecuador", degree: "High School Diploma", duration: "2011 - 2017" },
  ],
};

// Certifications data
const certifications = {
  icon: '/assets/resume/cap.svg',
  title: 'My Certifications',
  description: "Throughout my career, I have pursued various certifications to enhance my knowledge and skills in key areas. These certifications demonstrate my commitment to continuous learning and my ability to apply industry best practices in my work.",
  items: [
    { institution: "USFQ", topic: "Bachelor in Economics", year: "2021", pdf: "/assets/certifications/pdf/Titulo_USFQ.pdf", image: "/assets/certifications/images/Titulo_USFQ.png" },
    { institution: "UIDE-EIG", topic: "Master in Information Systems (Business Intelligence and Data Analytics)", year: "2024", pdf: "/assets/certifications/pdf/UIDE_titulo.pdf", image: "/assets/certifications/images/UIDE_titulo.png" },
    { institution: "Google-Coursera", topic: "Google Data Analytics", year: "2024", pdf: "/assets/certifications/pdf/Coursera_data.pdf", image: "/assets/certifications/images/Coursera_data.png" },
    { institution: "UIDE", topic: "Introduction to Python", year: "2023", pdf: "/assets/certifications/pdf/Uide_python.pdf", image: "/assets/certifications/images/Uide_python.png" },
    { institution: "EIG", topic: "Executive Leadership", year: "2023", pdf: "/assets/certifications/pdf/Liderazgo.pdf", image: "/assets/certifications/images/Liderazgo.png" },
    { institution: "UIDE", topic: "Agile Methodologies with SCRUM", year: "2023", pdf: "/assets/certifications/pdf/Scrum.pdf", image: "/assets/certifications/images/Scrum.png" },
    { institution: "Colegio San Gabriel", topic: "High School Degree", year: "2017", pdf: "/assets/certifications/pdf/SanGabriel.pdf", image: "/assets/certifications/images/SanGabriel.png" },
  ],
};

// References data
const references = {
  icon: '/assets/resume/reference.svg',
  title: 'References',
  description: "Below are professional references who can vouch for my skills, experiences, and work ethics.",
  items: [
    { name: "Dr. Wing Chan", position: "Econometrics Professor, Wilfrid Laurier University", contact: "wchan@wlu.ca", phone: "N/A" },
    { name: "Dr. Zijian Wang", position: "Macroeconomics Professor, Wilfrid Laurier University", contact: "zijianwang@wlu.ca", phone: "N/A" },
    { name: "Andrea Espinoza", position: "Planning Supervisor, EPMMOP", contact: "andrea.espinoza@epmmop.gob.ec", phone: "+593 96 906 4077" },
    { name: "Diego Román", position: "Former CEO, Pelotea", contact: "droman@pelotea.com", phone: "+593 99 710 0102" },
    { name: "Luis Espinosa Goded", position: "Professor and Researcher, USFQ", contact: "lespinosa@usfq.edu.ec", phone: "+593 99 562 4606" },
  ],
};

// Component imports and rendering logic continue as in your original structure
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {ScrollArea} from '@/components/ui/scroll-area'
import {animate, motion} from 'framer-motion'
import { Item } from "@radix-ui/react-select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

const Resume = () => {
  
  const handleTabClick = (value) => {
    document.getElementById(value).scrollIntoView({ behavior: "smooth" });
  };
  
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

    className="flex items-center justify-center min-h-[80vh]  py-12 xl:py-0"
  >
    <div className="container mx-auto">

      <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px] justify-center">

        {/* Botones */}
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">

          <TabsTrigger value="about" onClick={() => handleTabClick('about')}>ABOUT ME</TabsTrigger>

          <TabsTrigger value="experience" onClick={() => handleTabClick('experience')}>EXPERIENCE</TabsTrigger>

          <TabsTrigger value="education" onClick={() => handleTabClick('education')}>EDUCATION</TabsTrigger>

          <TabsTrigger value="certifications" onClick={() => handleTabClick('certifications')}>CERTIFICATIONS</TabsTrigger>

          <TabsTrigger value="skills" onClick={() => handleTabClick('skills')}>SKILLS</TabsTrigger>

          <TabsTrigger value="references" onClick={() => handleTabClick('references')}>REFERENCES</TabsTrigger>

        </TabsList>

        {/* content */}

        <div className="min-h-[70vh] w-full">

          {/* about me */}
          <TabsContent value="about" className ="w-full" id="about">

          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-2xl xl:text-4xl font-bold">{about.title}</h3>
            <p className="max-w-[500px] xl:max-w-[800px] text-white/60 mb-6 mx-auto xl:mx-0 leading-relaxed text-sm xl:text-[15px]">{about.description}</p>

            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 xl:gap-x-10 max-w-[620px] mx-auto xl:mx-0">
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
          <TabsContent value="experience" className ="w-full" id="experience">

            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-2xl xl:text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[500px] xl:max-w-[800px] text-white/60 mb-6 mx-auto xl:mx-0 leading-relaxed text-sm xl:text-[15px]">{experience.description}</p>

              <ScrollArea className="h-[400px]">

                <p className="text-right text-sm text-white/80 px-5">Scroll Down ↓</p>

                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return(
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]">{item.position}</h3>
                        
                        <div className="flex items-center gap-3">
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
          <TabsContent value="education" className ="w-full" id="education">

            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-2xl xl:text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[500px] xl:max-w-[800px] text-white/60 mb-6 mx-auto xl:mx-0 leading-relaxed text-sm xl:text-[15px]">{education.description}</p>

              <ScrollArea className="h-[400px]">
                
                <p className="text-right text-sm text-white/80 px-5">Scroll Down ↓</p>

                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return(
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]">{item.degree}</h3>
                        <div className="flex items-center gap-3">
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
          <TabsContent value="certifications" className="w-full" id="certifications">

            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-2xl xl:text-4xl font-bold">{certifications.title}</h3>
              <p className="max-w-[500px] xl:max-w-[800px] text-white/60 mb-6 mx-auto xl:mx-0 leading-relaxed text-sm xl:text-[15px]">{certifications.description}</p>
              
              <ScrollArea className="h-[400px]">

                <p className="text-right text-sm text-white/80 px-5">Scroll Down ↓</p>

                <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                  {certifications.items.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#232329] py-6 px-10 rounded-xl flex justify-around lg:justify-between items-center lg:items-center lg:flex-row lg:gap-9 gap-3">
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
          <TabsContent value="skills" className ="w-full h-full" id="skills">
            <div className="flex flex-col gap-[30px]">
              
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-2xl xl:text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[500px] xl:max-w-[800px] text-white/60 mb-6 mx-auto xl:mx-0 leading-relaxed text-sm xl:text-[15px]">{skills.description}</p>
              </div>

              <ScrollArea className="h-[350px]">   

                <p className="text-right text-sm text-white/80 px-5">Scroll Down ↓</p>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
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
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>

                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea> 
              
            </div>

          </TabsContent>

          {/* references */}
          <TabsContent value="references" className="w-full" id="references">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-2xl xl:text-4xl font-bold">{references.title}</h3>
              <p className="max-w-[500px] xl:max-w-[800px] text-white/60 mb-6 mx-auto xl:mx-0 leading-relaxed text-sm xl:text-[15px]">{references.description}</p>

              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {references.items.map((item, index) => {
                  return (
                    <li key={index} className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col gap-3">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="text-white/60">{item.position}</p>
                      <p className="text-white/60">Email: <a href={`mailto:${item.contact}`} className="text-accent">{item.contact}</a></p>
                      <p className="text-white/60">Phone: {item.phone}</p>
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
