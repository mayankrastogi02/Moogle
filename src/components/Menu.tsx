import React from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Menu = () => {
    return (
        <Link href="/moogle/construction" className="btn btn-ghost rounded-full">
            <Icon icon="icon-park-outline:application-menu" height={20} />
        </Link>
    )
}

export default Menu