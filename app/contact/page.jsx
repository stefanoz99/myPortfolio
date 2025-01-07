"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 519 722 6241",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "stefano-s2@hotmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Waterloo, Ontario, Canada",
  },
];

const Contact = () => {
  // EmailJS Configuration
  const serviceID = "service_h3gsetj";
  const templateID = "template_z9uv4w7"; // Updated template ID
  const publicKey = "SffavoT0yir6IQbZs";

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      console.log("Sending email with data:", formData); // Debugging
      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: `${formData.firstname} ${formData.lastname}`, // Adjust to match your EmailJS template
          from_email: formData.email, // Updated key name
          phone_number: formData.phone, // Updated key name
          message: formData.message, // Updated key name
          to_name: "Stefano", // Ensure this matches your template variable, if used
        },
        publicKey
      );

      console.log("Email sent successfully:", response.status, response.text); // Debugging
      setIsSent(true);
      setFormData({ firstname: '', lastname: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send the message. Please try again later.');
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
      className="py-6 bg-primary"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          <div className="xl:w-[54%] order-2 xl:order-2">
            {/* Form */}
            <form className="flex flex-col gap-6 p-10 bg-secondary rounded-xl shadow-lg">
              
              {/* Title and Subtitle */}
              <h3 className="text-4xl text-accent">Let's work together!</h3>
              <p className="text-muted">Provide your contact info and send a message.</p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  name="firstname" 
                  placeholder="First name" 
                  value={formData.firstname} 
                  onChange={handleChange} 
                  required 
                />
                <Input 
                  type="text" 
                  name="lastname" 
                  placeholder="Last name" 
                  value={formData.lastname} 
                  onChange={handleChange} 
                  required 
                />
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Email address" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
                <Input 
                  type="text" 
                  name="phone" 
                  placeholder="Phone number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>

              {/* Textarea */}
              <Textarea 
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Submit Button */}
              <Button 
                size="md" 
                className="max-w-40 bg-accent hover:bg-accent-hover text-text font-semibold"
                type="submit" 
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send message'}
              </Button>

              {/* Success Message */}
              {isSent && <p className="text-success mt-4">Message sent successfully!</p>}
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex-1 flex items-center xl:justify-center mb-8 xl:mb-0 order-1 xl:order-none">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-accent text-text rounded-md flex items-center justify-center">
                      <div className="text-[24px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-muted">{item.title}</p>
                      <h3 className="text-xl text-text">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
