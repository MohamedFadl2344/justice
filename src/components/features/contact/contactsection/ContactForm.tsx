import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from '../../../../i18n';

export const ContactForm = () => {
    const { t } = useTranslation('contact');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        caseType: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const caseTypes = t('form.caseTypes', []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg"
        >
            <div className="mb-8">
                <p className="text-[#d4a574] text-sm mb-2" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {t('form.subtitle')}
                </p>
                <h3 className="text-2xl font-bold text-[#1a3a52] dark:text-white" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {t('form.title')}
                </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-right" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                            {t('form.fields.firstName.label')}
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#d4a574] focus:border-transparent transition-all duration-300"
                            placeholder={t('form.fields.firstName.placeholder')}
                            style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-right" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                            {t('form.fields.lastName.label')}
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#d4a574] focus:border-transparent transition-all duration-300"
                            placeholder={t('form.fields.lastName.placeholder')}
                            style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-right" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                        {t('form.fields.email.label')}
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#d4a574] focus:border-transparent transition-all duration-300"
                        placeholder={t('form.fields.email.placeholder')}
                        style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-right" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                        {t('form.fields.caseType.label')}
                    </label>
                    <select
                        name="caseType"
                        value={formData.caseType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#d4a574] focus:border-transparent transition-all duration-300"
                        style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                    >
                        {Array.isArray(caseTypes) && caseTypes.map((caseType: any, index: number) => (
                            <option key={index} value={caseType.value}>
                                {caseType.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-right" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                        {t('form.fields.message.label')}
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#d4a574] focus:border-transparent transition-all duration-300 resize-none"
                        placeholder={t('form.fields.message.placeholder')}
                        style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#1a3a52] hover:bg-[#2a4a62] text-white px-6 py-4 rounded-lg font-medium transition-colors duration-300 text-base"
                    style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                >
                    {t('form.submit')}
                </button>
            </form>
        </motion.div>
    );
};
