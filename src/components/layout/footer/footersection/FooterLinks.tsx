import { useTranslation } from '../../../../i18n';

interface FooterLink {
    id: string;
    label: string;
}

export const FooterLinks = () => {
    const { t } = useTranslation('footer');

    const links: FooterLink[] = t('quickLinks.links', []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, linkId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(linkId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1a3a52] dark:text-white" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                {t('quickLinks.title')}
            </h3>
            <ul className="space-y-2">
                {Array.isArray(links) && links.map((link) => (
                    <li key={link.id}>
                        <a
                            href={`#${link.id}`}
                            onClick={(e) => handleClick(e, link.id)}
                            className="text-gray-600 dark:text-gray-400 hover:text-[#d4a574] transition-colors text-sm"
                            style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
