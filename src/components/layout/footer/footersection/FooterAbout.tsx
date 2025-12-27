import { HiScale } from 'react-icons/hi';
import { useTranslation } from '../../../../i18n';

export const FooterAbout = () => {
    const { t } = useTranslation('footer');

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#d4a574] rounded-lg flex items-center justify-center">
                    <HiScale className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold text-[#1a3a52] dark:text-white" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                        {t('about.title')}
                    </span>
                </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                {t('about.description')}
            </p>
        </div>
    );
};
