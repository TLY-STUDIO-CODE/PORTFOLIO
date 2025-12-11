"use client";
import { motion } from "framer-motion";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper modules
import { Pagination } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { MdOutlineArrowOutward, MdArrowRightAlt } from "react-icons/md";

const services = [
  {
    icon: "/assets/services/design.svg",
    href: "",
    title: "Conception et Architecture Logicielle",
  },
  {
    icon: "/assets/services/frontend.svg",
    href: "",
    title: "Développement Full-Stack",
  },
  {
    icon: "/assets/services/backend.svg",
    href: "",
    title: "Gestion et Optimisation des Bases de Données",
  },
  {
    icon: "/assets/services/seo.svg",
    href: "",
    title: "Mise en Production et Déploiement",
  },
  {
    icon: "/assets/services/video.svg",
    href: "",
    title: "Veille Technologique et Conseil",
  },
];

const Services = () => {
  return (
    <motion.section  
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, 
      }}
    className="h-screen flex items-center">
      <div className="container mx-auto w-full flex flex-col gap-16">
        {/* text */}
        <div>
          {/* headline */}
          <h2 className="h2 max-w-[480px] text-left xl:mb-0">
              Création de <span className="text-accent">Solutions Web Sur Mesure</span> pour Propulser Votre Performance
          </h2>
          {/* btn */}
          <button className="btn btn-lg btn-accent flex gap-2">Tous les services <MdArrowRightAlt className="text-2xl" /></button>
        </div>
        {/* slider */}
        <div>slider</div>
      </div>
    </motion.section>
  );
};

export default Services;