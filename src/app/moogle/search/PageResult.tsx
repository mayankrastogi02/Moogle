import { rankPages } from '@/Hooks/rankPages';
import { AlsoSearch } from '@/components/Moogle/Search';
import NothingFound from '@/components/Moogle/Search/NothingFound';
import Result from '@/components/Moogle/Search/Result';
import SearchResults from '@/types/pages';
import { getPages } from '@/utils/dbFunctions';
import React from 'react'

const PageResult = async ({ query }: { query: string }) => {
    setTimeout(() => {
        console.log("Delayed for 1 second.");
    }, 5000);
    const unrankedData: SearchResults[] = await getPages(query);
    const data = rankPages(unrankedData, query);
    return (
        <div className='flex flex-col justify-center md:mx-[184px] p-4 gap-6'>
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
            {
                data.length > 0 ? <AlsoSearch /> : null
            }
        </div>
    )
}

export default PageResult