'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Button from './Button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="bg-white/50 fixed top-0 z-50 w-full max-w-full backdrop-blur-md shadow-md shadow-black/20">
            <div className="max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-60px)] lg:max-w-[1248px] mx-auto py-2">
                <div className="flex justify-between items-center h-14 md:h-16 lg:h-18">
                    {/* Logo */}
                    <Link href="/" className="relative h-full aspect-3/1">
                        <Image src='/images/logo.png' alt="Triangle Print Spot Logo" fill className="object-contain"/>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-black font-medium text-lg font-mono relative pb-1 hover:font-bold transition-all duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button href="/contact" className="ml-2">
                            Get a Quote
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-black p-2 rounded-md transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white/50 shadow-md shadow-black/20 backdrop-blur-md">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-black hover:font-bold transition-all duration-200 font-medium font-mono"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <Button href="/contact" className="w-full">
                                Get a Quote
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}