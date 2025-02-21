import '../tailwind.css';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';

type Props = {
    children: React.ReactNode;
}

export const UserLayout = ({ children } : Props) => {

    return (
        <>
            <Sidebar />
            <div className="ml-64">
                <Header username="John Doe" />
                <div className="p-4">{children}</div>
            </div>
        </>
    );

}