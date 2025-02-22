import '../tailwind.css';
import { Button } from "./button";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../services/axiosClient.tsx';
import { useStateContext } from '../context/context-provider.tsx';

export const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const { setToken } = useStateContext();
    const [error, setError] = useState<{ auth_error: string;} | null>(null);
    const [userAccount, setUserAccount] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('account', userAccount || '');
        formData.append('password', password || '');
        formData.append('process', 'login');

        try {
            const response = await api.post('/auth.php', formData);
            setError(null);
            if (response.status === 200) {
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
            }
        } catch (err: Array<{ auth_error: string; }> | any) {
            if (err.response) {
                // Server responded with an error status code
                console.error('Server Error:', err.response.data.message);
                setError(err.response.data.error); 
            } else if (err.request) {
                // Request was made, but no response was received (network error)
                console.error('Network Error:', err.request);
                setError({ auth_error: 'A network error occurred.' }); 
            } else {
                // Something else happened while setting up the request
                console.error('Request Setup Error:', err.message);
                setError({ auth_error: 'An error occurred while setting up the request.'  });
            }
        }
    };

    const handleRegister = (event: React.FormEvent) => {
        event.preventDefault();
        return navigate('/register');
    };

    return (
        <div className="flex flex-col gap-4">
            <form className="flex flex-col bg-gray-900 p-4 rounded-2xl gap-4 w-full max-w-xs sm:max-w-md mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">Login</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="UsernameOrEmail">Username or Email</label>
                    <input type="text" id="UsernameOrEmail" className="p-2 rounded-2xl bg-white text-black" value={userAccount} onChange={((e) => setUserAccount(e.target.value))} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="p-2 rounded-2xl bg-white text-black" value={password} onChange={((e) => setPassword(e.target.value))} />
                </div>
                <div className="flex flex-col gap-2 justify-center items-center w-full">
                    <Button text="Login" onClick={handleSubmit} />
                </div>
                <div className='flex justify-between items-center'>
                    <p className="text-center">Don't have an account? <button className="text-blue-500 hover:underline cursor-pointer" onClick={handleRegister}>Register</button></p>
                </div>
                {error && <p className="text-red-700 text-center font-bold">{error.auth_error}</p>}
            </form>
        </div>
    );
};

export default LoginForm;