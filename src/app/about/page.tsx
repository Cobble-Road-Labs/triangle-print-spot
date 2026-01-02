import Image from "next/image";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center p-4">
            <main className="flex flex-col items-center gap-16 md:gap-21 lg:gap-24 w-full max-w-[calc(100vw-40px)] md:max-w-[774px] lg:max-w-[1248px]">
                {/*Hero section*/}
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative">
                    <div className="flex flex-col gap-4 items-start flex-1 relative z-1">
                        <h1 className=" capitalize font-heading font-black text-[40px] md:text-5xl lg:text-[64px]">Family-owned custom printing services in Vanderbijlpark</h1>
                        <p className="font-mono text-base lg:text-lg">Since 1998, our family-run shop has provided the Vaal Triangle with top-quality custom printing. We blend tradition and modern creativity to deliver precision and excellence. Trusted for all custom printing needs in Vanderbijlpark and beyond.</p>
                    </div>
                    <div className="flex-1 aspect-3/4 relative z-1 h-[517]">
                        <Image src="" alt="" fill className="object-contain"/>
                    </div>
                </section>
                {/*Stats Section*/}
                <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-3.5 lg:gap-4 items-center md:items-start">
                        <></>
                        <div>
                            <h3 className="font-mono font-bold text-sm md:text-base lg:text-lg">25+</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Years of high quality printing</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-3.5 lg:gap-4 items-center md:items-start">
                        <></>
                        <div>
                            <h3 className="font-mono font-bold text-sm md:text-base lg:text-lg">95%</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Customer satisfaction rate</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-3.5 lg:gap-4 items-center md:items-start">
                        <></>
                        <div>
                            <h3 className="font-mono font-bold text-sm md:text-base lg:text-lg">100+</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Satisfied customers</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-3.5 lg:gap-4 items-center md:items-start">
                        <></>
                        <div>
                            <h3 className="font-mono font-bold text-sm md:text-base lg:text-lg">&lt; 24 hours</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Response time to queries</p>
                        </div>
                    </div>
                </section>
                {/*Mission Section*/}
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative">
                    <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1">
                        <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Our mission</p>
                        <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl">Empowering creativity and quality printing since 1998</h2>
                        <p className="font-mono font-normal text-xs md:text-sm lg:text-base">As a family-owned printing shop in Vanderbijlpark, we are dedicated to delivering unparalleled service, innovative printing solutions, and superior craftsmanship. With a passion for precision and a commitment to exceeding expectations, we strive to be the trusted partner for all your custom printing needs in the Vaal Triangle. Our mission is to inspire, support, and collaborate with individuals and businesses, bringing their visions to life through our expertise and unwavering dedication to excellence.</p>
                    </div>
                    <div className="flex-1 relative aspect-square rounded-2xl overflow-hidden">
                        <Image src="" alt="" fill className="object-contain"/>
                    </div>
                </section>
                {/*Our Story Section*/}
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative">
                    <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden">
                        <Image src="" alt="" fill className="object-contain"/>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1">
                        <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Our story</p>
                        <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl">From Vision to legacy</h2>
                        <p className="font-mono font-normal text-xs md:text-sm lg:text-base">
                            Our story began in 1998 when Johannes Hendrik Yssel took a bold step to launch his own printing business. Despite navigating both triumphs and challenges, his unwavering dedication laid the foundation for what Triangle Print Spot is today.
                            <br/><br/>
                            Now, under the leadership of the founder's wife and grandson, Desireé Yssel and Roan Brink, we blend youthful energy with seasoned expertise. After 25 years, our commitment to delivering quality service and products remains steadfast, honoring the vision that started it all.
                        </p>
                    </div>
                </section>
                {/*Values Section*/}
                <section className="flex flex-col gap-4 mg:gap-5 lg:gap-6 items-center relative">
                    <div className="flex flex-col items-center gap-3 md:gap-3.5 lg:gap-4">
                        <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2 text-center">Our values</p>
                        <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl text-center">The Guiding Principles that Defines us</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                        <div className="flex flex-col items-center gap-3 md:gap-3.5 lg:gap-4">
                            <></>
                            <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-center">Quality</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-center">Upholding the highest standards of excellence in every aspect of our work, ensuring superior quality in every product and service we deliver.</p>
                        </div>
                        <div className="flex flex-col items-center gap-3 md:gap-3.5 lg:gap-4">
                            <></>
                            <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-center">Family-Values</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-center">Embracing the traditions, values, and legacy of our family-owned business, fostering a sense of unity, loyalty, and pride in our heritage.</p>
                        </div>
                        <div className="flex flex-col items-center gap-3 md:gap-3.5 lg:gap-4">
                            <></>
                            <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-center">Reliability</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-center">Consistently delivering on promises, deadlines, and commitments, ensuring reliability and dependability in all our services.</p>
                        </div>
                        <div className="flex flex-col items-center gap-3 md:gap-3.5 lg:gap-4">
                            <></>
                            <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-center">Integrity</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-center">Conducting business with honesty, transparency, and ethical practices, fostering trust and reliability in all our interactions.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}