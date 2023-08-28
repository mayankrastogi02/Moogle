"use client";
import { ThemeContext } from '@/app/layout'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

interface ResultProps {
    result?: any
}

const Result = ({ result }: ResultProps) => {
    return (
        <div className='max-w-3xl'>
            <Link href="#" className="flex flex-row items-center">
                <div className='w-10 h-10 rounded-full bg-gray-200 p-2 m-2 flex items-center justify-center'>
                    <Image
                        // src={result.image}
                        alt='Logo'
                        src="/m_purple.svg"
                        height={15}
                        width={15} />
                </div>
                <div className="address flex flex-col">
                    <p className="text-md font-[500]">Moogle</p>
                    <p className="text-md font-[500]">https://www.moogleapi.com</p>
                </div>
            </Link>
            <div className="description m-2 break-words">
                <p className="text-2xl text-mblue">Moogle</p>
                <p className="text-md font-[500]">Moogle is a search engine that uses the Moogle API to search for results. It is designed to help provide accurate information about its owner. To implement Moogle, the tech used behind the hood are: Supabase as the choice for the database, NextJs as its web framework tied closely with Tailwind CSS for styling the components. Moogle also uses a custom theme provider made by utilizing the Context API.</p>
            </div>
        </div>

    )
}

export default Result