"use client";
import { motion } from "framer-motion"; 
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const About = () => {
  return (
    <motion.section  
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, 
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* img & social icons */}
          <div className="hidden xl:flex w-full h-full pt-14 max-w-[430px] relative 
          bg-pink-50/10">
          1
          </div>
          {/* scroll area */}
          <div className="w-full bg-blue-50/10">2</div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;