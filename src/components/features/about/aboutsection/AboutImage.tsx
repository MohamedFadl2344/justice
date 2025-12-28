import { motion } from 'framer-motion';
import { useAnimations } from '../../../../hooks/useAnimations';

export const AboutImage = () => {
    const animations = useAnimations();

    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={animations.fadeInUp}
            transition={animations.transitions.default}
            className="relative"
        >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                    src="/image/about/whyabout.webp"
                    alt="Law office professional"
                    width="665"
                    height="879"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '665 / 879' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/20 to-transparent"></div>
            </div>
        </motion.div>
    );
};
