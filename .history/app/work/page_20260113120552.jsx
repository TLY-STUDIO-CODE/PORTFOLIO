"use client";
import { motion } from "framer-motion";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

// data
const projects = [
  {
    id: 1,
    category: "Frontend",
    title: "VERBOLUDE",
    description: "Plateforme littéraire numérique",
    image: "/assets/work/11.png",
    link: "",
    github: "",
    tech: ["HTML5", "CSS3", "JavaScript ES6+"],
  },
  {
    id: 2,
    category: "Frontend",
    title: "TLY STUDIO",
    description: "Studio de création visuelle et digitale",
    image: "/assets/work/12.png",
    link: "",
    github: "",
    tech: ["HTML5", "CSS3", "JavaScript ES6+"],
  },
  {
    id: 3,
    category: "Frontend",
    title: "TRANS LUZ",
    description: "Le transport en toute sérénité",
    image: "/assets/work/13.png",
    link: "",
    github: "",
    tech: ["HTML5", "CSS3", "JavaScript ES6+"],
  },
  {
    id: 4,
    category: "Frontend",
    title: "LIDER GAMING",
    description: "L'univers des passionnés de jeux vidéo",
    image: "/assets/work/14.png",
    link: "",
    github: "",
    tech: ["HTML5", "CSS3", "JavaScript ES6+"],
  },
  {
    id: 5,
    category: "Frontend",
    title: "PORTFOLIO",
    description: "Aperçu de mes créations et projets",
    image: "/assets/work/15.png",
    link: "",
    github: "",
    tech: ["NextJS", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: 6,
    category: "Full-Stack",
    title: "ORI-KAJY",
    description: "Solution de gestion comptable",
    image: "/assets/work/16.png",
    link: "",
    github: "",
    tech: ["ReactJS", "Tailwind CSS", "NodeJS", "ExpressJS", "PostgreSQL", "Docker"],
  },
  {
    id: 7,
    category: "Backend",
    title: "FMA",
    description: "Plateforme dédiée à l'excellence éducative",
    image: "/assets/work/17.png",
    link: "",
    github: "",
    tech: ["HTML5", "CSS3", "PHP", "JavaScript ES6+", "MySQL"],
  },
  {
    id: 8,
    category: "Full-Stack",
    title: "E-HAROGNA",
    description: "Plateforme dédiée à l’éducation numérique",
    image: "/assets/work/18.png",
    link: "",
    github: "",
    tech: ["ReactJS", "Tailwind CSS", "NodeJS", "ExpressJS", "MySQL", "Docker"],
  },
  {
    id: 9,
    category: "Full-Stack",
    title: "GESTION D'EMPLOYEES",
    description: "Plateforme dédiée à la gestion des employés",
    image: "/assets/work/19.png",
    link: "",
    github: "",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Hibernate", "Tailwind CSS"],
  },
];


const categories = ["frontend", "Backend", "full-stack"];

const Work = () => {
  return (
    <motion.section  
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, 
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          Mes dernières <span className="text-accent">réalisations</span>
        </h2>
        {/* tabs */}
        <Tabs defaultValue="frontend" className="w-full flex flex-col gap-6 xl:gap-12">
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger key={category} value={category} className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 
                rounded-full cursor-pointer">
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;