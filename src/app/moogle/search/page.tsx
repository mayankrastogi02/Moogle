import { Navbar } from '@/components/Moogle/Search'
import React from 'react'
import { notFound } from 'next/navigation'
import { getPages } from '@/utils/dbFunctions'
import { Result } from '@/components/Moogle'

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
            <div className='flex flex-col justify-center my-4 mx-[184px] gap-6'>
                <p className='text-md text-slate-400 font-[500]'>About 25,270,000,000 results (0.31 seconds)</p>
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
            </div>
        </div>
    )
}

export default Page