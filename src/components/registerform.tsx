import '../tailwind.css';
import { Button } from "./button";
import { useNavigate } from 'react-router-dom';

export const RegisterForm: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => { 
        event.preventDefault();
        console.log('Form submitted');
    }

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        return navigate('/login');
    }
    
    return (
        <div className="flex flex-col gap-4">
            <form className="flex flex-col bg-gray-900 p-4 rounded-2xl p-3 gap-4 w-96 max-w-full sm:max-w-md mx-auto py-2">
                <h1 className="text-3xl font-bold text-center mb-2">Register</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="py-2 rounded-2xl bg-white" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="py-2 rounded-2xl bg-white" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="py-2 rounded-2xl bg-white" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" className="py-2 rounded-2xl bg-white" />
                </div>
                <div className="flex flex-col gap-2 justify-center items-center w-full">
                    <Button text="Register" onClick={handleSubmit} />
                </div>
                <div className='flex space-between items-center'>
                    <p className="text-center">Already have an account? <button className="text-blue-500 hover:underline cursor-pointer" onClick={handleLogin}>Login</button></p>
                </div>
            </form>

        </div>
    );
}

export default RegisterForm;
