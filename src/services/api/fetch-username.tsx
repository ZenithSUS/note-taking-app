import { api } from "../client/axiosClient";

type FetchUsernameProps = {
    setUsername: (username: string | null) => void;   
}

export const FetchUsername = async ({ setUsername }: FetchUsernameProps) => {
    const formData = new FormData();
    formData.append('process', 'get-username');
    
    try {
        const response = await api.post("/users.php", formData);
        console.log(response);
        if(response.status === 200) {
            return setUsername(response.data.username);
        }
    } catch (err: any) {
        if(err.response) {
            // Server responded with an error status code
            console.error('Server Error:', err.response.data.message);
        } else if (err.request) {
            // Request was made, but no response was received (network error)
            console.error('Network Error:', err.request);
        } else {
            // Something else happened while setting up the request
            console.error('Request Setup Error:', err.message);
        }
    }
};