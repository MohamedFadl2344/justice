import { HiMenu } from 'react-icons/hi';

interface MenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="lg:hidden w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            <HiMenu className="w-6 h-6 text-gray-700" />
        </button>
    );
};
