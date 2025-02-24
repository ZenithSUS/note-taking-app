import "../tailwind.css";
import { useState, useEffect } from "react";
import { FetchNotes } from "../services/api/fetch-notes";
import { useStateContext } from "../context/context-provider";
import { NotesType } from "../lib/types";

export const Notes: React.FC = () => {
  const [notes, setNotes] = useState<NotesType[]>([]);
  const { loading, setLoading } = useStateContext();

  useEffect(() => {
    setLoading(true);
    FetchNotes({ setNotes }).then(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Notes</h1>
      <p className="mt-4">This is the notes page.</p>

      {loading ? (
        "Loading..."
      ) : !loading && notes?.length ? (
        <ul className="divide-y-2">
          {notes.map((note) => (
            <li className="py-2">{note.title}</li>
          ))}
        </ul>
      ) : (
        "N/A"
      )}
    </div>
  );
};
