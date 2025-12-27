export const SimpleLoader = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
                {/* Logo Icon */}
                <div className="mb-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] rounded-2xl flex items-center justify-center shadow-xl">
                        <svg className="w-12 h-12 text-[#d4a574]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* Simple CSS Spinner - No Text */}
                <div className="flex justify-center gap-2">
                    <div className="w-3 h-3 bg-[#d4a574] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-3 h-3 bg-[#d4a574] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-3 h-3 bg-[#d4a574] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
};
