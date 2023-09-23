import { Navbar } from '@/components/Moogle/Search'
import React, { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import PageResult from './PageResult'

type Props = {
    params: { id: string }
    searchParams: { q: string }
}

export async function generateMetadata({ params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    return {
        title: `${searchParams.q} - Moogle`,
        description: `Search results for ${searchParams.q} on Moogle`,
        icons: "/m_yellow.svg"
    };
}

const Page = ({ searchParams }: { searchParams: { q: string } }) => {
    const query: string | null = searchParams ? searchParams.q : null;
    if (!query) {
        notFound();
    }
    return (
        <div className='min-h-screen'>
            <Navbar query={query} />
            <hr className='h-px border-1 border-mgrey' />
            <PageResult query={query} />
        </div>
    )
}

export default Page