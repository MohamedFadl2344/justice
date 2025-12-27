import { HeroBackground } from './herosection/HeroBackground';
import { HeroContent } from './herosection/HeroContent';
import { HeroActions } from './herosection/HeroActions';

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
            <HeroBackground />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <HeroContent />
                <HeroActions />
            </div>
        </section>
    );
};
