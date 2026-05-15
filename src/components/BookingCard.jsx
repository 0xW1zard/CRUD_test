'use client';
import { authClient } from '@/lib/auth-client';
import { Button, Card, Input } from '@heroui/react';
import { DateField, Label } from "@heroui/react";
import { useState } from 'react';
import toast from 'react-hot-toast';

const BookingCard = ({ destination }) => {
    const {
        _id,
        destinationName,
        country,
        duration,
        imageUrl,
        description,
        price,
    } = destination;

    const { data: session } = authClient.useSession();
    const { user } = session || {};
    const [selectedDate, setSelectedDate] = useState(null);

    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userEmail: user?.email,
            userImage: user?.image,
            destinationId: _id,
            destinationName,
            imageUrl,
            country,
            price,
            duration,
            description,
            departureDate: new Date(selectedDate),
        }

        const res = await fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });
        const result = await res.json();
        console.log('Booking Result:', result);
        toast.success('Booking successful!');
    };

     
    return (
        <div className='w-full'>
            <Card className="p-8 border border-gray-100 shadow-sm rounded-none sticky top-24">
                <div className="space-y-6">
                    <div>
                        <p className="text-gray-400 text-sm">Starting from</p>
                        <h2 className="text-4xl font-bold text-cyan-500">${price}</h2>
                        <p className="text-gray-400 text-xs">per person</p>
                    </div>

                    <div className="space-y-4">
                        <DateField className="w-[256px] rounded-none" name="date" value={selectedDate} onChange={setSelectedDate}>
                            <Label>Date</Label>
                            <DateField.Group className=' w-full rounded-none'>
                                <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                            </DateField.Group>
                        </DateField>
                        <Button onClick={handleBooking}
                            className="w-full bg-cyan-500 text-white rounded-none font-bold text-lg h-12"
                            endContent={<span>→</span>}
                        >
                            Book Now
                        </Button>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-100 text-sm text-gray-500">
                        <p className="flex items-center gap-2">✓ Free cancellation up to 7 days</p>
                        <p className="flex items-center gap-2">✓ Travel insurance included</p>
                        <p className="flex items-center gap-2">✓ 24/7 customer support</p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default BookingCard;