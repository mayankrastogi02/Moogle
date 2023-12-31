"use client"

import React from 'react'
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

interface SearchBarMainProps {
    search: string;
    setSearch: any;
}

const SearchBarMain = ({ search, setSearch }: SearchBarMainProps) => {
    const router = useRouter();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const encodedSearch = encodeURI(search);
        if (encodedSearch.length === 0) return;
        router.push(`/moogle/search?q=${encodedSearch}`)
    }
    return (
        <div className={`rounded-full w-full max-w-[520px] flex flex-row items-center outline outline-[1px] outline-mgrey shadow-[1px_2px_10px_rgb(0,0,0,0.1)] hover:shadow-[1px_2px_20px_rgb(0,0,0,0.1)] `}>
            <form className='flex flex-row items-center w-full' onSubmit={handleSubmit}>
                <Icon icon="material-symbols:search" className='mx-2' height={25} />
                <input
                    type="text"
                    placeholder="What is Mayank's GitHub?"
                    value={search} onChange={(e) => setSearch(e.target.value)}
                    className="input px-2 w-full focus:outline-none border-none"
                />
                {
                    search.length > 0 && (
                        <button type='reset' className='ml-2' onClick={() => { setSearch('') }}>
                            <Icon icon="ph:x" height={20} />
                        </button>
                    )
                }
                <button type='submit' className='ml-2'>
                    <Icon icon="material-symbols:search" className='ml-2 mr-4' height={25} color='rgba(var(--color-mpurple))' />
                </button>
            </form>
        </div>
    )
}

export default SearchBarMain