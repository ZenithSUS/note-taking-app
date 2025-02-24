import { api } from "./axiosClient";
import { ErrorType } from "../../lib/types";

type loginClientProps = { 
    account: string, 
    password: string, 
    setToken: (token: string) => void, 
    setError: (error: { auth_error: string }) => void 
};

export const LoginClient: (props: loginClientProps) => Promise<void> = async ({ account, password, setToken, setError }: loginClientProps) =>  {
    const formData = new FormData();
    formData.append('account', account || '');
    formData.append('password', password || '');
    formData.append('process', 'login');
    
    try {
        const response = await api.post('/auth.php', formData);
        if (response.status === 200) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
        }
    } catch (err: unknown) {
        const error = err as ErrorType;
        if (error.response) {
            // Server responded with an error status code
            console.error('Server Error:', error.response.data.message);
            setError(error.response.data.error);
            console.log(error.response.data.error); 
        } else if (error.request) {
            // Request was made, but no response was received (network error)
            console.error('Network Error:', error.request);
            setError({ auth_error: 'A network error occurred.' });
            console.log({ auth_error: 'A network error occurred.' }); 
        } else {
            // Something else happened while setting up the request
            console.error('Request Setup Error:', error.message);
            setError({ auth_error: 'An error occurred while setting up the request.'  });
            console.log({ auth_error: 'An error occurred while setting up the request.'  });
        }
    }
}