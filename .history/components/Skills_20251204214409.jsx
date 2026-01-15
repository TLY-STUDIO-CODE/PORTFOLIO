import {
    RiReactjsFill, 
    RiNextjsFill, 
    RiHtml5Fill, 
    RiCss3Fill, 
    RiTailwindCssFill, 
    RiNodejsFill,
    RiJavascriptFill,
    RiBootstrapFill,
    RiCodeSSlashFill,
    RiLeafFill,
    RiStackFill,
    RiDatabaseFill,
    RiGitFill,
    RiGithubFill,
    RiDockerFill,
    RiJenkinsFill,
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
        icon: <RiJavascriptFill />,
        name: "JavaScript",
    },
    {
        icon: <RiBootstrapFill />,
        name: "Node.js",
    },
    {
        icon: <RiCodeSSlashFill />,
        name: "Node.js",
    },
    /*
    {
        icon: <RiLeafFill />,
        name: "Node.js",
    },
    {
        icon: <RiStackFill />,
        name: "Node.js",
    },
    {
        icon: <RiDatabaseFill />,
        name: "Node.js",
    },
    {
        icon: <RiGitFill />,
        name: "Node.js",
    },
    {
        icon: <RiGithubFill />,
        name: "Node.js",
    },
    {
        icon: <RiDockerFill />,
        name: "Node.js",
    },
    {
        icon: <RiJenkinsFill />,
        name: "Node.js",
    },
    */
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