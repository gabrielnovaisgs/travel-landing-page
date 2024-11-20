export default function PrimaryButton({ children }: { children: React.ReactNode }) {
    return (
        <button
            className="bg-primary text-white rounded-full px-4 py-2 shadow-md
                    hover:bg-primary/90  transition-all duration-300"
        >
            {children}
        </button>
    );
}