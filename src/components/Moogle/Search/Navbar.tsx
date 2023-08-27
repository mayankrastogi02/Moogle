"use client"

import Link from "next/link";
import Image from 'next/image'
import React, { useState } from "react";
import { SearchBar } from "..";
import { Menu, Pill } from "@/components";
import Settings from "@/components/Settings";

const Navbar = ({ query }: { query: string }) => {
    const [search, setSearch] = useState<string>(query);
    return (
        <header className="w-full z-10" >
            <nav className="max-w-full pt-4">
                <div className="flex flex-row my-4">
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
                    <div className="flex flex-col w-full justify-center">
                        <div className="flex flex-row justify-between">
                            <div className="w-3/5">
                                <SearchBar search={search} setSearch={setSearch} />
                            </div>
                            <div className="flex gap-5">
                                <Settings />
                                <Menu />
                            </div>
                        </div>
                        <div className="py-4 flex gap-2">
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
