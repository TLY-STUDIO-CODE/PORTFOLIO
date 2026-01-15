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
    SiPhp,
    SiJenkins,
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
    { 
        icon: <SiPhp />, 
        name: "PHP", 
    },
    { 
        icon: <SiJenkins />, 
        name: "Jenkins", 
    },

];

const Skills = () => {
    return (
        <div>
            <h2 className="h2 mb-8">
                Mes <span className="text-accent">Compétences</span>
            </h2>
            <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
                {skills.map((item, index) => {
                    return (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                                    <div className="text-3xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
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