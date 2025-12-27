import { useTranslation } from '../../../../i18n';

export const CTAButton = () => {
    const { t } = useTranslation('navbar');

    const handleClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button
            onClick={handleClick}
            className="px-5 py-2.5 bg-[#d4a574] hover:bg-[#c49563] text-white rounded-lg transition-colors duration-300 text-sm font-medium whitespace-nowrap"
            style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
        >
            {t('cta')}
        </button>
    );
};
