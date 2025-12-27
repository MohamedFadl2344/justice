import { AboutImage } from './aboutsection/AboutImage';
import { AboutContent } from './aboutsection/AboutContent';

export const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="order-2 lg:order-1">
                        <AboutContent />
                    </div>
                    <div className="order-1 lg:order-2">
                        <AboutImage />
                    </div>
                </div>
            </div>
        </section>
    );
};
