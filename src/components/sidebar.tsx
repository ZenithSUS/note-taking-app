import '../tailwind.css';
import { Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
    return (
        <div className="flex flex-col h-screen p-4 bg-gray-900 text-white w-64 absolute top-0 left-0 border-r z-10">
            <div className="flex items-center mb-4">
                <h1 className="text-2xl font-bold">Note Taking App</h1>
            </div>
            <ul className="space-y-2 text-1xl">
                <li>
                    <Link to ="/" className="block py-2 p-2 hover:bg-gray-700">Dashboard</Link>
                </li>
                <li>
                    <Link to="/notes" className="block py-2 p-2 hover:bg-gray-700">Notes</Link>
                </li>
                <li>
                    <Link to="/settings" className="block py-2 p-2 hover:bg-gray-700">Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;