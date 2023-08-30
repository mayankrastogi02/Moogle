"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
const AlsoSearch = () => {
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
        <div className='mx-4'>
            <p className='text-xl my-4'>People also search for:</p>
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
    )
}

export default AlsoSearch