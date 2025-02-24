import '../tailwind.css';
import { Button } from './button';
import { useStateContext } from '../context/context-provider';
import { LogoutClient } from '../services/client/logoutClient';


type HeaderProps = {
    username?: string,
    imageUrl?: string,
    loading?: boolean
}

export function Header ({username, loading}: HeaderProps) {
    const { token, setToken } = useStateContext();

    const handleLogout = async () => {
        if(window.confirm('Are you sure you want to logout?')) {
          await LogoutClient({ token, setToken });
        }
    }

    return (
        <header className="flex items-center justify-between p-4 absolute top-0 bg-gray-900 text-white w-full sm:pl-68">
            <h2>{loading || !username ? 'Loading...' : 'Welcome, ' + username}</h2>
            <Button text="Logout" onClick={handleLogout} />
        </header>
    )
}

export default Header;