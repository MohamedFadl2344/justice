import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useAnimations } from '../../../../hooks/useAnimations';

interface StatCardProps {
    value: string;
    label: string;
    index: number;
}

export const StatCard = ({ value, label, index }: StatCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState('0');
    const animations = useAnimations();

    useEffect(() => {
        if (isInView) {
            // Simply display the value as-is from translation
            setDisplayValue(value);
        }
    }, [isInView, value]);

    return (
        <motion.div
            ref={ref}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={animations.fadeInUp}
            transition={{ ...animations.transitions.default, delay: index * 0.1 }}
            className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm"
        >
            <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={animations.scaleIn}
                transition={{ ...animations.transitions.fast, delay: index * 0.1 + 0.2 }}
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
