import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from '../../../../i18n';

export const FooterSocial = () => {
    const { t } = useTranslation('footer');

    const socialLinks = [
        { id: 1, icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
        { id: 2, icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
        { id: 3, icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
        { id: 4, icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
    ];

    return (
        <div>
            <h3 className="text-lg font-bold text-[#1a3a52] dark:text-white mb-4" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                {t('social.title')}
            </h3>
            <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                        <a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-[#d4a574] dark:hover:bg-[#d4a574] rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300"
                            aria-label={social.label}
                        >
                            <Icon className="w-4 h-4" />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
