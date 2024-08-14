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

import { TbBrandFlutter } from "react-icons/tb";
import { SiProcessingfoundation, SiCsharp, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TiVendorMicrosoft } from "react-icons/ti";


//about me data
const about = {
  title: "About Me",
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
  title: 'My Experience',
  description: "Despite being early in my career, I have gained valuable experience across different roles and industries. My work in various environments, from academic settings and private companies to government institutions, has equipped me with a strong foundation in technical skills, problem-solving, and effective communication. Each experience, though brief, has significantly contributed to my professional growth, allowing me to quickly adapt and excel in any challenge presented.",
  items: [
    {
      company: "TELCONET LATAM",
      position: "Intern Developer",
      duration: "2022 - 2022",
    },
    {
      company: "University San Franscisco",
      position: "Programming Tutor",
      duration: "2022 - 2023",
    },
    {
      company: "Office of the Comptroller General of the State",
      position: "Service Management Developer",
      duration: "2024 - Present",
    },
    
  ]
};

//education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: "Having pursued my education across multiple countries, I have cultivated a global perspective and adaptability that uniquely positions me to thrive in diverse, dynamic environments. My academic journey, enriched by international experiences, has not only broadened my horizons but also equipped me with the ability to navigate and excel in multicultural settings.",
  items: [
    {
      institution: "Julius West MS, United States",
      degree: "Middle School",
      duration: "2012 - 2013",
    },
    {
      institution: "Colegio San Gabriel, Ecuador",
      degree: "High School",
      duration: "2011 - 2014",
    },
    {
      institution: "Patria High School, Colombia",
      degree: "High School",
      duration: "2014 - 2016",
    },
    {
      institution: "Polytechnic Institute of Leiria, Portugal",
      degree: "University",
      duration: "2017 - 2019",
    },
    {
      institution: "San Francisco de Quito University, Ecuador",
      degree: "University",
      duration: "2019 - 2023",
    },
    
  ]
};

//certifications data
const certifications = {
  icon: '/assets/resume/cap.svg',
  title: 'My Certifications',
  description: "Despite being early in my career, I have gained valuable experience across different roles and industries. My work in various environments, from academic settings and private companies to government institutions, has equipped me with a strong foundation in technical skills, problem-solving, and effective communication. Each experience, though brief, has significantly contributed to my professional growth, allowing me to quickly adapt and excel in any challenge presented.",
  items: [
    {
      institution: "CERTIPROF",
      topic: "Scrum Foundation SFPC",
      year: "2024",
      pdf: "/assets/certifications/pdf/certScrum.pdf",
      image: "/assets/certifications/images/certScrum.png"
    },
    {
      institution: "UDEMY",
      topic: "Mastering Git and GitHub",
      year: "2024",
      pdf: "/assets/certifications/pdf/certGit.pdf",
      image: "/assets/certifications/images/certGit.png"
    },
    {
      institution: "CONADIS",
      topic: "Human Rights and Labor Inclusion",
      year: "2024",
      pdf: "/assets/certifications/pdf/certIgualdad.pdf",
      image: "/assets/certifications/images/certIgualdad.png"
    },
    {
      institution: "CEA",
      topic: "Gender Equality and Non-Discrimination",
      year: "2024",
      pdf: "/assets/certifications/pdf/certIGND.pdf",
      image: "/assets/certifications/images/certIGND.png"
    },
    {
      institution: "SERCOP",
      topic: "Fundamentals of Public Procurement",
      year: "2024",
      pdf: "/assets/certifications/pdf/certSERCOP.pdf",
      image: "/assets/certifications/images/certSERCOP.png"
    },
    {
      institution: "FCD",
      topic: "Open Government, Benefits, and Applications",
      year: "2024",
      pdf: "/assets/certifications/pdf/certEstadoAbierto.pdf",
      image: "/assets/certifications/images/certEstadoAbierto.png"
    },
    {
      institution: "USFQ",
      topic: "Logistics and Port Operations: Challenges and Solutions",
      year: "2022",
      pdf: "/assets/certifications/pdf/certOpLogistica.pdf",
      image: "/assets/certifications/images/certOpLogistica.png"
    },
    
  ]
};

//skills data
const skills = {
  title: 'My Skills',
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
      icon: <TbBrandFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiProcessingfoundation />,
      name: "Processing",
    },
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <DiMsqlServer />,
      name: "SQL Server",
    },
    {
      icon: <TbBrandFlutter />,
      name: "Flutter",
    },
    {
      icon: <TiVendorMicrosoft />,
      name: "Microsoft Office",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Adobe Photoshop",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Adobe Ilustrator",
    },
    
    
  ]
};

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

        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="about" onClick={() => handleTabClick('about')}>About Me</TabsTrigger>
          <TabsTrigger value="experience" onClick={() => handleTabClick('experience')}>Experience</TabsTrigger>
          <TabsTrigger value="education" onClick={() => handleTabClick('education')}>Education</TabsTrigger>
          <TabsTrigger value="certifications" onClick={() => handleTabClick('certifications')}>Certifications</TabsTrigger>
          <TabsTrigger value="skills" onClick={() => handleTabClick('skills')}>Skills</TabsTrigger>
        </TabsList>

        {/* content */}

        <div className="min-h-[70vh] w-full">

          {/* about me */}
          <TabsContent value="about" className ="w-full" id="about">

          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-2xl xl:text-4xl font-bold">{about.title}</h3>
            <p className="max-w-[500px] xl:max-w-[800px] text-white/60 mb-6 mx-auto xl:mx-0 leading-relaxed text-sm xl:text-[15px]">{about.description}</p>

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
              </ScrollArea> 
              
            </div>

          </TabsContent>
        </div>


      </Tabs>
    </div>
    </motion.div>
  );
}

export default Resume