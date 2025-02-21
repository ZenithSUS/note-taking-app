import '../tailwind.css';
import { LoginForm } from '../components/loginform';

export const LoginLayout: React.FC = () => {
    return (
        <>
            <main className="flex items-center justify-center h-screen w-screen">
                <LoginForm />
            </main>
        </>
    );
}

export default LoginLayout;