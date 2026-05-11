import React from 'react';
import { Button, Card, Input, Chip } from '@heroui/react';
import Link from 'next/link';
import Image from 'next/image';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    
    // Fetching data from your Express backend
    const res = await fetch(`http://localhost:5000/destinations/${id}`, { cache: 'no-store' });
    const data = await res.json();

    const { 
        destinationName, 
        country, 
        price, 
        duration, 
        imageUrl, 
        description, 
        departureDate 
    } = data;

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-6">
            {/* Action Bar */}
            <div className="flex justify-between items-center">
                <Link href="/destinations" className="flex items-center text-gray-500 hover:text-cyan-500 transition-colors">
                    <span className="mr-2">←</span> Back to Destinations
                </Link>
                <div className="flex gap-2">
                    <Button variant="bordered" size="sm" className="rounded-none border-gray-300">
                        ✎ Edit
                    </Button>
                    <Button variant="bordered" color="danger" size="sm" className="rounded-none border-red-200">
                        🗑 Cancel
                    </Button>
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
                    <Card className="p-8 border border-gray-100 shadow-sm rounded-none sticky top-24">
                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-400 text-sm">Starting from</p>
                                <h2 className="text-4xl font-bold text-cyan-500">${price}</h2>
                                <p className="text-gray-400 text-xs">per person</p>
                            </div>

                            <div className="space-y-4">
                                <Input 
                                    type="text" 
                                    variant="bordered" 
                                    defaultValue={departureDate} 
                                    className="rounded-none"
                                />
                                <Button 
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
            </div>
        </div>
    );
};

export default DestinationDetailsPage;