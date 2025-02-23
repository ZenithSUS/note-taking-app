import '../tailwind.css';
import { Navigate } from "react-router-dom";
import { FormWrapper } from "../components/form-wrapper";
import { useStateContext } from '../context/context-provider';

type AuthProp = {
    children: React.ReactNode
}

export const AuthLayout: React.FC<AuthProp> = ({ children } : AuthProp) => {
    const { token } = useStateContext();

    if(token) return <Navigate to="/dashboard" />
    
    return (
        <FormWrapper>
            {children}
        </FormWrapper>
    );
}

export default AuthLayout;