"use client";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper required modules
import { Autoplay } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

// data
const testimonial = [
    {
        message: "Expertise Full-Stack précieuse pour l'évolution de nos solutions ERP internes.",
        name : "Manao",
    },
    {
        message: "Réalisation exemplaire du site institutionnel et maintenance rigoureuse du parc.",
        name : "ONG",
    },
    {
        message: "Développement agile de plateformes web et mobiles innovantes avec NodeJS et React.",
        name : "Origami",
    },
    {
        message: "Logiciel de gestion de présence robuste développé avec succès sous Symfony.",
        name : "ENI",
    },
    {
        message: "Digitalisation efficace des services fiscaux grâce à sa maîtrise de Laravel.",
        name : "DRI",
    },
    {
        message: "Solution de numérisation de diplômes sécurisée et parfaitement adaptée au MEN.",
        name : "MEN",
    },
];


const Testimonial = () => {
    return (
        <Swiper 
            //modules={[Autoplay]} 
            loop={false} 
            autoplay={{ delay: 4000, disableOnInteraction: true }} 
            className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
        >
            {testimonial.map((person, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="flex px-8 py-6 gap-8">
                            <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
                            <div className="flex flex-col gap-2">
                                <p>{person.message}</p>
                                <p className="self-end text-accent font-semibold">
                                    {person.name}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Testimonial;