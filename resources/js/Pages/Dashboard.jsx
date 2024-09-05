import LayoutAdmin from '@/Layouts/LayoutAdmin/Index';
import { Head } from '@inertiajs/react';

function Dashboard({ auth }) {
    return (
        <>
        <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <dsiv className="p-6 text-gray-900">You're logged in!</dsiv>
                    </div>
                </div>
            </div>
        </>
    );

}
Dashboard.layout = page => <LayoutAdmin  children={page}/>

export default Dashboard;