import { FooterAbout } from './footersection/FooterAbout';
import { FooterLinks } from './footersection/FooterLinks';
import { FooterServices } from './footersection/FooterServices';
import { FooterSocial } from './footersection/FooterSocial';
import { FooterBottom } from './footersection/FooterBottom';

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <FooterAbout />
                    <FooterLinks />
                    <FooterServices />
                    <FooterSocial />
                </div>
                <FooterBottom />
            </div>
        </footer>
    );
};
