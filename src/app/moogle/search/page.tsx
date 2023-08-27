import { Navbar } from '@/components/Moogle/Search'
import React from 'react'
import { notFound } from 'next/navigation'
import { getPages } from '@/utils/dbFunctions'

const Page = async ({ searchParams }: { searchParams: { q: string } }) => {
    const query: string | null = searchParams ? searchParams.q : null;
    if (!query) {
        notFound();
    }
    // const fetchedPages = await getPages();
    // console.log(fetchedPages);
    return (
        <div className='min-h-screen'>
            <Navbar query={query} />
            <hr className='h-px border-1 border-mgrey' />
            <div className='flex flex-row items-center my-2 mx-6'>
                <p className='text-md text-slate-400 font-[500]'>About 25,270,000,000 results (0.31 seconds)</p>
            </div>
        </div>
    )
}

export default Page