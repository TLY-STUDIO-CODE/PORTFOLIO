import CountUp from "react-countup";

const Stats = () => {
    // Formatting function to add a leading zero if the number is less than 10
    const formatNumber = (value) => {
        return value.toString().padStart(2, '0');
    };
    return (
        <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
            <div className="flex gap-4">
                <div className="text-5xl font-bold text-accent flex">
                    {/* Appliquer la fonction de formatage ici */}
                    <CountUp end={2} duration={5} delay={2} className="block w-[60px]" formattingFn={formatNumber} />
                    <div>+</div>
                </div>
                <span>
                    Années <br /> Expérience
                </span>
            </div>

            <div className="flex gap-4">
                <div className="text-5xl font-bold text-accent flex">
                    <CountUp end={10} duration={5} delay={2} className="block w-[60px]" formattingFn={formatNumber} />
                </div>
                <span>
                    Clients <br /> Global
                </span>
            </div>
        </div>
    );
};

export default Stats;