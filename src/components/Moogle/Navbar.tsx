"use client"

import Link from "next/link";
import React from "react";
import { Icon } from '@iconify/react';
import { Button } from "react-daisyui";

const Navbar = ({ theme, onThemeChange }: { theme: string, onThemeChange: any }) => {
	return (
		<header className="w-full z-10" >
			<nav className="max-w-full px-6 py-4">
				<div className="flex justify-between">
					<div className="flex gap-5 items-center">
						<Link href="#" className="link__underline_hover">
							About
						</Link>
						<Link href="#" className="link__underline_hover">
							Store
						</Link>
					</div>
					<div className="flex gap-5 items-center">
						<Link href="#" className="link__underline_hover">
							Mmail
						</Link>
						<Link href="#" className="link__underline_hover">
							Images
						</Link>
						<button className="rounded-full p-2 items-center hover:bg-[#f0f0f0]">
							<Icon icon="icon-park-outline:application-menu" height={20} />
						</button>
						<button className={`rounded ${theme === 'light' ? 'bg-[#1a73e8] text-white' : 'bg-[#8bb3fb] text-black'} px-7 py-3`}>Sign in</button>
						<button color="primary" onClick={() => onThemeChange('dark')}>Dark</button>
						<button color="primary" onClick={() => onThemeChange('light')}>Light</button>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
