"use client";
import { Footer } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { createContext, useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MSuite',
  description: 'Welcome to MSuite!',
}
export const ThemeContext = createContext({
  theme: 'light',
  changeTheme: (theme: string) => { }
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [themeSetting, setThemeSetting] = useState({
    theme: 'light',
    changeTheme: (theme: string) => {
      setThemeSetting({ ...themeSetting, theme: theme })
    }
  });
  return (
    <ThemeContext.Provider value={themeSetting}>
      <html lang="en" data-theme={themeSetting.theme}>
        <body className='relative'>
          {children}
          <Footer />
        </body>
      </html>
    </ThemeContext.Provider>
  )
}
