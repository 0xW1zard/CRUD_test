'use client';
import { Button } from '@heroui/button';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className='container mx-auto my-2.5 '>
            <Navbar isBordered className="bg-white/90 backdrop-blur-md">
                {/* Left Side: Navigation Links */}
                <NavbarContent className="hidden sm:flex gap-8" justify="start">
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page" className="text-cyan-500 font-semibold border-b-2 border-cyan-500 pb-1">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href={'/destinations'} className="hover:text-cyan-500 transition-colors">
                            Destinations
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href={'/my-bookings'} className="hover:text-cyan-500 transition-colors">
                            My Bookings
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href={'/admin'} className="hover:text-cyan-500 transition-colors">
                            Admin
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                {/* Center: Brand Name */}
                <NavbarBrand className="justify-center">
                    <p className="font-bold text-2xl text-cyan-600 tracking-tight">Wanderlast</p>
                </NavbarBrand>

                {/* Right Side: Profile & Auth */}
                <NavbarContent justify="end" className="gap-6">
                    <NavbarItem className="flex items-center gap-2 cursor-pointer hover:text-cyan-500">
                        <span className="text-lg">👤</span> {/* Replace with an icon library like Lucide if preferred */}
                        <p className="hidden md:block">Profile</p>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href={'/login'} className="font-medium">
                            Login
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="foreground" href={'/signup'} variant="light" className="font-medium">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    );
};

export default NavBar;