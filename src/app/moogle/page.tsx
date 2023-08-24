"use client"

import React, { useContext, useState } from 'react'
import { MHome, Navbar } from '@/components/Moogle';
import { ThemeContext } from '../layout';

const Page = () => {
    // const [theme, setTheme] = useState<string>('light');
    const themeContext = useContext(ThemeContext);
    return (
        <div className='min-h-screen'>
            {/* <div className='min-h-screen' data-theme={theme}> */}
            {/* <Navbar theme={theme} onThemeChange={setTheme} /> */}
            <Navbar />
            <MHome />
        </div>
    )
}

export default Page