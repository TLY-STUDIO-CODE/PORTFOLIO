const journey = [
    {
        years: "2024 - Aujourd'hui",
        role: "Ingénieur en Informatique",
        institution: "École Nationale d'Informatique",
    },
    {
        years: "2023 - 2024",
        role: "Master Professionnel",
        institution: "École Nationale d'Informatique",
    },
    {
        years: "2021 - 2022",
        role: "Licence Professionnelle",
        institution: "École Nationale d'Informatique",
    },
    {
        years: "2017 - 2018",
        role: "Baccalauréat en Série C",
        institution: "Lycée Privé Catholique Notre Dame",
    },
];

const Journey = () => {
    return (
        <div className="flex flex-col">
            <h2 className="h2 mb-8">
                Formation <span className="text-accent">Académique</span>
            </h2>
            {
                journey.map((item, index) => {
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

export default Journey;