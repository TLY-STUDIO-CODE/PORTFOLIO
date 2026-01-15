import CountUp from "react-countup";

const Stats = () => {
    // Fonction de formatage pour ajouter un zéro en tête si le nombre est inférieur à 10
    const formatNumber = (value) => {
        return value.toString().padStart(2, '0');
    };

    return (
        <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
            <div className="flex gap-4">
                <div className="text-5xl font-bold text-accent flex">
                    {/* Appliquer la fonction de formatage ici */}
                    <CountUp 
                        end={2} 
                        duration={5} 
                        delay={2} 
                        className="block w-[60px]" 
                        formattingFn={formatNumber} // <-- Ajout de la prop
                    />
                    <div>+</div>
                </div>
                <span>
                    Années <br /> Expérience
                </span>
            </div>

            <div className="flex gap-4">
                <div className="text-5xl font-bold text-accent flex">
                    {/* On peut appliquer la même fonction au second CountUp si vous voulez "10" rester "10" */}
                    <CountUp 
                        end={10} 
                        duration={5} 
                        delay={2} 
                        className="block w-[60px]" 
                        formattingFn={formatNumber} // Le 10 restera 10 car 10.toString().padStart(2, '0') est "10"
                    />
                </div>
                <span>
                    Clients <br /> Global
                </span>
            </div>
        </div>
    );
};

export default Stats;