"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { SearchBarMain } from '.'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react';

const MHome = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push('/moogle/search')
    }
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <Image
                priority
                className='my-20'
                src="/moogle_light.svg"
                alt="Moogle"
                width={400}
                height={400} />
            <SearchBarMain search={search} setSearch={setSearch} />
        </div>
    )
}

export default MHome