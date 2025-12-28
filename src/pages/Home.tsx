import { Navbar } from '../components/layout/navbar/Navbar';
import { lazy, Suspense } from 'react';
import { Hero } from '../components/features/hero/Hero';
import { About } from '../components/features/about/About';
import { Services } from '../components/features/services/Services';
import { Statistics } from '../components/features/statistics/Statistics';

// Lazy load heavy components
const Testimonials = lazy(() => import('../components/features/testimonials/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import('../components/features/contact/Contact').then(module => ({ default: module.Contact })));

// Simple loading fallback
const LoadingFallback = () => (
    <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
);
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
                <Suspense fallback={<LoadingFallback />}>
                    <Testimonials />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                    <Contact />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};
