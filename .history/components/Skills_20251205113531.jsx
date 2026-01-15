import {
    RiReactjsFill, 
    RiNextjsFill, 
    RiHtml5Fill, 
    RiCss3Fill, 
    RiTailwindCssFill, 
    RiNodejsFill,
} from "react-icons/ri";

import {
    SiLaravel, 
    SiCodeigniter, 
    SiSymfony, 
    SiExpress, 
    SiGit, 
    SiDocker,  
    SiMysql, 
    SiPostgresql,
} from "react-icons/si";

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
        icon: <RiNodejsFill />,
        name: "Node.js",
    },
    {
        icon: <SiExpress />,
        name: "Express.js",
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
        icon: <SiGit />, 
        name: "Git"
    }, 
    { 
        icon: <SiDocker />, 
        name: "Docker" 
    },
    { 
        icon: <SiMysql />, 
        name: "MySQL", 
    },
    { 
        icon: <SiPostgresql />, 
        name: "PostgreSQL", 
    },
];

const Skills = () => {
    return (
        <div>
            <h2 className="h2 mb-8">
                Mes <span className="text-accent">Compétences</span>
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
                                    <p className="text-lg">{item.name}</p>
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