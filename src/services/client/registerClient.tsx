import { api } from "./axiosClient";
import { useNavigate } from "react-router-dom";
type RegisterClientProps = {
    username: string | null,
    email: string | null,
    password: string | null,
    confirmpassword: string | null,
    setErrors: (errors: Object | null) => void,
    setNetworkError: (error: { message: string } | null) => void
}

export const RegisterClient: (props: RegisterClientProps) => Promise<void> = async ({ username, email, password, confirmpassword, setErrors, setNetworkError }: RegisterClientProps) => {
   
    const success = () => {
        const navigate = useNavigate(); 
        navigate('/login');
    }

    const formData = new FormData();
    formData.append('username', username || '');
    formData.append('email', email || '');
    formData.append('password', password || '');
    formData.append('confirmpassword', confirmpassword || '');
    formData.append('process', 'register');

    try {
        const response = await api.post('/auth.php', formData);
        if(response.status === 200) {
            success();
        }
    } catch (err: any) {
        if(err.response) {
            // Server responded with an error status code
            console.error('Server Error:', err.response.data.message);
            setErrors(err.response.data.error);
            console.log(err.response.data.error);
        } else if (err.request) {
            // Request was made, but no response was received (network error)
            console.error('Network Error:', err.request);
            setNetworkError({message: 'A network error occurred.'});
        } else {
            // Something else happened while setting up the request
            console.error('Request Setup Error:', err.message);
            setNetworkError({message: 'An error occurred while setting up the request.'});
        }
    }
}
