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
    TooltipTrigger
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
        name: "Bootstrap",
    },
    {
        icon: <RiCodeSSlashFill />,
        name: "PHP",
    },
    {
        icon: <RiLeafFill />,
        name: "Codeigniter",
    },
    {
        icon: <RiLeafFill />,
        name: "Laravel",
    },
    {
        icon: <RiStackFill />,
        name: "Express.js",
    },
    {
        icon: <RiDatabaseFill />,
        name: "MySQL",
    },
    {
        icon: <RiDatabaseFill />,
        name: "PostgreSQL",
    },
    {
        icon: <RiGitFill />,
        name: "Git",
    },
    {
        icon: <RiGithubFill />,
        name: "GitLab/GitHub",
    },
    {
        icon: <RiDockerFill />,
        name: "Docker",
    },
    {
        icon: <RiJenkinsFill />,
        name: "RESTful APIs",
    },
    {
        icon: <RiStackFill />,
        name: "Architecture MVC",
    },
    {
        icon: <RiJenkinsFill />,
        name: "Agile Scrum",
    },
    {
        icon: <RiCodeSSlashFill />,
        name: "Wordpress",
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