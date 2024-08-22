"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import { serviceID, templateID, publicKey } from 'config';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+593) 96 189 5248",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "iniguez.dev@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "170157, Cumbaya, Ecuador",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    //config
    //serviceID, templateID, publicKey

    try {
      await emailjs.send(

        serviceID,
        templateID,
        {
          from_name: `${formData.firstname} ${formData.lastname}`, // Nombre completo del remitente
          reply_to: formData.email, // Correo electrónico del remitente
          phone: formData.phone, // Número de teléfono del remitente
          message: formData.message, // Mensaje del remitente
          to_name: "Manolo", // Nombre del destinatario
        },
        publicKey
      );
      setIsSent(true);
      setFormData({ firstname: '', lastname: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSending(false);
    }
  };

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

          <div className="xl:w-[54%] order-2 xl:order-2">
            {/* form */}
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              
              {/* Titulo y frase */}
              <h3 className="text-4xl text-accent">Let's work together!</h3>
              <p className="text-white/60">Provide your contact info and send a message.</p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} />
                <Input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} />
                <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
                <Input type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
              </div>

              {/* textarea */}
              <Textarea 
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />

              {/* boton */}
              <Button size="md" className="max-w-40" type="submit" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send message'}
              </Button>

              {isSent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
            </form>
          </div>
          
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-center mb-8 xl:mb-0 order-1 xl:order-none">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[24px]">{item.icon}</div>
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

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
