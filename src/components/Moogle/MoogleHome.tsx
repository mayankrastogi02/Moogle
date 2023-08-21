"use client"
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';

const MoogleHome = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <Image
                className='my-20'
                src="/moogle_light.svg"
                alt="Moogle"
                width={400}
                height={400} />
            <div className="rounded-full w-full max-w-[520px] flex items-center border-solid border-2">
                <Icon icon="material-symbols:search" className='mx-2' height={25} />
                <input type="text" placeholder="Type here" className="w-full mr-4" />
            </div>
        </div>
    )
}

export default MoogleHome