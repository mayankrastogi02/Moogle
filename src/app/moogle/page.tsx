import React from 'react'
import { MHome, Navbar } from '@/components/Moogle';
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { q: string }
}

export async function generateMetadata({ params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    return {
        title: "Moogle",
        description: `Welcome to Moogle!`,
        icons: "/m_yellow.svg"
    };
}

const Page = () => {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <MHome />
        </div>
    )
}

export default Page