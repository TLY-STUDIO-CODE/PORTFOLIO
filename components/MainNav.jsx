"use client";
import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { MdFileDownload } from "react-icons/md";

const MainNav = () => {
    const handleDownload = () => {
        const fileUrl = "/assets/Docs/DEVELOPPEUR_FULLSTACK_JS_TS.pdf";
        const fileName = "DEVELOPPEUR_FULLSTACK_JS_TS.pdf";

        
        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", fileName);
        link.setAttribute("target", "_blank"); 
        
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return ( 
        <nav className="w-full pt-16">
            <div className="flex flex-col h-full items-center justify-between">
                <Logo />
                <NavLinks containerStyles="flex flex-col gap-6" />
                <button 
                    onClick={handleDownload} 
                    className="btn btn-lg btn-tertiary mb-16"
                    aria-label="Télécharger mon CV"
                >
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