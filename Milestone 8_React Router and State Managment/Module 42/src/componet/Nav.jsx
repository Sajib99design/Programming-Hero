
import React, { useState } from 'react'
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navData = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "About",
        path: "/about",
    },
    {
        id: 3,
        name: "Services",
        path: "/services",
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog",
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact",
    },
];


function Nav() {
    const [open, SetOpen] = useState(false);
    const links = navData.map(route => <Link key={route.id} route={route} />)

    return (
        <nav>
            <div className='flex justify-between mx-10'>
                <div className='flex gap-3' onClick={() => SetOpen(!open)}>
                    {open ? <X className='md:hidden' /> : <Menu className='md:hidden' />}
                    <h2>Logo</h2>
                </div>

                <ul className='md:flex hidden gap-3'>
                    {links}
                </ul>
                <button>Sign In </button>
            </div>
            <ul className='md:hidden mx-10'>
                {open && links}
            </ul>
        </nav>
    )
}

export default Nav
