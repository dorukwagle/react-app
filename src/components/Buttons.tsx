interface Props {
    children: string;
    color?: "red" | "green" | "blue" | "purple";
    onClick?: () => void;
}

const map = new Map();
map.set(
    "red",
    "bg-red-700 hover:bg-red-900 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-800 dark:focus:ring-red-900"
);
map.set(
    "purple",
    "bg-purple-700 hover:bg-purple-900 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-800 dark:focus:ring-purple-900"
);
map.set(
    "green",
    "bg-green-700 hover:bg-green-900 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-800 dark:focus:ring-green-900"
);
map.set(
    "blue",
    "bg-purple-700 hover:bg-purple-900 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-800 dark:focus:ring-purple-900"
);

const ButtonPrimary = ({ children, onClick, color="red" }: Props) => {
    const className = `focus:outline-none text-white focus:ring-4 ${map.get(color)} font-bold rounded-full text-sm px-5 py-2.5 mb-2`;

    return (
        <button
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    );
}

export default ButtonPrimary;
