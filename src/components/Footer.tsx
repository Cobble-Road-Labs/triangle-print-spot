import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Footer() {
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
        ];
    
    return (
        <footer className="w-full max-w-full mt-12 mb-4">
            <div className="max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-60px)] lg:max-w-[1248px] mx-auto flex flex-col gap-6">
                {/*Top*/}
                <div className='w-full flex flex-col gap-5 md:flex-row justify-between items-center'>
                    {/* Logo */}
                    <Link href="/" className="relative h-12 aspect-3/1">
                        <Image src='/images/logo.png' alt="Triangle Print Spot Logo" fill className="object-contain"/>
                    </Link>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 ">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-black font-medium text-sm md:text-base lg:text-lg font-mono relative pb-1 hover:font-bold transition-all duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button href="/contact">
                            Request a Quote
                        </Button>
                    </div>
                </div>
                {/*Middle*/}
                <div className='w-full flex flex-col md:flex-row justify-between gap-4 items-center'>
                    <div className='flex gap-4 md:gap-5 lg:gap-6'>
                        <Link href="mailto:printspotjh@gmail.com" className='flex gap-4 md:gap-5 lg:gap-6 items-center'>
                                <div className='flex flex-col gap-0'>
                                    <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base">Email</p>
                                    <p className='font-mono font-semibold text-sm md:text-base lg:text-lg'>printspotjh@gmail.com</p>
                                </div>
                            </Link>
                            <Link href="tel:+27169816758" className='flex gap-4 md:gap-5 lg:gap-6 items-center'>
                                <div className='flex flex-col gap-0'>
                                    <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base">Phone</p>
                                    <p className='font-mono font-semibold text-sm md:text-base lg:text-lg'>(016) 981 6758</p>
                                </div>
                            </Link>
                    </div>
                    <div className='flex gap-4 md:gap-5 lg:gap-6'>
                        <Link href="https://wa.me/27721643994" target="_blank" className='bg-[#25D366] shadow-lg shadow-black/20 px-4 py-2 rounded flex flex-row gap-4 text-white flex-1'>
                            <div className='relative aspect-square overflow-hidden h-6 w-6'>
                                <Image src="/icons/whatsapp-logo.svg" alt="WhatsApp Logo" fill className='object-cover'/>
                            </div>
                            <p className='font-semibold font-mono text-center text-sm md:text-base shrink-0'>Talk to us</p>
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=100092640375973" target="_blank" className='bg-[#0064E0] shadow-lg shadow-black/20 px-4 py-2 rounded flex flex-row gap-4 text-white flex-1'>
                            <div className='relative aspect-square overflow-hidden h-6 w-6'>
                                <Image src="/icons/facebook-logo.svg" alt="Facebook Logo"  fill className='object-cover'/>
                            </div>
                            <p className='font-semibold font-mono text-center text-sm md:text-base shrink-0'>Follow us</p>
                        </Link>
                    </div>
                </div>
                {/*Bottom*/}
                <div className='pt-4 md:pt-5 lg:pt-6 border-t border-black flex flex-col md:flex-row justify-between items-center w-full gap-4'>
                    <p className="font-mono text-grey text-xs md:text-sm lg:text-base">© Triangle Print Spot, 2025. All rights reserved.</p>
                    <p className="font-mono text-grey text-xs md:text-sm lg:text-base">Crafted with care and creativity by <Link href="https://www.cobbleroadlabs.com/case-studies/professional-printing-solutions-website" target="_blank" className='font-semibold hover:text-black'>Cobble Road Labs</Link></p>
                </div>
            </div>
        </footer>
    )
}