"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { SearchBar } from '.'

const MHome = () => {
    const [search, setSearch] = useState('')
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <Image
                className='my-20'
                src="/moogle_light.svg"
                alt="Moogle"
                width={400}
                height={400} />
            <SearchBar search={search} setSearch={setSearch} />
        </div>
    )
}

export default MHome