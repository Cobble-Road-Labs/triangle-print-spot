import Image from 'next/image';
import {  } from 'lucide-react';

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center p-4">
            <main className="flex flex-col items-center gap-16 md:gap-21 lg:gap-24 w-full max-w-[calc(100vw-40px)] md:max-w-[774px] lg:max-w-[1248px]">
                {/*Hero section*/}
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative w-full">
                    <div className="flex flex-col gap-4 items-start flex-1 relative z-1">
                        <h1 className=" capitalize font-heading font-black text-[40px] md:text-5xl lg:text-[64px]">Let us bring your Ideas to Life</h1>
                        <p className="font-mono text-base lg:text-lg">Contact us to discuss your printing needs, request a quote, or learn about our services. We're ready to help you achieve your goals with high-quality printing solutions.</p>
                    </div>
                    <div className="flex-1 aspect-square relative z-1">
                        <Image src="" alt="" fill className="object-contain"/>
                    </div>
                </section>
                {/*Contact Info Section*/}
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative">

                </section>
                {/*Reviews Section*/}
                <section></section>.
                {/*Location Section*/}
                <section>

                </section>
            </main>
        </div>
    );
}