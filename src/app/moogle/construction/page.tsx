import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const UnderConstruction = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <Image
                        className='m-auto'
                        alt='Logo'
                        src="/under_construction.svg"
                        height={200}
                        width={200} />
                    <h1 className="text-5xl font-bold">Under Construction</h1>
                    <p className="py-6">We are currently working on some exciting new features! Please stay tuned. Thank you for your patience.😊</p>
                    <p className="py-6">In the meanwhile, try on the search features for some fun results!</p>
                    <Link href="/moogle" className="btn btn-primary">MOOGLE</Link>
                </div>
            </div>
        </div>
    )
}

export default UnderConstruction