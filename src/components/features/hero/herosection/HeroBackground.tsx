export const HeroBackground = () => {
    return (
        <div className="absolute inset-0">
            <img
                src="/image/hero/hero.webp"
                alt="Law office background"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a52]/95 via-[#1a3a52]/90 to-[#1a3a52]/95" />
        </div>
    );
};
