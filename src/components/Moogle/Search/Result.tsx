"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchResults from '@/types/pages'

const Result = ({ result }: { result: SearchResults }) => {
    return (
        <div className='max-w-3xl'>
            <div className="flex flex-row items-center">
                <Link href={result.url || "#"} target='_blank' className='w-10 h-10 rounded-full bg-mgrey m-2 flex items-center justify-center'>
                    <Image
                        alt='Logo'
                        src={result.logo || "/m_purple.svg"}
                        height={20}
                        width={20} />
                </Link>
                <Link href={result.url || "#"} target='_blank' className="address flex flex-col max-w-sm">
                    <p className="text-md font-[500]">{result.name}</p>
                    <p className="text-md font-[500] truncate">{result.url}</p>
                </Link>
            </div>
            <div className="description m-2 break-words">
                <Link href={result.url || "#"} target='_blank' className="text-2xl text-mblue">{result.title}</Link>
                <p className="text-md font-[500]">{result.desc}</p>
            </div>
        </div>

    )
}

export default Result