"use client"

import { Navbar } from '@/components/Moogle/Results'
import React, { useState } from 'react'

const Page = () => {
    const [theme, setTheme] = useState<string>('light');
    return (
        <div className='min-h-screen' data-theme={theme}>
            <Navbar theme={theme} onThemeChange={setTheme} />
            {/* <Search /> */}
        </div>
    )
}

export default Page