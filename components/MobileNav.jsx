"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci'
import { Heading1 } from 'lucide-react';


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

    const pathname = usePathname();

    return <Sheet>
        <SheetTrigger>
            <CiMenuFries className = "text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className = "flex flex-col">
            
            {/* LOGO */}
            <div className = "mt-32 mb-40 text-center">
                <Link href = "/">
                <h1 className = "text-4xl font-semibold">
                    Manolo<span className = "text-accent">.</span>
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
                                capitalize text-xl hover:text-accent transition-all
                                `}>

                                {link.name}
                        </Link>
                    );
                })}
            </nav>
            

        </SheetContent>
    </Sheet>;
};

export default MobileNav