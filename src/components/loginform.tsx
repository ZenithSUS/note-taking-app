import '../tailwind.css';
import { Button } from "./button";

export const LoginForm: React.FC = () => {
    return (
        <div className="flex flex-col gap-4">
            <form className="flex flex-col bg-gray-900 p-4 rounded-2xl p-3 gap-4 w-96 max-w-full">
                <h1 className="text-3xl font-bold text-center mb-2">Login</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="UsernameOrEmail">Username or Email</label>
                    <input type="text" id="UsernameOrEmail" className="py-2 rounded-2xl bg-white" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="py-2 rounded-2xl bg-white" />
                </div>
                <div className="flex flex-col gap-2 justify-center items-center w-full">
                    <Button text="Login" />
                </div>
            </form>

        </div>
    );
}

export default LoginForm;