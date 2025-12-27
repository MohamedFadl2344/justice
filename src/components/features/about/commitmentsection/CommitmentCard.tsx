import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

interface CommitmentCardProps {
    title: string;
    description: string;
    index: number;
}

export const CommitmentCard = ({ title, description, index }: CommitmentCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
            <div className="flex-shrink-0">
                <HiCheckCircle className="w-6 h-6 text-[#d4a574]" />
            </div>
            <div>
                <h4 className="font-bold text-[#1a3a52] dark:text-white mb-1">
                    {title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};
