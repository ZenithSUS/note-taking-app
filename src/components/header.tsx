import '../tailwind.css';
import { Button } from './button';
import { useStateContext } from '../context/context-provider';
import { LogoutClient } from '../services/logoutClient';

type HeaderProps = {
    username: string | null,
    imageUrl?: string,
}

export function Header ({username}: HeaderProps) {
    const { token, setToken } = useStateContext();

    const handleLogout = async () => {
        if(window.confirm('Are you sure you want to logout?')) {
          await LogoutClient({ token, setToken });
        }
    }

    return (
        <header className="flex items-center justify-between p-4 absolute top-0 bg-gray-900 text-white w-full pl-68">
            <h2>Welcome, {username || 'Anonymous'}</h2>
            <Button text="Logout" onClick={handleLogout} />
        </header>
    )
}

export default Header;