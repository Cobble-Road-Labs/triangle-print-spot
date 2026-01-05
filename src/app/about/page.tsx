import Image from "next/image";
import { CalendarHeart, Award, Users, ClockPlus, HouseHeart, Shield, Compass } from "lucide-react";
import Button from "@/components/Button";
import ArrowLink from "@/components/ArrowLink";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center p-4">
            <main className="flex flex-col items-center gap-16 md:gap-21 lg:gap-24 w-full max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-60px)] lg:max-w-[1248px]">
                {/*Hero section*/}
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative mt-24">
                    <div className="flex flex-col gap-4 items-start flex-1 relative z-1">
                        <h1 className=" capitalize font-heading font-black text-[40px] md:text-5xl lg:text-[64px] leading-tight">Family-owned custom printing services in Vanderbijlpark</h1>
                        <p className="font-mono text-base lg:text-lg">Since 1998, our family-run shop has provided the Vaal Triangle with top-quality custom printing. We blend tradition and modern creativity to deliver precision and excellence. Trusted for all custom printing needs in Vanderbijlpark and beyond.</p>
                        <div className="flex flex-row flex-wrap gap-3 md:gap-3.5 lg:gap-4">
                          <Button href="/contact" variant="primary">Request Quote</Button>
                          <Button href="/services" variant="secondary">Explore Services</Button>
                        </div>
                    </div>
                    <div className="flex-1 shrink-0 grow aspect-3/4 relative z-1 max-h-[517px] w-full">
                        <Image src="/images/about/about-hero-img.png" alt="" fill className="object-contain"/>
                    </div>
                    <div className="aspect-square bg-red w-[600] lg:w-[720] blur-[250px] opacity-80 rounded-full absolute -right-50 lg:right-0"></div>
                </section>
                {/*Stats Section*/}
                <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full" id="statistics">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-3.5 lg:gap-4 items-start">
                        <CalendarHeart size={32} className="text-red md:w-12 md:h-12"/>
                        <div>
                            <h3 className="font-mono font-bold text-base md:text-lg lg:text-xl">25+</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Years of high quality printing</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-3.5 lg:gap-4 items-start">
                        <Award size={32} className="text-red md:w-12 md:h-12"/>
                        <div>
                            <h3 className="font-mono font-bold text-base md:text-lg lg:text-xl">95%</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Customer satisfaction rate</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-3.5 lg:gap-4 items-start">
                        <Users size={32} className="text-red md:w-12 md:h-12"/>
                        <div>
                            <h3 className="font-mono font-bold text-base md:text-lg lg:text-xl">100+</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Satisfied customers</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-3.5 lg:gap-4 items-start">
                        <ClockPlus size={32} className="text-red md:w-12 md:h-12"/>
                        <div>
                            <h3 className="font-mono font-bold text-base md:text-lg lg:text-xl">&lt; 24 hours</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Response time to queries</p>
                        </div>
                    </div>
                </section>
                {/*Mission Section*/}
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative" id="our-mission">
                    <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1">
                        <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Our mission</p>
                        <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">Empowering creativity and quality printing since 1998</h2>
                        <p className="font-mono font-normal text-xs md:text-sm lg:text-base">As a family-owned printing shop in Vanderbijlpark, we are dedicated to delivering unparalleled service, innovative printing solutions, and superior craftsmanship. With a passion for precision and a commitment to exceeding expectations, we strive to be the trusted partner for all your custom printing needs in the Vaal Triangle. Our mission is to inspire, support, and collaborate with individuals and businesses, bringing their visions to life through our expertise and unwavering dedication to excellence.</p>
                    </div>
                    <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                        <Image src="/images/about/Printing_Poster_Mockup_3.png" alt="A printer generating a poster, prominently displayed with a grey background." fill className="object-contain"/>
                    </div>
                </section>
                {/*Our Story Section*/}
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative" id="our-story">
                    <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                        <Image src="/images/about/Eb375dfv08OdShcofR8ZgH8QWY.webp" alt="The Triangle Print Spot team, dressed in red shirts and blue jeans, stands confidently at their store counter." fill className="object-cover object-left"/>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1">
                        <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Our story</p>
                        <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">From Vision to legacy</h2>
                        <p className="font-mono font-normal text-xs md:text-sm lg:text-base">
                            Our story began in 1998 when Johannes Hendrik Yssel took a bold step to launch his own printing business. Despite navigating both triumphs and challenges, his unwavering dedication laid the foundation for what Triangle Print Spot is today.
                            <br/><br/>
                            Now, under the leadership of the founder's wife and grandson, Desireé Yssel and Roan Brink, we blend youthful energy with seasoned expertise. After 25 years, our commitment to delivering quality service and products remains steadfast, honoring the vision that started it all.
                        </p>
                    </div>
                </section>
                {/*Values Section*/}
                <section className="flex flex-col gap-4 mg:gap-5 lg:gap-6 items-center relative w-full" id="our-values">
                    <div className="flex flex-col items-start gap-3 md:gap-3.5 lg:gap-4 w-full">
                        <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2 text-left">Our values</p>
                        <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl text-left capitalize">The Guiding Principles that Defines us</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mt-4">
                        <div className="flex flex-col items-start gap-3 md:gap-3.5 lg:gap-4">
                            <Award size={32} className="text-red md:w-12 md:h-12"/>
                            <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Quality</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">Upholding the highest standards of excellence in every aspect of our work, ensuring superior quality in every product and service we deliver.</p>
                        </div>
                        <div className="flex flex-col items-start gap-3 md:gap-3.5 lg:gap-4">
                            <HouseHeart size={32} className="text-red md:w-12 md:h-12"/>
                            <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Family-Values</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">Embracing the traditions, values, and legacy of our family-owned business, fostering a sense of unity, loyalty, and pride in our heritage.</p>
                        </div>
                        <div className="flex flex-col items-start gap-3 md:gap-3.5 lg:gap-4">
                            <Shield size={32} className="text-red md:w-12 md:h-12"/>
                            <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Reliability</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">Consistently delivering on promises, deadlines, and commitments, ensuring reliability and dependability in all our services.</p>
                        </div>
                        <div className="flex flex-col items-start gap-3 md:gap-3.5 lg:gap-4">
                            <Compass size={32} className="text-red md:w-12 md:h-12"/>
                            <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Integrity</h3>
                            <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">Conducting business with honesty, transparency, and ethical practices, fostering trust and reliability in all our interactions.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}