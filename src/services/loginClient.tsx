import { api } from "./axiosClient";

type loginClientProps = { 
    account: string, 
    password: string, 
    setToken: (token: string | null) => void, 
    setError: (error: { auth_error: string; } | null) => void 
};

export const LoginClient: (props: loginClientProps) => Promise<void> = async ({ account, password, setToken, setError }: loginClientProps) =>  {
    const formData = new FormData();
    formData.append('account', account || '');
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
            console.log(err.response.data.error); 
        } else if (err.request) {
            // Request was made, but no response was received (network error)
            console.error('Network Error:', err.request);
            setError({ auth_error: 'A network error occurred.' });
            console.log({ auth_error: 'A network error occurred.' }); 
        } else {
            // Something else happened while setting up the request
            console.error('Request Setup Error:', err.message);
            setError({ auth_error: 'An error occurred while setting up the request.'  });
            console.log({ auth_error: 'An error occurred while setting up the request.'  });
        }
    }
}