"use client";
import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { MdFileDownload } from "react-icons/md";

const MainNav = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        // Chemin correct vers votre dossier public
        link.href = "/assets/Docs/CV_TSILAKY_DEV_FULLSTACK.pdf"; 
        link.download = "CV_TSILAKY_DEV_FULLSTACK.pdf";
        link.click();
    };
    return ( 
        <nav className="w-full pt-16">
            <div className="flex flex-col h-full items-center justify-between">
            <Logo />
            <NavLinks containerStyles="flex flex-col gap-6" />
            <button onClick={handleDownload} className="btn btn-lg btn-tertiary mb-16">
                <div className="flex items-center gap-3">
                    <span>Télécharger CV</span>
                    <MdFileDownload className="text-xl" />
                </div>
            </button>
            </div>
        </nav>
        );
};

export default MainNav;