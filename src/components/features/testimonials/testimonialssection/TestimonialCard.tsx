import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import { FaUserTie, FaUserAlt } from 'react-icons/fa';

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
    index: number;
}

export const TestimonialCard = ({ name, role, content, rating, index }: TestimonialCardProps) => {
    const isFemale = name.includes('سارة') || name.includes('فاطمة') || name.includes('نورة') ||
        name.includes('Sarah') || name.includes('Fatima') || name.includes('Noura');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mx-3 h-full flex flex-col"
        >
            {/* Stars Rating */}
            <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-[#d4a574]" />
                ))}
            </div>

            {/* Testimonial Content */}
            <p
                className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8 flex-1 text-center"
                style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
            >
                "{content}"
            </p>

            {/* Client Info */}
            <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-[#1a3a52] dark:bg-[#d4a574] rounded-full flex items-center justify-center mb-3">
                    {isFemale ? (
                        <FaUserAlt className="w-7 h-7 text-white" />
                    ) : (
                        <FaUserTie className="w-7 h-7 text-white" />
                    )}
                </div>
                <h4 className="font-bold text-[#1a3a52] dark:text-white text-base mb-1" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {name}
                </h4>
                <p className="text-xs text-[#d4a574]" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                    {role}
                </p>
            </div>
        </motion.div>
    );
};
