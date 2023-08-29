"use client";
import { ThemeContext } from '@/app/layout'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import SearchResults from '@/types/pages'

const Result = ({ result }: { result: SearchResults }) => {
    return (
        <div className='max-w-3xl'>
            <Link href={result.url || "#"} target='_blank' className="flex flex-row items-center">
                <div className='w-10 h-10 rounded-full bg-gray-200 p-2 m-2 flex items-center justify-center'>
                    <Image
                        // src={result.image}
                        alt='Logo'
                        // src={result.logo || "/m_purple.svg"}
                        src="/m_purple.svg"
                        height={15}
                        width={15} />
                </div>
                <div className="address flex flex-col max-w-sm">
                    <p className="text-md font-[500]">{result.name}</p>
                    <p className="text-md font-[500] truncate">{result.url}</p>
                </div>
            </Link>
            <div className="description m-2 break-words">
                <Link href={result.url || "#"} target='_blank' className="text-2xl text-mblue">{result.title}</Link>
                <p className="text-md font-[500]">{result.desc}</p>
            </div>
        </div>

    )
}

export default Result