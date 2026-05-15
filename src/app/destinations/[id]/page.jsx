import React from 'react';
import { Button, Card, Input, Chip } from '@heroui/react';
import Link from 'next/link';
import Image from 'next/image';
import { BiPencil } from 'react-icons/bi';
import { ModalForm } from '@/components/ModalForm';
import { TbTrash } from 'react-icons/tb';
import Delete from '@/components/Delete';
import BookingCard from '@/components/BookingCard';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;

    // Fetching data from your Express backend
    const res = await fetch(`http://localhost:5000/destinations/${id}`);
    const data = await res.json();

    const {
        destinationName,
        country,
        duration,
        imageUrl,
        description,
    } = data;

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-6">
            {/* Action Bar */}
            <div className="flex justify-between items-center">
                <Link href="/destinations" className="flex items-center text-gray-500 hover:text-cyan-500 transition-colors">
                    <span className="mr-2">←</span> Back to Destinations
                </Link>
                <div className="flex gap-2">
                    <div>
                        <ModalForm data={data}></ModalForm>
                    </div>
                    <div>
                        <Delete data={data}></Delete>
                    </div>

                </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-112.5 overflow-hidden rounded-none">
                <Image
                    src={imageUrl} width={500} height={800}
                    alt={destinationName} loading="eager"
                    className="w-full h-full object-cover"
                    radius="none"
                />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-4">

                {/* Left Column: Info */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-2">
                        <p className="text-gray-500 flex items-center gap-1 text-sm">
                            📍 {country}
                        </p>
                        <h1 className="text-5xl font-bold text-gray-800 tracking-tight">
                            {destinationName}
                        </h1>
                        <div className="flex items-center gap-4 pt-2">
                            <div className="flex items-center gap-1 text-yellow-500 font-bold">
                                ★ 4.9 <span className="text-gray-400 font-normal text-sm">(234 reviews)</span>
                            </div>
                            <div className="text-gray-500 text-sm">
                                📅 {duration}
                            </div>
                        </div>
                    </div>

                    <section className="space-y-3">
                        <h3 className="text-2xl font-semibold">Overview</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {description || "Discover the magic of this destination with pristine landscapes and vibrant culture. Experience luxury resorts and unforgettable sunsets."}
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold">Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 text-gray-600 text-sm">
                            <p>✓ Luxury beachfront accommodation</p>
                            <p>✓ Visit Uluwatu Temple at sunset</p>
                            <p>✓ Traditional Balinese spa treatment</p>
                            <p>✓ Private beach dinner experience</p>
                            <p>✓ Sunrise trek to Mount Batur</p>
                        </div>
                    </section>
                </div>

                {/* Right Column: Booking Card */}
                <div className="lg:col-span-1">
                    <BookingCard destination={data}></BookingCard>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;