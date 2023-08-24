import React, { useContext } from 'react'
import { Icon } from '@iconify/react';
import { ThemeContext } from "@/app/layout";

const Settings = () => {
    const theme = useContext(ThemeContext);
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="btn btn-ghost rounded-full">
                    <Icon icon="material-symbols:settings-outline" height={20} />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <div className="menu p-8 w-80 h-full bg-base-200 text-base-content text-lg">
                    <h1 className='text-2xl'>Appearance</h1>
                    <hr className='h-px my-2 border-1' />
                    <ul>
                        <li>
                            <button color="primary" onClick={() => theme.changeTheme('dark')}>
                                <Icon icon="akar-icons:moon-fill" />
                                Dark
                            </button>
                        </li>
                        <li>
                            <button color="primary" onClick={() => theme.changeTheme('light')}>
                                <Icon icon="ph:sun-fill" />
                                Light
                            </button>
                        </li>
                    </ul>
                </div>
                {/* <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <li>
                        <div className="divider"></div>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}

export default Settings