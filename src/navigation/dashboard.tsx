import '../tailwind.css';

export const Dashboard: React.FC = () => {

    return (
        <div>
            <div className="flex flex-col items-center gap-0.5">
                <h1 className="text-3xl font-bold text-center">Dashboard</h1>
                <p className="mt-4">This is the dashboard page.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4 w-full">
                <div className='bg-gray-900 p-4 rounded-sm'>
                    <h2 className="text-2xl font-bold">Total Users</h2>
                    <p className="mt-2">100</p>
                </div>
                <div className='bg-gray-900 p-4 rounded-sm'>
                    <h2 className="text-2xl font-bold">Total Notes</h2>
                    <p className="mt-2">50</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-sm">
                    <h2 className="text-2xl font-bold">Pending Notes</h2>
                    <p className="mt-2">20</p>
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