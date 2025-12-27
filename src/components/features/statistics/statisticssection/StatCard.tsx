import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatCardProps {
    value: string;
    label: string;
    index: number;
}

export const StatCard = ({ value, label, index }: StatCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState('0');

    useEffect(() => {
        if (isInView) {
            // Simply display the value as-is from translation
            setDisplayValue(value);
        }
    }, [isInView, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm"
        >
            <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-4xl md:text-5xl font-bold text-[#d4a574] mb-2"
                style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}
            >
                {displayValue}
            </motion.div>
            <p className="text-gray-300 text-sm md:text-base" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
                {label}
            </p>
        </motion.div>
    );
};
