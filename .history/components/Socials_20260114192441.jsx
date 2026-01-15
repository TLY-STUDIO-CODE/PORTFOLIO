import { 
    BiLogoFacebook, 
    BiLogoInstagramAlt, 
    BiLogoDribbble, 
    BiLogoLinkedin,
} from "react-icons/bi";

const socials = [
    {
        icon: <BiLogoFacebook />,
        path: "https://web.facebook.com/yasser.raza.581689/",
    },
    {
        icon: <BiLogoInstagramAlt />,
        path: "https://www.instagram.com/tly_studio_code143",
    },
    {
        icon: <BiLogoDribbble />,
        path: "https://discord.gg/5Kz8maD7",
    },
    {
        icon: <BiLogoLinkedin />,
        path: "https://www.linkedin.com/in/tsilaky143",
    },
];

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index)=> {
                return (
                    <div key={index} className={iconStyles}>
                        {item.icon}
                    </div>
                );
            })}
        </div>
    );
};

export default Socials;