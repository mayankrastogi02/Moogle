"use client"
import React, { use, useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { SearchBarMain } from '.'
import { ThemeContext } from '@/app/layout'
import { chunkContent } from '@/utils/vectorSearch'

const MHome = () => {
    const [search, setSearch] = useState('');
    const theme = useContext(ThemeContext);

    useEffect(() => {
        chunkContent();
    }, [])

    return (
        <div className='flex flex-col items-center justify-center w-full m-auto px-8'>
            <Image
                priority
                className='my-20'
                src={theme.theme === "light" ? "/moogle_light.svg" : "/moogle_dark.svg"}
                alt="Moogle"
                width={400}
                height={400} />
            <SearchBarMain search={search} setSearch={setSearch} />
        </div>
    )
}

export default MHome