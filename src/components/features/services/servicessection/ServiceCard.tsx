import { motion } from 'framer-motion';

interface ServiceCardProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    features: string[];
    index: number;
}

export const ServiceCard = ({ icon: Icon, title, features, index }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
            <div className="flex justify-center mb-6">
                <Icon className="w-14 h-14 text-[#d4a574]" />
            </div>

            <h3 className="text-lg font-bold text-[#1a3a52] dark:text-white mb-5 text-center" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                {title}
            </h3>
            <ul className="space-y-2.5">
                {features.map((feature, idx) => (
                    <li
                        key={idx}
                        className="text-gray-500 dark:text-gray-400 text-sm text-center leading-relaxed"
                        style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                    >
                        {feature}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};
