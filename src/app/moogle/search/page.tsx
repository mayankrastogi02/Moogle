import { Navbar } from '@/components/Moogle/Search'
import React from 'react'
import { notFound } from 'next/navigation'
import { getPages } from '@/utils/dbFunctions'
import { Result } from '@/components/Moogle'
import SearchResults from '@/types/pages'
import NothingFound from '@/components/Moogle/Search/NothingFound'

const Page = async ({ searchParams }: { searchParams: { q: string } }) => {
    const query: string | null = searchParams ? searchParams.q : null;
    if (!query) {
        notFound();
    }
    const data: SearchResults[] = await getPages(query);
    return (
        <div className='min-h-screen'>
            <Navbar query={query} />
            <hr className='h-px border-1 border-mgrey' />
            <div className='flex flex-col justify-center my-4 md:mx-[184px] p-4 gap-6'>
                <p className='text-md text-slate-400 font-[500]'>About {data.length} results (it happened very fast!)</p>
                {
                    data.length > 0 ?
                        data.map((item, index) => {
                            return (
                                <Result key={index} result={item} />
                            )
                        })
                        : <NothingFound />
                }
            </div>
        </div>
    )
}

export default Page