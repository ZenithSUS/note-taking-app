import { useStateContext } from '../context/context-provider';
import '../tailwind.css';
import { MainWrapper } from '../components/main-wrapper';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { Navigate } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
}

export const UserLayout: React.FC<Props> = ({ children } : Props) => {
    const { token, username } = useStateContext();

    if(!token) return <Navigate to="/login" />
    
    return (
        <>
            <Sidebar />
                <Header username={username} />
                <div className="ml-64">
                    <MainWrapper>{children}</MainWrapper>
                </div>
        </>
    );

}