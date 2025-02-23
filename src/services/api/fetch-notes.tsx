import { api } from "../client/axiosClient";

type NoteProps = {
    setNotes: React.Dispatch<React.SetStateAction<[]>>
}

export const fetchNotes = async ({ setNotes }: NoteProps) => {
    try {
        const response = await api.get("/notes");
        if(response.status === 200) {
            return setNotes(response.data);
        }
    } catch (error) {
        console.error(error);
    }
};