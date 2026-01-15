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
    category: "frontend",
    title: "VERBOLUDE",
    description: "Plateforme littéraire numérique",
    image: "/assets/work/11.png",
    link: "",
    github: "",
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "Shadcn UI"],
  },
  {
    id: 2,
    category: "frontend",
    title: "TLY STUDIO",
    description: "Studio de création visuelle et digitale",
    image: "/assets/work/12.png",
    link: "",
    github: "",
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "Shadcn UI"],
  },
  {
    id: 3,
    category: "frontend",
    title: "TRANS LUZ",
    description: "Le transport en toute sérénité",
    image: "/assets/work/13.png",
    link: "",
    github: "",
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "Shadcn UI"],
  },
  {
    id: 4,
    category: "frontend",
    title: "LIDER GAMING",
    description: "L'univers des passionnés de jeux vidéo",
    image: "/assets/work/14.png",
    link: "",
    github: "",
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "Shadcn UI"],
  },
  {
    id: 5,
    category: "frontend",
    title: "PORTFOLIO",
    description: "Aperçu de mes créations et projets",
    image: "/assets/work/15.png",
    link: "",
    github: "",
    tech: ["NextJS", "NodeJS", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: 6,
    category: "fullstack",
    title: "ORI-KAJY",
    description: "Solution de gestion comptable",
    image: "/assets/work/16.png",
    link: "",
    github: "",
    tech: ["ReactJS", "Tailwind CSS", "ExpressJS", "PostgreSQL", "Docker", "Shadcn UI"],
  },
  {
    id: 7,
    category: "backend",
    title: "FMA",
    description: "Plateforme dédiée à l'excellence éducative",
    image: "/assets/work/17.png",
    link: "",
    github: "",
    tech: ["HTML5", "CSS3", "PHP", "JavaScript ES6+", "MySQL", "Shadcn UI"],
  },
  {
    id: 8,
    category: "fullstack",
    title: "E-HAROGNA",
    description: "Plateforme dédiée à l’éducation numérique",
    image: "/assets/work/18.png",
    link: "",
    github: "",
    tech: ["ReactJS", "Tailwind CSS", "ExpressJS", "MySQL", "Docker", "Shadcn UI"],
  },
  {
    id: 9,
    category: "fullstack",
    title: "GESTION D'EMPLOYEES",
    description: "Plateforme dédiée à la gestion des employés",
    image: "/assets/work/19.png",
    link: "",
    github: "",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Hibernate", "Tailwind CSS", "Shadcn UI"],
  },
];


const categories = ["frontend", "backend", "fullstack"];

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
          {/* tabs list */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger key={category} value={category} className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 
                rounded-full cursor-pointer">
                  {category === "fullstack" ? "Full-Stack" : category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper modules={[pagination]} pagination={{clickable: true, dynamicBullets: true}} className="h-max xl:h-[460px]">
                    {projects
                    .filter((project) => project.category === category)
                    .map((project)=> {
                      return (
                        <SwiperSlide key={project.id} className="h-full">
                          <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                            {/* project info */}
                            <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                              {/* title */}
                              <h3 className="h3">{project.title}</h3>
                              {/* tech */}
                              <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                <p className="mb-4">Technologies utilisées</p>
                                <ul className="flex flex-wrap gap-4">
                                  {project.tech.map((item, index) => {
                                    return (
                                      <li key={index} className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full">
                                        {item}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                              {/* btns */}
                              <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <Link href={project.link}>
                                  <button className="btn btn-sm btn-accent flex gap-2">
                                    <MdArrowOutward className="text-xl" />
                                    <span>Voir le projet</span>
                                  </button>
                                </Link>
                                <Link href={project.github}>
                                  <button className="btn btn-sm btn-white flex gap-2">
                                    <FaGithub className="text-xl" />
                                    <span>Code source</span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            {/* project img */}
                            <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                              <Image src={project.image} alt={project.image} fill className="object-cover" />
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;