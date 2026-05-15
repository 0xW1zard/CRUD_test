import MyBookingsCard from '@/components/MyBookingsCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';


const myBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const userId = session?.user?.id;
    console.log('User ID:', userId);

    const res = await fetch(`http://localhost:5000/bookings/${userId}`);
    const bookings = await res.json();
    console.log('User Bookings:', bookings);

    return (
        <div>
            <div className="max-w-5xl mx-auto p-8">
                {/* Page Header */}
                <header className="mb-8 border-b border-dotted border-blue-300 pb-6">
                    <h1 className="text-4xl font-normal text-gray-800">My Bookings</h1>
                    <p className="text-gray-500 mt-2">Manage and view your upcoming travel plans</p>
                </header>

                {/* Bookings List */}
                <div className="flex flex-col gap-6">

                    {
                        bookings.length > 0 ? (
                            bookings.map((booking) => (
                                <MyBookingsCard key={booking._id} booking={booking} />
                            ))
                        ) : (
                            <p className="text-gray-500">You have no upcoming bookings.</p>
                        )
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default myBookingsPage;