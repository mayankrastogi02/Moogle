"use client"

import React from 'react'
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
    search: string;
    setSearch: any;
    maxWidth?: string;
}

const SearchBar = ({ search, setSearch, maxWidth }: SearchBarProps) => {
    const router = useRouter();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push('/moogle/results')
    }
    console.log(maxWidth)
    return (
        // <div className={`rounded-full w-full max-w-${maxWidth || '[520px]'} flex flex-row items-center border-solid border-2`}>
        <div className={`rounded-full w-full max-w-${maxWidth ? maxWidth : '[520px]'} flex flex-row items-center border-2 border-solid`}>
            <form className='flex flex-row items-center w-full' onSubmit={handleSubmit}>
                <Icon icon="material-symbols:search" className='mx-2' height={25} />
                <input
                    type="text"
                    placeholder="Search"
                    value={search} onChange={(e) => setSearch(e.target.value)}
                    className="input px-2 w-full focus:outline-none border-none"
                />
                {
                    search.length > 0 && (
                        <button type='reset' className='ml-2' onClick={() => { setSearch('') }}>
                            <Icon icon="ph:x" color='black' height={20} />
                        </button>
                    )
                }
                <button type='submit' className='ml-2'>
                    <Icon icon="material-symbols:search" className='ml-2 mr-4' height={25} color='#800080' />
                </button>
            </form>
        </div>
    )
}

export default SearchBar