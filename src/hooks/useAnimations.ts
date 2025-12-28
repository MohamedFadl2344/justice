import type { Variants } from 'framer-motion';

/**
 * Centralized animation configurations for consistent motion design
 * All animations are optimized for performance using GPU-accelerated properties
 */
export const useAnimations = () => {
    // Fade Animations
    const fadeIn: Variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const fadeInUp: Variants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    };

    const fadeInDown: Variants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    // Slide Animations
    const slideInLeft: Variants = {
        initial: { x: -50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: -50, opacity: 0 },
    };

    const slideInRight: Variants = {
        initial: { x: 50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 50, opacity: 0 },
    };

    // Scale Animations
    const scaleIn: Variants = {
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.9, opacity: 0 },
    };

    const scaleUp: Variants = {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.8, opacity: 0 },
    };

    // Stagger Container (for lists/grids)
    const staggerContainer: Variants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const staggerItem: Variants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    // Card Hover Animation
    const cardHover = {
        rest: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    // Transition configurations
    const transitions = {
        default: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number] },
        fast: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number] },
        slow: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number] },
        spring: { type: 'spring' as const, stiffness: 200, damping: 25 },
    };

    return {
        // Fade
        fadeIn,
        fadeInUp,
        fadeInDown,

        // Slide
        slideInLeft,
        slideInRight,

        // Scale
        scaleIn,
        scaleUp,

        // Stagger
        staggerContainer,
        staggerItem,

        // Hover
        cardHover,

        // Transitions
        transitions,
    };
};
