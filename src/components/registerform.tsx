import "../tailwind.css";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RegisterClient } from "../services/client/registerClient";

type ErrorHandlingProps = {
  username?: string;
  email?: string;
  password?: string;
  confirmpassword?: string;
  usernameValid?: Object;
  passwordValid?: Object;
};

type NetworkErrorProps = {
  message: string;
};

export const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<ErrorHandlingProps | null>(null);
  const [networkError, setNetworkError] = useState<NetworkErrorProps | null>(
    null
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await RegisterClient({
        username: username,
        email: email,
        password: password,
        confirmpassword: confirmPassword,
        setErrors,
        setNetworkError,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (!errors) return;

    if (event.currentTarget.id === "username") {
      setErrors({ ...errors, [event.currentTarget.id]: "", usernameValid: {} });
    } else if (event.currentTarget.id === "password") {
      setErrors({ ...errors, [event.currentTarget.id]: "", passwordValid: {} });
    } else {
      setErrors({ ...errors, [event.currentTarget.id]: "" });
    }

    setNetworkError(null);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    return navigate("/login");
  };

  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col bg-gray-900 p-4 mt-4 rounded-2xl gap-4 w-75 max-w-full sm:w-90 sm:max-w-md py-2 sm:py-6">
        <h1 className="text-3xl font-bold text-center mb-2">Register</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="py-2 rounded-2xl bg-white"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            onInput={handleInput}
          />
          {(errors?.username && (
            <p className="text-red-500 block">{errors.username}</p>
          )) ||
            (errors?.usernameValid &&
              Object.values(errors.usernameValid).map(
                (error: string, index: number) => (
                  <span key={index} className="text-red-500 block">
                    {" "}
                    - {error}
                  </span>
                )
              ))}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="py-2 rounded-2xl bg-white"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onInput={handleInput}
          />
          {errors?.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="py-2 rounded-2xl bg-white"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onInput={handleInput}
          />
          {(errors?.password && (
            <p className="text-red-500">{errors.password}</p>
          )) ||
            (errors?.passwordValid &&
              Object.values(errors.passwordValid).map(
                (error: string, index: number) => (
                  <span key={index} className="text-red-500 block">
                    {" "}
                    - {error}
                  </span>
                )
              ))}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            className="py-2 rounded-2xl bg-white"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            onInput={handleInput}
          />
          {errors?.confirmpassword && (
            <p className="text-red-500">{errors.confirmpassword}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-full">
          <Button text="Register" onClick={handleSubmit} />
        </div>
        <div className="flex space-between items-center">
          <p className="text-center">
            Already have an account?{" "}
            <button
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </button>
          </p>
        </div>
        {networkError?.message && (
          <p className="text-red-500 text-center">{networkError.message}</p>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
