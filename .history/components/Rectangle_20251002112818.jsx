"use client";
import { motion } from "framer-motion";

// variants
const rectangleVariants = {
    initial: {
        y: "-100%",
        height: "100%",
    },
    animate: {
        y: "0%",
        height: "0%",
    },
    exit: {
        y: ["0%", "-100%"],
        height: ["0%", "100%"],
    },
};

const Rectangle = () => {
    return <div>rectangle</div>;
;}

export default Rectangle;