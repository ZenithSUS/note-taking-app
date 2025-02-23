import { api } from "../client/axiosClient";

type NoteProps = {
    setNotes: (notes: Object[] | null) => void
}

export const FetchNotes = async ({ setNotes }: NoteProps) => {
    const formData = new FormData();
    formData.append('process', 'get-notes');

    try {
        const response = await api.post("/notes.php", formData);
        console.log(response.data);
        if(response.status === 200) {
            return setNotes(response.data.data);
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