import { ContactForm } from './contactsection/ContactForm';
import { ContactInfo } from './contactsection/ContactInfo';
import { SectionHeader } from '../services/servicessection/SectionHeader';
import { useTranslation } from '../../../i18n';

export const Contact = () => {
    const { t } = useTranslation('contact');

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    badge={t('badge')}
                    title={t('title')}
                    centered={true}
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};
