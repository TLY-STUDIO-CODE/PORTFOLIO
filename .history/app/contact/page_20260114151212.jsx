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

    <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll 
    xl:overflow-y-visible">
      <div className="w-full">
        <div className="flex flex-col xl:flex-row gap-6">
          {/* info text */}
          <div>info text</div>
          {/* form */}
          <div className="flex-1">
            <form className="flex flex-col gap-6 items-start">
              {/* First and last name */}
              <div className="flex flex-col xl:flex-row gap-6 w-full">
                <div className="w-full">
                  <Label htmlFor="name">
                    Prénom <span className="text-accent">*</span>
                  </Label>
                  <Input 
                      id="firstname" 
                      name="firstname" 
                      placeholder="Votre prénom" 
                      required 
                    />
                </div>
                <div className="w-full">
                  <Label htmlFor="name">
                    Nom <span className="text-accent">*</span>
                  </Label>
                  <Input 
                      id="lastname" 
                      name="lastname" 
                      placeholder="Votre Nom" 
                      required 
                    />
                </div>
              </div>
              {/* email */}
              <div className="w-full">
                <Label htmlFor="name">
                  Adresse e-mail <span className="text-accent">*</span>
                </Label>
                <Input 
                  id="email" 
                  name="email" 
                  placeholder="adresse@gmail.com" 
                  required
                  />
              </div>
              {/* select */}
              <div className="w-full">
                <Label htmlFor="name">
                  Je suis intéressé par <span className="text-accent">*</span>
                </Label>
                <Select name="service" required>
                  <SelectTrigger id="service" className="w-full !h-12 bg-white/5 border-white/10 px-4">
                    <SelectValue placeholder="Choisissez ici" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/20">
                    <SelectItem value="webdev">e</SelectItem>
                    <SelectItem value="uiux">Design UI/UX</SelectItem>
                    <SelectItem value="logo">Création de logo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* textarea */}
              <div className="w-full">
                <Label htmlFor="name">
                  Message <span className="text-accent">*</span>
                </Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Écrivez votre message ici..." 
                  className="min-h-[160px] bg-white/5 border-white/10 
                  focus-visible:border-accent focus-visible:ring-accent 
                  focus-visible:ring-[1px] resize-none p-4 selection:bg-accent 
                  placeholder:text-white/50"
                />
              </div>
              {/* button */}
              <button className="btn btn-lg btn-accent">
                <div className="flex items-center gap-3">
                  <span className="font-medium">Envoyer le message</span>
                  <HiOutlineArrowLongRight className="text-xl" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </motion.section>
  );
};

export default Contact;