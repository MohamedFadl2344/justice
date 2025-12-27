import { Navbar } from '../components/layout/navbar/Navbar';
import { Hero } from '../components/features/hero/Hero';
import { About } from '../components/features/about/About';
import { Services } from '../components/features/services/Services';
import { Statistics } from '../components/features/statistics/Statistics';
import { Testimonials } from '../components/features/testimonials/Testimonials';
import { Contact } from '../components/features/contact/Contact';
import { Footer } from '../components/layout/footer/Footer';

export const Home = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Statistics />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};
