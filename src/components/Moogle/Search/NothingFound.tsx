"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const NothingFound = () => {
    const router = useRouter();
    const routes = [
        {
            name: 'Mayank Rastogi',
            link: '/moogle/search?q=mayank%20rastogi'
        },
        {
            name: 'Mayank Rastogi Resume',
            link: '/moogle/search?q=mayank%20rastogi%20resume'
        },
        {
            name: 'Mayank Rastogi GitHub',
            link: '/moogle/search?q=mayank%20rastogi%20github'
        },
    ]
    return (
        <div className='flex flex-col'>
            <div className="flex flex-col justify-center items-center">
                <Image
                    className='m-auto'
                    alt='Logo'
                    src="/empty.svg"
                    height={200}
                    width={200} />
                <p className='my-4 text-md text-slate-400 font-[500]'>No results found</p>
            </div>
            <div className='mx-4'>
                <p className='text-md font-[500]'>People also search for:</p>
                <div className='gap-2'>
                    {
                        routes.map((route, index) => {
                            return (
                                <div key={index} className='hover:cursor-pointer' onClick={() => router.push(route.link)}>
                                    <hr className='h-px border-1 border-mgrey' />
                                    <p className='text-md font-[500] m-4'>{route.name}</p>
                                    <hr className='h-px border-1 border-mgrey' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NothingFound