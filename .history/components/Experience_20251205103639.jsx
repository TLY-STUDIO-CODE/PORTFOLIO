const experience = [
    {
        years: "Avr. 2025 - Sept. 2025",
        role: "Développeur Full-Stack",
        institution: "Manao Mada SARL",
    },
    {
        years: "Fév. 2025 - Août 2025",
        role: "Développeur Full-Stack",
        institution: "ONG Ndao Hifanosika",
    },
    {
        years: "Avr. 2024 - Nov. 2024",
        role: "Développeur Full-Stack",
        institution: "Origami Tech SARL",
    },
    {
        years: "Avr. 2023 - Nov. 2023",
        role: "Développeur Full-Stack",
        institution: "Ecole Nationale d'Informatique",
    },
    {
        years: "Avr. 2022 - Nov. 2022",
        role: "Développeur Full-Stack",
        institution: "Diréction Régionale des Impôts",
    },
    {
        years: "Avr. 2021 - Nov. 2021",
        role: "Développeur Full-Stack",
        institution: "Ministère de l'Education Nationale",
    },
];

const Experience = () => {
    return (
        <div className="flex flex-col">
            <h2 className="h2 mb-8">
                Expérience & <span className="text-accent">Professionnelle</span>
            </h2>
            {
                experience.map((item, index) => {
                    const {institution, role, years} = item;
                    return (
                        <div key={index} className="flex items-center gap-12 w-full">
                            {/* bullets */}
                            <div className="flex flex-col w-max justify-center items-center">
                                <div className="w-3 h-3 bg-accent rounded-full"></div>
                                <div className="w-[1px] h-[180px] bg-white/10"></div>
                            </div>
                            {/* text */}
                            <div className="max-w-[500px]">
                                <p className="mb-6 text-lg text-white/50">{years}</p>
                                <h4 className="h4 mb-2">{role}</h4>
                                <p className="text-lg text-white/50">{institution}</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Experience;