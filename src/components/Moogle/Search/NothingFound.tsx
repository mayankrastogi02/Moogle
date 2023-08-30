import React from 'react'
import Image from 'next/image'
import AlsoSearch from './AlsoSearch'

const NothingFound = () => {
    return (
        <div className='flex flex-col'>
            <div className="flex flex-col justify-center items-center">
                <Image
                    className='m-auto'
                    alt='Logo'
                    src="/empty.svg"
                    height={200}
                    width={200} />
                <p className='my-4 text-md text-slate-400 font-[500]'>No results found</p>
            </div>
            <AlsoSearch />
        </div>
    )
}

export default NothingFound