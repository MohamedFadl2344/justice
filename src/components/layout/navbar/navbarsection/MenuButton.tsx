import { HiMenu, HiX } from 'react-icons/hi';

interface MenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="lg:hidden w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            {isOpen ? (
                <HiX className="w-6 h-6 text-gray-700 dark:text-white" />
            ) : (
                <HiMenu className="w-6 h-6 text-gray-700 dark:text-white" />
            )}
        </button>
    );
};
