import {
    RiReactjsFill, 
    RiNextjsFill, 
    RiHtml5Fill, 
    RiCss3Fill, 
    RiTailwindCssFill, 
    RiNodejsFill,
} from "react-icons/ri";

import {
    SiPhp, // Logo officiel PHP
    SiLaravel, // Logo officiel Laravel
    SiCodeigniter, // Logo officiel CodeIgniter
    SiSymfony, // Logo officiel Symfony
    SiExpress, // Logo officiel Express.js
    SiJavascript, // Logo officiel JavaScript
    SiTypescript, // Logo officiel TypeScript
} from "react-icons/si";

// J'ajoute RiDatabaseFill pour les bases de données (MySQL/PostgreSQL) qui n'ont pas toujours d'icône Simple Icons pour rester cohérent.
import {
    RiDatabaseFill,
} from "react-icons/ri";

import {
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
    {
        icon: <RiReactjsFill />,
        name: "React.js",
    },
    {
        icon: <RiNextjsFill />,
        name: "Next.js",
    },
    {
        icon: <RiHtml5Fill />,
        name: "HTML 5",
    },
    {
        icon: <RiCss3Fill />,
        name: "CSS 3",
    },
    {
        icon: <RiTailwindCssFill />,
        name: "Tailwind CSS",
    },
    {
        icon: <RiNodejsFill />,
        name: "Node.js",
    },
    {
        icon: <SiJavascript />,
        name: "JavaScript (ES6+)",
    },
    {
        icon: <SiTypescript />, // Ajout recommandé
        name: "TypeScript",
    },
    {
        icon: <SiExpress />,
        name: "Express.js",
    },
    {
        icon: <SiPhp />,
        name: "PHP (POO)",
    },
    {
        icon: <SiLaravel />,
        name: "Laravel",
    },
    {
        icon: <SiCodeigniter />,
        name: "Codeigniter",
    },
    {
        icon: <SiSymfony />,
        name: "Symfony",
    },
    {
        icon: <RiDatabaseFill />,
        name: "MySQL / PostgreSQL",
    },
];

const Skills = () => {
    return (
        <div>
            <h2 className="h2 mb-8">
                My <span className="text-accent">Skills</span>
            </h2>
            <div>
                {skills.map((item, index) => {
                    return (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div>{item.icon}</div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;