import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';

export const FooterContact = () => {
    const contacts = [
        {
            id: 1,
            icon: HiPhone,
            label: '+966 50 123 4567',
            href: 'tel:+966501234567',
        },
        {
            id: 2,
            icon: HiMail,
            label: 'info@justice-law.sa',
            href: 'mailto:info@justice-law.sa',
        },
        {
            id: 3,
            icon: HiLocationMarker,
            label: 'الرياض، المملكة العربية السعودية',
            href: null,
        },
    ];

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">تواصل معنا</h3>
            <ul className="space-y-3">
                {contacts.map((contact) => {
                    const Icon = contact.icon;
                    const content = (
                        <div className="flex items-start gap-3 text-gray-300 hover:text-[#d4a574] transition-colors duration-300">
                            <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{contact.label}</span>
                        </div>
                    );

                    return (
                        <li key={contact.id}>
                            {contact.href ? (
                                <a href={contact.href}>{content}</a>
                            ) : (
                                <div>{content}</div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
