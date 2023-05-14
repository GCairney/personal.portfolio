import React, {Component} from "react";
import { navLinks } from '@/data';
import Link from "next/link";


export default function Header(){
    return (
        <header>
            <div>
                <nav className="container flex justify-end h-24 px-6 py-2 mx-auto ">
                    {navLinks.map((link, index) => {
                        return (
                            <ul key={index} >
                                <Link href={link.path} className="flex items-center justify-center px-3 text-blue-400">
                                    <li>{link.name}</li>
                                </Link>
                            </ul>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}