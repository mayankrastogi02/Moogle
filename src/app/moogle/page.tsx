"use client"

import React, { useState } from 'react'
import { MHome, Navbar } from '@/components/Moogle';

const Page = () => {
    const [theme, setTheme] = useState<string>('light');
    return (
        <div className='min-h-screen' data-theme={theme}>
            <Navbar theme={theme} onThemeChange={setTheme} />
            <MHome />
        </div>
    )
}

export default Page