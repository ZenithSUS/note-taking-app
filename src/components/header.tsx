import '../tailwind.css';

type HeaderProps = {
    username: string | null,
    imageUrl?: string,
}

export function Header ({username}: HeaderProps) {
    return (
        <header className="flex justify-between p-4 absolute top-0 bg-gray-900 text-white w-full pl-68">
            <h2>Welcome, {username || 'Anonymous'}</h2>
        </header>
    )
}

export default Header;