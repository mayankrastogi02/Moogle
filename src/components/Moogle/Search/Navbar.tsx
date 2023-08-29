"use client"

import Link from "next/link";
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import { SearchBar } from "..";
import { Menu, Pill } from "@/components";
import Settings from "@/components/Settings";
import { useViewport } from "@/Hooks";

const Navbar = ({ query }: { query: string }) => {
    const [search, setSearch] = useState<string>('');
    const { width } = useViewport();
    const inWidth: boolean = width < 768;
    useEffect(() => {
        setSearch(query);
    }, [query]);
    return (
        <header className="w-full z-10" >
            <nav className="max-w-full px-6 py-4">
                <div className="flex flex-col md:flex-row my-4">
                    {
                        inWidth ? (
                            <div className="w-full mb-2">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="">
                                        <Menu />
                                    </div>
                                    <div className="">
                                        <Link href="/moogle">
                                            <Image
                                                priority
                                                src="/moogle_lower_logo.svg"
                                                alt="Moogle"
                                                width={125}
                                                height={125}
                                            />
                                        </Link>
                                    </div>
                                    <div className="">
                                        <Settings />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex-none my-4 mx-8">
                                <Link href="/moogle">
                                    <Image
                                        priority
                                        src="/moogle_lower_logo.svg"
                                        alt="Moogle"
                                        width={125}
                                        height={125}
                                    />
                                </Link>
                            </div>
                        )
                    }
                    <div className="flex flex-col w-full justify-center">
                        <div className="flex flex-row items-center justify-center md:justify-between">
                            <div className="w-full px-2 md:w-3/5 md:px-0">
                                <SearchBar search={search} setSearch={setSearch} />
                            </div>
                            {
                                inWidth ? null : (
                                    <div className="flex gap-2 mr-6">
                                        <Settings />
                                        <Menu />
                                    </div>
                                )
                            }
                        </div>
                        <div className="py-4 flex gap-2 overflow-auto">
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
