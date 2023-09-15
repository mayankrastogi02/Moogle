import React from 'react'

const Loader = ({ number }: { number: number }) => {
    return (
        Array(number).fill(0).map((el, index) => (
            <div className='flex flex-col justify-center md:mx-[184px] p-4 gap-6'>
                <div className='max-w-3xl' key={index}>
                    <div className="flex flex-row items-center">
                        <div className='w-10 h-10 rounded-full bg-mgrey m-2 flex items-center justify-center animate-pulse' />
                        <div className="address flex flex-col w-9/12 gap-2">
                            <span className="w-1/6 h-2 bg-mgrey rounded-full animate-pulse"></span>
                            <span className="w-6/12 h-2 bg-mgrey rounded-full animate-pulse"></span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center m-2">
                        <div className="address flex flex-col w-9/12 gap-2">
                            <span className="w-8/12 h-2 bg-mgrey rounded-full animate-pulse"></span>
                            <span className="w-11/12 h-2 bg-mgrey rounded-full animate-pulse"></span>
                            <span className="w-11/12 h-2 bg-mgrey rounded-full animate-pulse"></span>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default Loader

