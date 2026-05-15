'use client';
import React from 'react';
import { Card, Button, Chip } from "@heroui/react";
import { Calendar, MapPin, TrashBin, Eye } from "@gravity-ui/icons";
import Image from 'next/image';
import toast from 'react-hot-toast';
import { redirect, useRouter } from 'next/navigation';

const MyBookingsCard = ({ booking }) => {

    const router = useRouter();

    const {
        destinationName,
        departureDate,
        price,
        destinationId
    } = booking;

    const handleDelete = () => {
        const confirmDelete = window.confirm('Are you sure you want to cancel this booking?');
        if (confirmDelete) {
            fetch(`http://localhost:5000/bookings/${booking._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        toast.success('Booking cancelled successfully!');
                        router.refresh();
                    } else {
                        toast.error('Failed to cancel booking. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error deleting booking:', error);
                });


        }

    }

    return (
        <div>
            <Card className="flex flex-row gap-6 p-4 border border-gray-200 shadow w-full rounded-none">
                {/* Image Section */}
                <div className="w-72 h-44 shrink-0">
                    <Image width={300} height={200} loading="eager"
                        src={booking.imageUrl || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwcGFyaXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'}
                        alt="Image"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between grow py-1">
                    <div className="space-y-2">
                        {/* Status Badge */}
                        <div className='w-fit h-fit rounded-full bg-green-100 mx-1 py-0.5 px-2 text-sm text-green-600' >
                            Confirmed
                        </div>


                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{destinationName}</h2>

                        {/* Details */}
                        <div className="space-y-1 text-gray-500 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar width={14} className="text-gray-400" />
                                <span>Departure: {departureDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin width={14} className="text-gray-400" />
                                <span>Booking ID: {booking._id}</span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="text-3xl font-bold text-cyan-600 pt-1">
                            ${price.toLocaleString()}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3">
                        <Button onClick={() => { handleDelete(booking._id) }}
                            color="danger"
                            size="sm"
                            className="border border-red-500 text-red-500 bg-white rounded-none"
                        > <TrashBin />
                            Cancel
                        </Button>
                        <Button onClick={()=>{redirect(`/destinations/${destinationId}`)}}
                            color="primary"
                            size="sm"
                            className="bg-cyan-500 text-white min-w-20 rounded-none"
                            startContent={<Eye width={14} />}
                        >
                            View
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MyBookingsCard;