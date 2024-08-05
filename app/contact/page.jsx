"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlobeDemo } from "@/components/ui/gridGlobe.tsx";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+593) 96 189 5248",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "iniguezms@hotmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "170157, Cumbaya, Ecuador",
  },
];

import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition:{ 
          delay: 0.3, 
          duration: 1, 
          ease: "easeIn" },
        }}
        className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-2">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Lets work together!</h3>
              <p className="text-white/60">Contrateme no sea malito.</p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              {/* select */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">mi Servicio 1</SelectItem>
                    <SelectItem value="cst">mi Servicio 2</SelectItem>
                    <SelectItem value="mst">capaz se que poner</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}

              {/* textarea */}
              <Textarea 
                className="h-[200px]"
                placeholder="Type your message here."
              />

              {/* boton */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>

            </form>
          </div>
          
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-center mb-8 xl:mb-0 order-1 xl:order-none">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

          {/* <div className="xl:w-[46%] order-1 xl:order-1 flex flex-col gap-[30px]"> */}

            {/* globe */}
            {/* <div className="rounded-xl justify-end">
              <p className="text-xl text-white/80 mb-4 text-center">
                I'm very flexible with time zone communications
              </p>
              <div className="relative rounded-xl w-full h-64 overflow-hidden justify-center ithems-center">
                <div className="absolute w-full h-full top-1/2 transform -translate-y-1/2 scale-95">
                  <GlobeDemo />
                </div>
              </div>
            </div> */}

            {/* info */}
            {/* <div className="flex-1 flex items-center xl:justify-center mb-8 xl:mb-0 order-1 xl:order-none">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div> */}

          {/* </div> */}

        </div>

      </div>
    </motion.section>
  );
};



export default Contact;
