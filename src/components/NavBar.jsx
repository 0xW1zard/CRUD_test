'use client';
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/button';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {

    const { data: session } = authClient.useSession();
    const { user } = session || {};

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
                        <Link color="foreground" href={'/add-destination'} className="hover:text-cyan-500 transition-colors">
                            Add Destination
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                {/* Center: Brand Name */}
                <NavbarBrand className="justify-center">
                    <p className="font-bold text-2xl text-cyan-600 tracking-tight">Wanderlast</p>
                </NavbarBrand>

                {/* Right Side: Profile & Auth */}
                <NavbarContent justify="end" className="gap-6">
                    {
                        session ? (<NavbarItem className="flex items-center gap-2 cursor-pointer hover:text-cyan-500">
                            <Image className="text-lg rounded-full h-10 w-10" src={user?.image || '👤'} alt="Profile" width={32} height={32} />
                            <p className="hidden md:block ml-1 ">{user?.name?.split(' ')[0] || 'User'}</p>
                        </NavbarItem>) : null
                    }
                    {
                        session ?
                            <NavbarItem>
                                <Button onClick={() => authClient.signOut()} color="error" variant="light" className="font-medium bg-red-500 hover:bg-red-600 text-white ">
                                    Logout
                                </Button>
                            </NavbarItem>
                            :
                            <>
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
                                </>
                    }
                </NavbarContent>
            </Navbar>
        </div>
    );
};

export default NavBar;