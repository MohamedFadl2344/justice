import { useTranslation } from '../../../../i18n';

export const FooterBottom = () => {
    const { t } = useTranslation('footer');


    return (
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-right" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    © 2025 {t('bottom.copyright')}
                </p>

                <div className="flex items-center gap-6">
                    <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-[#d4a574] transition-colors duration-300 text-sm"
                        style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                    >
                        {t('bottom.privacy')}
                    </a>
                    <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-[#d4a574] transition-colors duration-300 text-sm"
                        style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                    >
                        {t('bottom.terms')}
                    </a>
                </div>
            </div>
        </div>
    );
};
