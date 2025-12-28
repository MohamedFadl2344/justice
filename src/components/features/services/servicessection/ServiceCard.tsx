import { motion } from 'framer-motion';
import { useAnimations } from '../../../../hooks/useAnimations';

interface ServiceCardProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    features: string[];
    index: number;
}

export const ServiceCard = ({ icon: Icon, title, features, index }: ServiceCardProps) => {
    const animations = useAnimations();

    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={animations.fadeInUp}
            transition={{ ...animations.transitions.default, delay: index * 0.1 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
        >
            <div className="flex justify-center mb-6">
                <Icon className="w-14 h-14 text-[#d4a574]" />
            </div>

            <h3 className="text-lg font-bold text-[#1a3a52] mb-5 text-center" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                {title}
            </h3>
            <ul className="space-y-2.5">
                {features.map((feature, idx) => (
                    <li
                        key={idx}
                        className="text-gray-500 text-sm text-center leading-relaxed"
                        style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
                    >
                        {feature}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};
