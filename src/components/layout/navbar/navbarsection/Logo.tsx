import { HiScale } from 'react-icons/hi';
import { useTranslation } from '../../../../i18n';

export const Logo = () => {
    const { t } = useTranslation('navbar');

    return (
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#d4a574] rounded-lg flex items-center justify-center">
                <HiScale className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold text-[#1a3a52] dark:text-white" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {t('logo.title')}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {t('logo.subtitle')}
                </span>
            </div>
        </div>
    );
};
