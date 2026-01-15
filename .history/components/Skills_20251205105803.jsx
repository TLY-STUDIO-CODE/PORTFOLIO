import {
    RiReactjsFill, 
    RiNextjsFill, 
    RiHtml5Fill, 
    RiCss3Fill, 
    RiTailwindCssFill, 
    RiNodejsFill,
} from "react-icons/ri";

import {
    SiPhp, 
    SiLaravel, 
    SiCodeigniter, 
    SiSymfony, 
    SiExpress, 
    SiJavascript, 
    SiTypescript, 
    SiGit, 
    SiDocker, 
    SiJenkins, 
    SiPostman, 
    SiRest, 
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
        icon: <SiExpress />,
        name: "Express.js",
    },
    {
        icon: <SiJavascript />,
        name: "JavaScript",
    },
    {
        icon: <SiTypescript />, 
        name: "TypeScript",
    },
    {
        icon: <SiPhp />,
        name: "PHP",
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
        icon: <SiRest />,
        name: "RESTful APIs / GraphQL" 
    }, 
    { 
        icon: <SiPostman />, 
        name: "Postman" 
    },
    {   
        icon: <SiGit />, 
        name: "Git / GitHub / GitLab"
    }, 
    { 
        icon: <SiDocker />, 
        name: "Docker" 
    },
    { 
        icon: <SiJenkins />, 
        name: "Jenkins / Jira" 
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