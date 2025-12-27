import { useTranslation } from '../../../../i18n';

interface NavLink {
    id: string;
    label: string;
    href: string;
}

export const NavLinks = () => {
    const { t } = useTranslation('navbar');

    // Get links from translation - now t() returns the actual array
    const links: NavLink[] = t('links', []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex items-center gap-8">
            {Array.isArray(links) && links.map((link) => (
                <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-gray-700 dark:text-gray-300 hover:text-[#d4a574] transition-colors duration-300 text-sm font-medium"
                    style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
};
