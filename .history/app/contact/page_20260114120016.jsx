"use client";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";

import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2"
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi"

const Contact = () => {
  return (
    <motion.section  
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, 
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >

    <div class="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll 
    xl:overflow-y-visible">
      <div>
        <div className="flex flex-col xl:flex-row gap-6">
          {/* info text */}
          <div>info text</div>
          {/* form */}
          <div>form</div>
        </div>
      </div>
    </div>
    </motion.section>
  );
};

export default Contact;