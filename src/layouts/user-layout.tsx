import { useStateContext } from '../context/context-provider';
import '../tailwind.css';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';

type Props = {
    children: React.ReactNode;
}

export const UserLayout: React.FC<Props> = ({ children } : Props) => {
    const { username } = useStateContext();

    return (
        <>
            <Sidebar />
                <div className="ml-64">
                    <Header username={username} />
                    <main className="flex flex-col gap-4 mt-16 w-full">
                        <div className="p-4">{children}</div>
                    </main>
                </div>
        </>
    );

}