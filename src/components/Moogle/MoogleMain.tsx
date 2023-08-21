"use client"

import React, { useState } from 'react'
import { MoogleHome, Navbar } from '..'
import Image from 'next/image'

const MoogleMain = () => {
  const [theme, setTheme] = useState<string>('light');
  return (
    <div className='min-h-screen' data-theme={theme}>
      <Navbar theme={theme} onThemeChange={setTheme} />
      <MoogleHome />
    </div>
  )
}

export default MoogleMain