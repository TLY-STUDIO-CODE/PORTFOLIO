"use client";
import { motion } from "framer-motion"; 
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

// components
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

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
            <Image 
              src="/assets/avatar.png" 
              width={320} 
              height={496} 
              alt="" 
              className="z-20 relative" 
            />
            
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>Mon profil</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Andry</span> Razafindrabe
              </h2>
              <p className="max-w-[540px] mb-12">
                Je me dédie à façonner des expériences web fluides, 
                intuitives et visuellement percutantes. 
                J'assure des réalisations aussi fonctionnelles qu'esthétiques, 
                où l'exécution minutieuse sublime chaque détail conçu.
              </p>

              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Testimonial />
                <Info />
                <Journey />
                <Experience />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;