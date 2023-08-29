"use client"

import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContext } from "@/app/layout";
import { Menu } from "..";
import Settings from "../Settings";

// const Navbar = ({ theme, onThemeChange }: { theme: string, onThemeChange: any }) => {
const Navbar = () => {
	const theme = useContext(ThemeContext);
	return (
		<header className="w-full z-10" >
			<nav className="max-w-full px-6 py-4">
				<div className="flex justify-between">
					<div className="flex gap-5 items-center">
						<Link href="/moogle/construction" className="link__underline_hover">
							About
						</Link>
						<Link href="/moogle/construction" className="link__underline_hover">
							Store
						</Link>
					</div>
					<div className="flex gap-5 items-center">
						<Link href="/moogle/construction" className="link__underline_hover">
							Mmail
						</Link>
						<Link href="/moogle/construction" className="link__underline_hover">
							Images
						</Link>
						{/* <Menu />
						<button className={`rounded ${theme.theme === 'light' ? 'bg-[#1a73e8] text-white' : 'bg-[#8bb3fb] text-black'} px-7 py-3`}>Sign in</button>
						<button color="primary" onClick={() => theme.changeTheme('dark')}>Dark</button>
						<button color="primary" onClick={() => theme.changeTheme('light')}>Light</button> */}
						<Settings />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
