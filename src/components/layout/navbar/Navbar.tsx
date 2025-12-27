import { useState, useEffect } from 'react';
import { Logo } from './navbarsection/Logo';
import { NavLinks } from './navbarsection/NavLinks';
import { CTAButton } from './navbarsection/CTAButton';
import { LanguageSelector } from './navbarsection/LanguageSelector';
import { MenuButton } from './navbarsection/MenuButton';
import { MobileSidebar } from './navbarsection/MobileSidebar';
import { useMobileMenu } from '../../../hooks/useMobileMenu';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-md'
                    : 'bg-white/95 backdrop-blur-sm'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Logo />

                        <div className="hidden lg:flex items-center gap-8">
                            <NavLinks />
                        </div>

                        <div className="hidden lg:flex items-center gap-3">
                            <LanguageSelector />
                            <CTAButton />
                        </div>

                        <div className="flex lg:hidden items-center gap-2">
                            <LanguageSelector />
                            <MenuButton isOpen={isOpen} onClick={toggleMenu} />
                        </div>
                    </div>
                </div>
            </nav>

            <MobileSidebar isOpen={isOpen} onClose={closeMenu} />
        </>
    );
};
