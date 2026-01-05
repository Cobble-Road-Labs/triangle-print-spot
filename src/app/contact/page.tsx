import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center p-4">
            <main className="flex flex-col items-center gap-16 md:gap-21 lg:gap-24 w-full max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-60px)] lg:max-w-[1248px]">
                {/*Hero section*/}
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative mt-24">
                    <div className="flex flex-col gap-4 items-start flex-1 relative z-1">
                        <h1 className=" capitalize font-heading font-black text-[40px] md:text-5xl lg:text-[64px]">Let us bring your Ideas to Life</h1>
                        <p className="font-mono text-base lg:text-lg">Contact us to discuss your printing needs, request a quote, or learn about our services. We're ready to help you achieve your goals with high-quality printing solutions.</p>
                    </div>
                    <div className="flex-1 shrink-0 grow aspect-square relative z-1 max-h-[517px] w-full">
                        <Image src="/images/contact/hero.png" alt="A retro telephone with a spiral cord and a spin dialing pad. A soft red light is shone on the telephone, giving it a light red hue." fill className="object-contain"/>
                    </div>
                    <div className="aspect-square bg-red w-[600] lg:w-[720] blur-[250px] opacity-80 rounded-full absolute -right-50 lg:right-0"></div>
                </section>
                {/*Contact Info Section*/}
                <section className="flex flex-col gap-5 lg:gap-6 items-start relative w-full" id="contact-info">
                    <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">We'd love to answer your questions!</h2>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-6 flex-1 w-full">
                        <div className='flex-1 flex flex-col p-6 gap-4 bg-white rounded-2xl shadow-lg shadow-black/20 w-full'>
                            <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Fill out the form and we'll get back to you.</h3>
                            {/* Contact Form Component Comes here*/}
                        </div>
                        <div className='flex-1 flex flex-col p-6 gap-4 bg-white rounded-2xl shadow-lg shadow-black/20 w-full'>  
                            <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Alternatively, you can reach us here.</h3>
                            <Link href="mailto:printspotjh@gmail.com" className='flex gap-4 md:gap-5 lg:gap-6 items-center'>
                                <Mail size={32} className="text-red md:w-12 md:h-12"/>
                                <div className='flex flex-col gap-0'>
                                    <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base">Email</p>
                                    <p className='font-mono font-semibold text-sm md:text-base lg:text-lg'>printspotjh@gmail.com</p>
                                </div>
                            </Link>
                            <Link href="tel:+27169816758" className='flex gap-4 md:gap-5 lg:gap-6 items-center'>
                                <Phone size={32} className="text-red md:w-12 md:h-12"/>
                                <div className='flex flex-col gap-0'>
                                    <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base">Phone</p>
                                    <p className='font-mono font-semibold text-sm md:text-base lg:text-lg'>(016) 981 6758</p>
                                </div>
                            </Link>
                            <h4 className="font-heading font-bold text-lg md:text-xl lg:text-2xl text-left">Catch us on social media</h4>
                            <div className='flex gap-4 md:gap-5 lg:gap-6'>
                                <Link href="https://wa.me/27721643994" target="_blank" className='bg-[#25D366] shadow-lg shadow-black/20 px-4 py-2 rounded flex flex-row gap-4 text-white flex-1'>
                                    <div className='relative aspect-square h-full overflow-hidden'>
                                        <Image src="/icons/whatsapp-logo.svg" alt="WhatsApp Logo" fill className='object-contain'/>
                                    </div>
                                    <p className='font-semibold font-mono text-center text-sm md:text-base shrink-0'>Talk to us</p>
                                </Link>
                                <Link href="https://www.facebook.com/profile.php?id=100092640375973" target="_blank" className='bg-[#0064E0] shadow-lg shadow-black/20 px-4 py-2 rounded flex flex-row gap-4 text-white flex-1'>
                                    <div className='relative aspect-square h-full overflow-hidden'>
                                        <Image src="/icons/facebook-logo.svg" alt="Facebook Logo"  fill className='object-contain'/>
                                    </div>
                                    <p className='font-semibold font-mono text-center text-sm md:text-base shrink-0'>Follow us</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Reviews section*/}
                <section className="flex flex-col w-full items-start">
                  <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 items-start">
                    <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl">Customer Reviews</h2>
                    <p className="font-mono font-normal text-xs md:text-sm lg:text-base">We're always eager to assist you with a printing project. Reach out and let’s bring your creative vision to life.</p>
                    <Button href="/contact" variant="primary">Request Quote</Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6"></div>
                </section>
                {/*Location Section*/}
                <section className='flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative w-full' id='location'>
                    <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                        {/*Embedded Map*/}
                    </div>
                    <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1 w-full">
                        <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">Come visit us in store!</h2>
                        <div className='w-full flex flex-col gap-2'>
                            <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base">Address</p>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base leading-2.5 md:leading-3">
                                Shop 4, Executive Building, <br/><br/> C/O Van Rijn Street & FW Beyers Street, <br/><br/> Vanderbijlpark, 1900
                            </p>
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base">Operating Hours</p>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base leading-2.5 md:leading-3">
                                <strong>Monday - Friday:</strong> 8:30 - 16:00 <br/><br/> <strong>Weekends:</strong> Closed <br/><br/> <strong>Public Holidays:</strong> Closed
                            </p>
                        </div>
                    </div>
                    
                </section>
            </main>
        </div>
    );
}