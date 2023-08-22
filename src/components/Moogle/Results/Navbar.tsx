"use client"

import Link from "next/link";
import Image from 'next/image'
import React, { useState } from "react";
import { Icon } from '@iconify/react';
import { Button } from "react-daisyui";
import { SearchBar } from "..";
import { Pill } from "@/components";

const Navbar = ({ theme, onThemeChange }: { theme: string, onThemeChange: any }) => {
    const [search, setSearch] = useState<string>('');
    return (
        <header className="w-full z-10" >
            <nav className="max-w-full px-6 py-4">
                <div className="flex flex-row my-4">
                    <div className="flex-none my-4 mx-8">
                        <button>
                            <Image
                                src="/moogle_lower_logo.svg"
                                alt="Moogle"
                                width={125}
                                height={125}
                            />
                        </button>
                    </div>
                    <div className="flex flex-col w-full justify-center">
                        <div className="flex flex-row justify-between">
                            <div className="w-3/5">
                                <SearchBar search={search} setSearch={setSearch} maxWidth="full" />
                            </div>
                            <div className="bg-purple-500">
                                BUTTONS
                            </div>
                        </div>
                        <div className="py-4 flex gap-4">
                            <button><Pill text="All" /></button>
                            <button><Pill text="Images" /></button>
                            <button><Pill text="Videos" /></button>
                            <button><Pill text="News" /></button>
                            <button><Pill text="Projects" /></button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
