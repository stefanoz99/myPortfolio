"use client";

import { useState } from "react";
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci'


const links = [
    {
        name: "home",
        path: "/",
    },
    // {
    //     name: "services",
    //     path: "/services",
    // },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "projects",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    }
];



const MobileNav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const closeMenu = () => setIsOpen(false);

    return <Sheet open={isOpen} onOpenChange={setIsOpen}>

        <SheetTrigger className="flex gap-4 items-center">
            <p className="text-sm text-white/80">See more →</p>
            <CiMenuFries className = "text-[32px] text-accent" />
        </SheetTrigger>

        <SheetContent className = "flex flex-col">
    
            {/* LOGO */}
            <div className = "mt-32 mb-40 text-center">
                <Link href = "/">
                <h1 className = "text-4xl font-semibold">
                    Stefano Zurita Perez<span className = "text-accent">.</span>
                </h1>
                </Link>
            </div>
            
            {/* NAVEGACION */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link 
                            href={link.path} 
                            key={index} 
                            className={`${
                                link.path === pathname && 
                                "text-accent border-b-2 border-accent"
                                }
                                capitalize text-xl hover:text-accent transition-all`}
                            onClick={closeMenu}
                        >

                                {link.name}
                        </Link>
                    );
                })}
            </nav>
            

        </SheetContent>
    </Sheet>;
};

export default MobileNav
