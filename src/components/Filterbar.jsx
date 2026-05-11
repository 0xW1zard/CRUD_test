import React from 'react';
import { ListBox, ListBoxItem, Select } from '@heroui/react';


const Filterbar = () => {
    return (
        <div>
            <div className="flex items-center mb-8 border border-gray-200 divide-x divide-gray-200 bg-white">
                <Select className="flex-1" placeholder="CATEGORY">
                    <Select.Trigger className="px-4 py-3 rounded-none flex justify-between items-center w-full hover:bg-gray-50 transition-colors">
                        <Select.Value className="text-sm uppercase text-gray-500 font-medium" />
                        <Select.Indicator className="text-gray-400">⌄</Select.Indicator>
                    </Select.Trigger>
                    {/* Adjusted w-3/14 for consistent dropdown sizing */}
                    <Select.Popover className="bg-white shadow-xl border border-gray-100 rounded-sm w-3/14 z-50">
                        <ListBox className="p-1">
                            <ListBoxItem id="beach" textValue="Beach" className="p-2 hover:bg-cyan-50 rounded-md cursor-pointer">
                                Beach
                            </ListBoxItem>
                            <ListBoxItem id="mountain" textValue="Mountain" className="p-2 hover:bg-cyan-50 rounded-md cursor-pointer">
                                Mountain
                            </ListBoxItem>
                        </ListBox>
                    </Select.Popover>
                </Select>

                <Select className="flex-1" placeholder="PRICE RANGE">
                    <Select.Trigger className="px-4 py-3 rounded-none flex justify-between items-center w-full hover:bg-gray-50 transition-colors">
                        <Select.Value className="text-sm uppercase text-gray-500 font-medium" />
                        <Select.Indicator className="text-gray-400">⌄</Select.Indicator>
                    </Select.Trigger>
                    <Select.Popover className="bg-white shadow-xl border border-gray-100 rounded-sm w-3/14 z-50">
                        <ListBox className="p-1">
                            <ListBoxItem id="low" textValue="$0 - $1000" className="p-2 hover:bg-cyan-50 rounded-md cursor-pointer">
                                $0 - $1000
                            </ListBoxItem>
                            <ListBoxItem id="high" textValue="$1000+" className="p-2 hover:bg-cyan-50 rounded-md cursor-pointer">
                                $1000+
                            </ListBoxItem>
                        </ListBox>
                    </Select.Popover>
                </Select>

                <Select className="flex-1" placeholder="SORT BY">
                    <Select.Trigger className="px-4 py-3 rounded-none flex justify-between items-center w-full hover:bg-gray-50 transition-colors">
                        <Select.Value className="text-sm uppercase text-gray-500 font-medium" />
                        <Select.Indicator className="text-gray-400">⌄</Select.Indicator>
                    </Select.Trigger>
                    <Select.Popover className="bg-white shadow-xl border border-gray-100 rounded-sm w-3/14 z-50">
                        <ListBox className="p-1">
                            <ListBoxItem id="newest" textValue="Newest First" className="p-2 hover:bg-cyan-50 rounded-md cursor-pointer">
                                Newest First
                            </ListBoxItem>
                            <ListBoxItem id="price" textValue="Price" className="p-2 hover:bg-cyan-50 rounded-md cursor-pointer">
                                Price: Low to High
                            </ListBoxItem>
                        </ListBox>
                    </Select.Popover>
                </Select>
            </div>
        </div>
    );
};

export default Filterbar;