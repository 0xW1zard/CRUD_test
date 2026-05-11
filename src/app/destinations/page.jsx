'use client';
import { Button, Card, CardFooter, Chip, ListBox, ListBoxItem, Select } from '@heroui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const ExplorePage = () => {
    const [destinations, setDestinations] = useState([]);

    // Fetch data from your Express backend
    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Header Section */}
            <header className="mb-8">
                <h1 className="text-4xl font-light text-gray-900 mb-2">Explore All Destinations</h1>
                <p className="text-gray-500">Find your perfect travel experience from our curated collection</p>
            </header>

            {/* Filters Bar */}
            <div className="flex items-center mb-8 border border-gray-200 divide-x divide-gray-200">
                {/* CATEGORY */}
                <Select className="flex-1" placeholder="CATEGORY">
                    <Select.Trigger className="px-4 py-3 rounded-none flex justify-between items-center w-full hover:bg-gray-50 transition-colors">
                        <Select.Value className="text-sm uppercase text-gray-500" />
                        <Select.Indicator className="text-gray-400">⌄</Select.Indicator>
                    </Select.Trigger>
                    <Select.Popover className="bg-white shadow-xl border border-gray-100 rounded-sm w-3/14">
                        <ListBox className="p-2">
                            <ListBoxItem id="beach" textValue="Beach" className="p-2 hover:bg-cyan-50 rounded-md">Beach</ListBoxItem>
                            <ListBoxItem id="mountain" textValue="Mountain" className="p-2 hover:bg-cyan-50 rounded-md">Mountain</ListBoxItem>
                        </ListBox>
                    </Select.Popover>
                </Select>

                {/* PRICE RANGE */}
                <Select className="flex-1" placeholder="PRICE RANGE">
                    <Select.Trigger className="px-4 py-3 rounded-none flex justify-between items-center w-full hover:bg-gray-50 transition-colors">
                        <Select.Value className="text-sm uppercase text-gray-500" />
                        <Select.Indicator className="text-gray-400">⌄</Select.Indicator>
                    </Select.Trigger>
                    <Select.Popover className="bg-white shadow-xl border border-gray-100 rounded-sm w-3/14">
                        <ListBox className="p-2">
                            <ListBoxItem id="low" textValue="$0 - $1000" className="p-2 hover:bg-cyan-50 rounded-md">$0 - $1000</ListBoxItem>
                            <ListBoxItem id="high" textValue="$1000+" className="p-2 hover:bg-cyan-50 rounded-md">$1000+</ListBoxItem>
                        </ListBox>
                    </Select.Popover>
                </Select>

                {/* SORT BY */}
                <Select className="flex-1" placeholder="SORT BY">
                    <Select.Trigger className="px-4 py-3 rounded-none flex justify-between items-center w-full hover:bg-gray-50 transition-colors">
                        <Select.Value className="text-sm uppercase text-gray-500" />
                        <Select.Indicator className="text-gray-400">⌄</Select.Indicator>
                    </Select.Trigger>
                    <Select.Popover className="bg-white shadow-xl border border-gray-100 rounded-sm w-3/14">
                        <ListBox className="p-2">
                            <ListBoxItem id="newest" textValue="Newest First" className="p-2 hover:bg-cyan-50 rounded-md">Newest First</ListBoxItem>
                            <ListBoxItem id="price" textValue="Price" className="p-2 hover:bg-cyan-50 rounded-md">Price: Low to High</ListBoxItem>
                        </ListBox>
                    </Select.Popover>
                </Select>
            </div>

            <p className="text-gray-400 mb-6 italic">Showing {destinations.length} destinations</p>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map((item) => (
                    <Card key={item._id} className="border border-gray-300 bg-transparent group cursor-pointer">
                        <div className="p-0 overflow-hidden rounded-none relative">
                            {/* Rating Badge */}
                            <div className="absolute top-3 right-3 z-10">
                                <Chip
                                    size="sm"
                                    variant="flat"
                                    className="bg-white/80 backdrop-blur-md text-black font-semibold"
                                    startcontent={<span>4.5</span>}
                                >
                                    ★
                                </Chip>
                            </div>

                            <Image
                                alt={item.destinationName}
                                width={200} height={200}
                                className="object-cover w-full h-60 rounded-xl group-hover:scale-105 transition-transform duration-500"
                                src={item.imageUrl || "https://via.placeholder.com/400"}
                            />
                        </div>
                        <CardFooter className="flex-col items-start px-0 pt-4">
                            <div className="flex items-center gap-1 text-gray-400 text-xs mb-1">
                                <span className="text-sm">📍</span> {item.country}
                            </div>

                            <div className="flex justify-between items-start w-full">
                                <h3 className="text-xl font-semibold text-gray-800">{item.destinationName}</h3>
                                <p className="text-xl font-bold text-gray-900">${item.price}<span className="text-xs text-gray-400 font-normal">/Person</span></p>
                            </div>

                            <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                                <span>📅</span> {item.duration}
                            </div>

                            <Button
                                variant="light"
                                className="p-0 mt-4 text-cyan-500 font-bold uppercase tracking-wider text-xs flex items-center gap-2 hover:bg-transparent"
                            >
                                Book Now ↗
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ExplorePage;