import '../tailwind.css';

export const Sidebar = () => {
    return (
        <div className="flex flex-col h-screen p-4 bg-gray-900 text-white w-64 absolute top-0 left-0 border-r">
            <div className="flex items-center mb-4">
                <h1 className="text-2xl font-bold">Note Taking App</h1>
            </div>
            <ul className="space-y-2 text-1xl">
                <li>
                    <a href="#" className="block py-2 p-2 hover:bg-gray-700">Dashboard</a>
                </li>
                <li>
                    <a href="#" className="block py-2 p-2 hover:bg-gray-700">Notes</a>
                </li>
                <li>
                    <a href="#" className="block py-2 p-2 hover:bg-gray-700">Settings</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;