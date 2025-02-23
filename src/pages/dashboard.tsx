import '../tailwind.css';
import { useEffect, useState } from 'react';
import { FetchNotes } from '../services/api/fetch-notes';
import { useStateContext } from '../context/context-provider';


export const Dashboard: React.FC = () => {
    const { loading, setLoading } = useStateContext();
    const [notes, setNotes] = useState<Object[] | null>(null);

    useEffect(() => {
        setLoading(true);
        FetchNotes({ setNotes }).then(() => setLoading(false));
    }, [])

    return (
        <div>
            <div className="flex flex-col items-center gap-0.5">
                <h1 className="text-3xl font-bold text-center">Dashboard</h1>
                <p className="mt-4">This is the dashboard page.</p>
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 p-4 w-full">
                <div className='bg-gray-900 p-4 rounded-sm'>
                    <h2 className="text-2xl font-bold">Total Users</h2>
                    <p className="mt-2">100</p>
                </div>
                <div className='bg-gray-900 p-4 rounded-sm'>
                    <h2 className="text-2xl font-bold">Total Notes</h2>
                    <p className="mt-2">
                        { loading ? 'Loading...' : !loading && notes?.length ? notes.length : 'N/A' }
                    </p>
                </div>
                <div className="bg-gray-900 p-4 rounded-sm">
                    <h2 className="text-2xl font-bold">Pending Notes</h2>
                    <p className="mt-2">{ loading ? 'Loading...' : !loading && notes?.length ? 
                        notes.filter((note: any) => note.status == 0).length : 'N/A' }
                    </p>
                </div>
                <div className="bg-gray-900 p-4 rounded-sm">
                    <h2 className="text-2xl font-bold">Finished Notes</h2>
                    <p className="mt-2">30</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;