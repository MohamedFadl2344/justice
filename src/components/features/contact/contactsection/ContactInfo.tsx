import { motion } from 'framer-motion';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { ContactMap } from './ContactMap';
import { useTranslation } from '../../../../i18n';

export const ContactInfo = () => {
    const { t } = useTranslation('contact');

    const contactDetails = [
        {
            id: 1,
            icon: HiLocationMarker,
            title: t('info.address.title'),
            value: t('info.address.value'),
        },
        {
            id: 2,
            icon: HiPhone,
            title: t('info.phone.title'),
            value: t('info.phone.value'),
        },
        {
            id: 3,
            icon: HiMail,
            title: t('info.email.title'),
            value: t('info.email.value'),
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
        >
            <div className="bg-[#1a3a52] p-10 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {t('info.title')}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {t('info.description')}
                </p>

                <div className="space-y-6">
                    {contactDetails.map((detail, index) => {
                        const Icon = detail.icon;
                        return (
                            <motion.div
                                key={detail.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <Icon className="w-6 h-6 text-[#d4a574]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1 text-sm" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                                        {detail.title}
                                    </h4>
                                    <p className="text-gray-300 text-sm" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                                        {detail.value}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <ContactMap />
        </motion.div>
    );
};
